#!/usr/bin/env python3
"""User Model"""

from sqlalchemy import Column, String
from models.storage import Base
from models.base_model import BaseModel
import bcrypt


class User(BaseModel, Base):
    """Represents a User table"""

    __tablename__ = "users"

    firstname = Column(String(60), nullable=False)
    lastname = Column(String(60), nullable=False)
    email = Column(String(60), nullable=False, unique=True)
    username = Column(String(60), nullable=False)
    hashed_password = Column(String(60), nullable=False)

    def __init__(self, **kwargs) -> None:
        super().__init__(**kwargs)
        if "password" in kwargs:
            self.password = kwargs["password"]

    @property
    def password(self):
        raise AttributeError("Password cannot be read")

    @property.setter
    def password(self, password):
        self.hashed_password = bcrypt.hashpw(
            password.encode("utf-8"), bcrypt.gensalt()
        )

    def __repr__(self):
        return "<User(firstname='%s', lastname='%s', email='%s')>" % (
            self.firstname,
            self.lastname,
            self.email,
        )
