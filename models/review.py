#!/usr/bin/env python3
"""Review Model"""

from sqlalchemy import Column, String, ForeignKey, Integer, Text
from models.storage import Base
from models.base_model import BaseModel


class Review(BaseModel, Base):
    """This class stores users addresses"""

    __tablename__ = "reviews"

    user_id = Column(String(60), ForeignKey("users.id"))
    product_id = Column(String(60), ForeignKey("products.id"))
    rating = Column(Integer())
    comment = Column(Text())
