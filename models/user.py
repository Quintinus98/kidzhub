#!/usr/bin/env python3
"""User Model"""

from sqlalchemy import Column, String
from storage import Base
from models.base_model import BaseModel


class User(BaseModel, Base):
    """Represents a User table"""

    __tablename__ = "users"

    firstname = Column(String(60), nullable=False)
    lastname = Column(String(60), nullable=False)
    email = Column(String(60), nullable=False)
    username = Column(String(60), nullable=False)
    password = Column(String(60), nullable=False)

    def __repr__(self):
        return "<User(firstname='%s', lastname='%s', email='%s')>" % (
            self.firstname,
            self.lastname,
            self.email,
        )
