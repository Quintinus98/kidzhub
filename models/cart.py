#!/usr/bin/env python3
"""Carts Model"""

from sqlalchemy import Column, String, Integer, ForeignKey
from models.base_model import BaseModel, Base


class CartItems(BaseModel, Base):
    """This class stores information about orders placed"""

    __tablename__ = "cartitems"

    user_id = Column(String(60), ForeignKey("users.id"))
    product_id = Column(String(60), ForeignKey("products.id"))
    quantity = Column(Integer(), nullable=False, default=1)
    size = Column(String(10), nullable=False)
