from flask import Flask, jsonify, request, make_response
from flask_cors import CORS
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, joinedload
from datetime import timedelta, datetime
import os
import yaml
from models import Base, UserMetadata, UserMaster, PaymentInfo, BlacklistedTokens
import uuid
from flask_jwt_extended import JWTManager, create_access_token, create_refresh_token, jwt_required, get_jwt_identity
import logging
from werkzeug.security import generate_password_hash, check_password_hash
import utils
import psycopg2

app = Flask(__name__)
CORS(app, supports_credentials=True)

environment = os.environ.get("env") or "dev"
# db_username = os.environ.get("db_username")
# db_password = os.environ.get("db_password")
# db_ip = os.environ.get("db_ip")
# db_port = os.environ.get("db_port")
# db_name = os.environ.get("db_name")
cdn_url = os.environ.get("cdn_url") or "not set"
payment_gateway_url = os.environ.get("payment_gateway_url") or "not set"
payment_gateway_token = os.environ.get("payment_gateway_token") or "not set"

# Logging configuration
logging.basicConfig(format="{asctime} - {levelname} - {message}", style="{", datefmt="%Y-%m-%d %H:%M:%S")

with open("config.yaml") as file:
    config = yaml.safe_load(file)[environment]

# JWT config
jwt = JWTManager(app)
jwt_secret_key = os.urandom(32).hex()
app.config["JWT_SECRET_KEY"] = jwt_secret_key
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(minutes=5)
app.config["JWT_REFRESH_TOKEN_EXPIRES"] = timedelta(minutes=30)
app.config["JWT_TOKEN_LOCATION"] = ["cookies", "headers"]
app.config['JWT_COOKIE_CSRF_PROTECT'] = False


DATABASE_URL = f"postgresql://{config["db_username"]}:{config["db_password"]}@{config["db_ip"]}:{config["db_port"]}"
logging.info(DATABASE_URL)

utils.create_database_if_not_exists(DATABASE_URL, config["db_name"])

db_engine = create_engine(DATABASE_URL)

Base.metadata.create_all(db_engine)

db_session = sessionmaker(bind=db_engine)
db_session_ac = db_session() #dbSession object


#user-end apis

@app.route('/login-user', methods=['POST'])
def user_login():
    data = request.json
    user_alias = data["user_alias"] #username == actual name && user_alias == username given by user, eg:Dedsec Potter, CoderMaster69
    password = data["password"]
    try:
        users = db_session_ac.query(UserMetadata).filter_by(user_alias=user_alias).all()
        if users and check_password_hash(users[0].user_password, password):
            user_id = users[0].user_id
            user_master_data = db_session_ac.query(UserMaster).filter_by(user_id=user_id).all()
            user_uuid = user_master_data[0].user_uuid
            is_user_admin = user_master_data[0].user_metadata.is_admin

            users[0].no_of_times_user_login += 1
            db_session_ac.commit()

            access_token = create_access_token(identity=user_alias, additional_claims={"user_uuid": user_uuid})
            refresh_token = create_refresh_token(identity=user_alias, additional_claims={"user_uuid": user_uuid})
            
            response = make_response(jsonify({'message': 'Logged in successfully', 'admin_user' : is_user_admin, "access_token": access_token, "refresh_token": refresh_token}))

            if environment == "local": 
                response.set_cookie("refresh_token_cookie", refresh_token, httponly=True, secure=True, samesite="None", max_age=timedelta(minutes=30))
            else:
                response.set_cookie("refresh_token_cookie", refresh_token, httponly=True, max_age=timedelta(minutes=30))
            return response
        else:
            return jsonify({'message': 'Username or password is incorrect'}), 400
    except Exception as e:
        print(e)
        logging.error(e)
        return jsonify({'message': 'Failed to login user'}), 500
    

@app.route("/renew-token", methods=["POST"])
@jwt_required(refresh=True)
def renew_token():
    identity = get_jwt_identity()
    refresh_token = request.cookies["refresh_token_cookie"]
    if db_session_ac.query(BlacklistedTokens).filter_by(blacklisted_token=str(hash(refresh_token))).count() != 0:
        return jsonify({"message": "Token expired or invalid"}), 401

    user_uuid = utils.decode_token(refresh_token, jwt_secret_key)["user_uuid"]
    logging.info(user_uuid)
    new_access_token =  create_access_token(identity, additional_claims={"user_uuid": user_uuid})
    return jsonify({"access_token": new_access_token})

@app.route('/register-user', methods=['POST'])
def user_registration():
    data = request.json
    user_uuid = uuid.uuid4()
    name = data['full_name']
    user_alias = data['user_alias']
    password = generate_password_hash(data['user_password'])
    phone = data['phone_no']
    email = data['email']

    users = db_session_ac.query(UserMetadata).filter_by(user_alias=user_alias).all()
    users_all = db_session_ac.query(UserMetadata).all()
    if users:
        return jsonify({"message": "This username already exists, please try a different one"}), 400
    
    if len(users_all) == 0:
        user_id = 1
    else:
        user_id = len(users_all) + 1

    new_user_master = UserMaster(
        user_uuid=user_uuid,
        user_id=user_id
    )

    new_user_metadata = UserMetadata(
        user_name=name,
        user_alias=user_alias,
        user_password=password,
        user_phone_no=phone,
        user_email=email,
        no_of_times_user_login=0,
        is_admin=False
    )

    new_user_master.user_metadata = new_user_metadata

    try:
        db_session_ac.add(new_user_master)
        db_session_ac.commit()
        return jsonify({'message': 'User registered successfully'}), 200
    except Exception as e:
        db_session_ac.rollback()
        logging.error(e)
        return jsonify({'message': 'Failed to register'}), 500

@app.route("/logout", methods=["POST"])
@jwt_required(refresh=True)
def logout():
    try:
        refresh_token = request.cookies["refresh_token_cookie"]
        bt = BlacklistedTokens(blacklisted_token=hash(refresh_token))
        db_session_ac.add(bt)
        db_session_ac.commit()
        response = make_response(jsonify({"message": "Logout successful"}))
        if environment == "local": 
            response.set_cookie("refresh_token_cookie", refresh_token, httponly=True, secure=True, samesite="None", max_age=timedelta(minutes=0))
        else:
            response.set_cookie("refresh_token_cookie", refresh_token, httponly=True, max_age=timedelta(minutes=0))
        
        return response
    except Exception as e:
        logging.error(e)
        return jsonify({"message": "Something went wrong"}), 500
    

@app.route("/get-user-data", methods=['GET'])
@jwt_required()
def get_user_data():
    response = {}
    try:
        token = request.headers['Authorization'].split()[1]
        user_alias = utils.decode_token(token, secret=jwt_secret_key)["sub"]

        user_data = db_session_ac.query(UserMetadata).filter_by(user_alias=user_alias).first()
        response = {
            "message": "User details fetched successfully",
            "user_id": user_data.user_id,
            "user_name": user_data.user_name,
            "user_phone_no": user_data.user_phone_no,
            "user_email": user_data.user_email,
            "no_of_times_user_login": user_data.no_of_times_user_login,
            "is_admin": user_data.is_admin
        }

        return jsonify(response)
    except Exception as e:
        logging.error(e)
        response = {
            "message": "Something went wrong"
        }
        return jsonify(response), 500

@app.route('/user-details-list/', defaults={'user_uuid': None}, methods=['GET'])
@app.route('/user-details-list/<string:user_uuid>', methods=['GET'])
@jwt_required()
def get_user_details_list(user_uuid):
    if user_uuid is None:
        userDetails = db_session_ac.query(UserMaster).options(joinedload(UserMaster.user_metadata)).all()
        resBody = []
        for users in userDetails:
            temp = {
                'user_id' : users.user_uuid,
                'user_metadata' : {
                    "full_name" : users.user_metadata.user_name,
                    "user_alias" : users.user_metadata.user_alias,
                    "user_password" : users.user_metadata.user_password,
                    "phone_no" : users.user_metadata.user_phone_no,
                    "email" : users.user_metadata.user_email,
                    "user_login_count" : users.user_metadata.no_of_times_user_login
                }
            }
            resBody.append(temp)

        # print(resBody)
        return jsonify(resBody), 200
    else:
        userDetails = db_session_ac.query(UserMaster).filter_by(user_uuid=user_uuid).first()
        temp = {
                    'user_id' : userDetails.user_uuid,
                    'user_metadata' : {
                        "full_name" : userDetails.user_metadata.user_name,
                        "user_alias" : userDetails.user_metadata.user_alias,
                        "user_password" : userDetails.user_metadata.user_password,
                        "phone_no" : userDetails.user_metadata.user_phone_no,
                        "email" : userDetails.user_metadata.user_email,
                        "user_login_count" : userDetails.user_metadata.no_of_times_user_login
                    }
                }
        return jsonify(temp), 200

@app.route('/delete-user', methods=['DELETE'])
@jwt_required()
def delete_user():
    data = request.json
    user_to_be_deleted = data['user_to_be_deleted']
    requester_id = data['requester_user_id']

    requestedUser = db_session_ac.query(UserMaster).filter_by(user_uuid=user_to_be_deleted).first()

    if(requester_id == user_to_be_deleted): #user self-delete logic
        try:
            db_session_ac.delete(requestedUser)
            db_session_ac.commit()
            return jsonify({'message': 'user deleted successfully'}), 200
        except Exception as e:
            return jsonify({'message': 'cannot delete user, user does not exist'}), 400
    
    else: #admin deletes user logic
        requesterUser = db_session_ac.query(UserMaster).filter_by(user_uuid=requester_id).first()
        if(requesterUser and requesterUser.user_metadata.is_admin):
            db_session_ac.delete(requestedUser)
            db_session_ac.commit()
            return jsonify({'message': 'user deleted successfully'}), 200
        else:
            return jsonify({'message': 'cannot delete user, user unauthorized or does not exist'}), 400

@app.route('/make-admin', methods=['PUT'])
@jwt_required()
def make_admin():
    data = request.json
    user_to_be_made_admin = data['user_to_be_made_admin']
    requester_id = data['requester_user_id']
    requestedUser = db_session_ac.query(UserMaster).filter_by(user_uuid=user_to_be_made_admin).first()
    requesterUser = db_session_ac.query(UserMaster).filter_by(user_uuid=requester_id).first()
    if(requesterUser):
        requestedUser.user_metadata.is_admin = True
        db_session_ac.commit()
        return jsonify({'message': 'user made admin successfully'}), 200
    else:
        return jsonify({'message': 'cannot make user admin'}), 400

@app.route('/edit-user', methods=['PUT'])
@jwt_required()
def edit_user():
    data = request.json
    user_to_be_edited = data['user_to_be_edited']
    requester_id = data['requester_user_id']
    edit_metadata = data['edit_metadata']
    requestedUser = db_session_ac.query(UserMaster).filter_by(user_uuid=user_to_be_edited).first()
    requesterUser = db_session_ac.query(UserMaster).filter_by(user_uuid=requester_id).first()
    if(user_to_be_edited == requester_id):
        try:
            flag = True
            for field, model_attr in utils.user_update_fields.items():
                if field in edit_metadata and edit_metadata.get(field) is not None and flag:
                    if(field == "is_admin"):
                        if(requesterUser.user_metadata.is_admin):
                            setattr(requestedUser.user_metadata, model_attr.split('.')[-1], edit_metadata[field])
                        else:
                            flag = False
                    else:
                        setattr(requestedUser.user_metadata, model_attr.split('.')[-1], edit_metadata[field])
            db_session_ac.commit()
            if(flag):
                return jsonify({'message': 'user details edited successfully'}), 200
            else:
                return jsonify({'error': 'privillege escalation attempted'}), 403
        except Exception as e:
            return jsonify({'error': 'user details cannot be edited'}), 400
    else:
        if(requesterUser and requesterUser.user_metadata.is_admin):
            for field, model_attr in utils.user_update_fields.items():
                if field in edit_metadata and edit_metadata.get(field) is not None:
                    setattr(requestedUser.user_metadata, model_attr.split('.')[-1], edit_metadata[field])
            db_session_ac.commit()
            return jsonify({'message': 'user details edited successfully'}), 200
        else:
            return jsonify({'message': 'cannot modify user'}), 400

#s3-bucket-end apis
# @app.route('/create-minio-bucket')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)