#!/usr/bin/env python3
"""Review Model"""

from sqlalchemy import Column, String, ForeignKey, Integer, Text
from models.base_model import BaseModel, Base


class Review(BaseModel, Base):
    """This class stores users addresses"""

    __tablename__ = "reviews"

    user_id = Column(String(60), ForeignKey("users.id"))
    product_id = Column(String(60), ForeignKey("products.id"))
    orderitems_id = Column(String(60), ForeignKey("orderitems.id"))
    rating = Column(Integer())
    comment = Column(Text())
