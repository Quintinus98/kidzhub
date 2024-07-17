#!/usr/bin/env python3
"""Address Model"""

from sqlalchemy import Column, String, ForeignKey
from models.base_model import BaseModel, Base



class Address(BaseModel, Base):
    """This class stores users addresses"""

    __tablename__ = "addresses"

    user_id = Column(String(60), ForeignKey("users.id"))
    street_address = Column(String(255), nullable=False)
    city = Column(String(100), nullable=False)
    state = Column(String(100), nullable=False)
    country = Column(String(100), nullable=False)
    postal_code = Column(String(20), nullable=True)
