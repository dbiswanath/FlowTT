import psycopg2
import logging
import jwt

user_update_fields = {
    "full_name" : "user_metadata.user_name",
    "user_alias" : "user_metadata.user_alias",
    "user_password" : "user_metadata.user_password",
    "phone_no" : "user_metadata.user_phone_no",
    "email" : "user_metadata.user_email",
    "no_of_times_user_login" : "user_metadata.no_of_times_user_login",
    "is_admin" : "user_metadata.is_admin"
}

def create_database_if_not_exists(db_url, db_name):
    try:
        # Connect to the default 'postgres' database
        conn = psycopg2.connect(db_url)
        conn.autocommit = True
        cur = conn.cursor()
        
        # Check if the database exists
        cur.execute(f"SELECT 1 FROM pg_database WHERE datname = '{db_name}'")
        exists = cur.fetchone()
        
        if not exists:
            # Create the database if it does not exist
            cur.execute(f'CREATE DATABASE "{db_name}"')
            print(f"Database '{db_name}' created successfully!")
        
        cur.close()
        conn.close()
    except Exception as e:
        logging.error(f"Error creating database: {e}")

def decode_token(token, secret):
    return jwt.decode(token, algorithms=["HS256"], key=secret)