#!/usr/bin/env python3
"""User Model"""

from sqlalchemy import Column, String
from models.base_model import BaseModel, Base
import bcrypt


class User(BaseModel, Base):
    """Represents a User table"""

    __tablename__ = "users"

    firstname = Column(String(60), nullable=False)
    lastname = Column(String(60), nullable=False)
    email = Column(String(60), nullable=False, unique=True)
    username = Column(String(60), nullable=False)
    hashed_password = Column(String(60), nullable=False)
    session_id = Column(String(250))
    reset_token = Column(String(250))

    def __repr__(self):
        return "<User(firstname='%s', lastname='%s', email='%s')>" % (
            self.firstname,
            self.lastname,
            self.email,
        )
