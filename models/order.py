#!/usr/bin/env python3
"""Orders Model"""

from sqlalchemy import Column, String, Integer, ForeignKey, Double
from models.base_model import BaseModel, Base
from sqlalchemy.orm import relationship


class Order(BaseModel, Base):
    """This class stores information about orders placed"""

    __tablename__ = "orders"

    user_id = Column(String(60), ForeignKey("users.id"))
    orderItems = relationship("OrderItems", cascade="all, delete")
    payment = relationship("Payment", cascade="all, delete")


class OrderItems(BaseModel, Base):
    """This class stores information about orders placed"""

    __tablename__ = "orderitems"

    order_id = Column(String(60), ForeignKey("orders.id"))
    product_id = Column(String(60), ForeignKey("products.id"))
    quantity = Column(Integer(), nullable=False)
    price = Column(Double(), nullable=False)
    status = Column(String(60), nullable=False)
