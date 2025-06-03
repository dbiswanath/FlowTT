from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, DateTime, Integer, String, Boolean, ForeignKey, Text
from sqlalchemy.orm import relationship
from datetime import datetime

Base = declarative_base()

class UserMetadata(Base):
    __tablename__ = "user_metadata"

    user_id = Column(Integer,ForeignKey('user_master.user_id'), primary_key=True, autoincrement=True)
    user_name = Column(String)
    user_alias = Column(String)
    user_password = Column(String)
    user_phone_no = Column(String)
    user_email = Column(String)
    no_of_times_user_login = Column(Integer)
    is_admin = Column(Boolean)

    user_master = relationship("UserMaster", back_populates="user_metadata")

class UserMaster(Base):
    __tablename__ = "user_master"

    user_id = Column(Integer, primary_key=True, autoincrement=True)
    user_uuid = Column(String)

    user_metadata = relationship("UserMetadata", back_populates="user_master", uselist=False, cascade="all, delete")
    payment_info = relationship("PaymentInfo", back_populates="user_master", cascade="all, delete")

class PaymentInfo(Base):
    __tablename__ = "payment_info"

    id = Column(Integer, primary_key=True, autoincrement=True)
    upi_id = Column(String)
    user_id = Column(Integer, ForeignKey('user_master.user_id'))
    payment_gateway = Column(String)
    payment_amount = Column(Integer)
    payment_status = Column(String)
    payment_id = Column(String)
    payment_done_on = Column(DateTime, default=datetime.now)
    payment_mode = Column(String)
    payment_remarks = Column(Text)

    user_master = relationship("UserMaster", back_populates="payment_info", uselist=False, cascade="all, delete")

class BlacklistedTokens(Base):
    __tablename__ = "blacklisted_tokens"

    id = Column(Integer, primary_key=True, autoincrement=True)
    blacklisted_token = Column(String)
    blacklisted_timestamp = Column(DateTime, default=datetime.now)