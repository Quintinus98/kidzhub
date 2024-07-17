#!/usr/bin/env python3
"""User Model"""

from sqlalchemy import Column, String
from models.base_model import BaseModel, Base
import bcrypt


class User(BaseModel, Base):
    """Represents a User table"""

    __tablename__ = "users"

    firstname = Column(String(250), nullable=False)
    lastname = Column(String(250), nullable=False)
    email = Column(String(250), nullable=False, unique=True)
    username = Column(String(250), nullable=False)
    password = Column(String(250), nullable=False)
    session_id = Column(String(250))
    reset_token = Column(String(250))

    def __init__(self, **kwargs) -> None:
        super().__init__(**kwargs)

    def __repr__(self):
        return (
            "<User(firstname='%s', lastname='%s', email='%s', username='%s', password='%s', session_id='%s', reset_token='%s')>"
            % (
                self.firstname,
                self.lastname,
                self.email,
                self.username,
                self.password,
                self.session_id,
                self.reset_token,
            )
        )

    def __setattr__(self, name: str, value) -> None:
        """
        Encrypt password before setting attribute.
        """
        if name == "password":
            value = bcrypt.hashpw(value.encode("utf-8"), bcrypt.gensalt())
        return super().__setattr__(name, value)
