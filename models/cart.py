#!/usr/bin/env python3
"""Carts Model"""

from sqlalchemy import Column, String, Integer, ForeignKey
from models.base_model import BaseModel, Base
from sqlalchemy.orm import relationship


class Cart(BaseModel, Base):
    """This class stores information about items in a user's cart"""

    __tablename__ = "carts"

    user_id = Column(String(60), ForeignKey("users.id"))
    cartItems = relationship("CartItems", cascade="all, delete")


class CartItems(BaseModel, Base):
    """This class stores information about orders placed"""

    __tablename__ = "cartitems"

    cart_id = Column(String(60), ForeignKey("carts.id"))
    product_id = Column(String(60), ForeignKey("products.id"))
    quantity = Column(Integer(), nullable=False)
