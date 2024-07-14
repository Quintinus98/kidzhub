#!/usr/bin/env python3
"""User Model"""

from sqlalchemy import Column, Integer, String
from storage import Base


class User(Base):
    """Represents a User table"""

    __tablename__ = "users"

    id = Column(Integer, primary_key=True)
    name = Column(String)
    fullname = Column(String)
    nickname = Column(String)

    def __repr__(self):
        return "<User(name='%s', fullname='%s', nickname='%s')>" % (
            self.name,
            self.fullname,
            self.nickname,
        )
