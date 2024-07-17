#!/usr/bin/env python3
"""Orders Model"""

from sqlalchemy import Column, String, Integer, ForeignKey, Double
from models.base_model import BaseModel, Base



class Order(BaseModel, Base):
    """This class stores information about orders placed"""

    __tablename__ = "orders"

    user_id = Column(String(60), ForeignKey("users.id"))
    status = Column(String(60), nullable=False)
    quantity = Column(Integer(), nullable=False)
    # order_date will be equal to created_at (gen from BaseModel)


class OrderItems(BaseModel, Base):
    """This class stores information about orders placed"""

    __tablename__ = "orderitems"

    order_id = Column(String(60), ForeignKey("orders.id"))
    product_id = Column(String(60), ForeignKey("products.id"))
    quantity = Column(Integer(), nullable=False)
    price = Column(Double(), nullable=False)
