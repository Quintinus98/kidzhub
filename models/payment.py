#!/usr/bin/env python3
"""Payment Model"""

from sqlalchemy import Column, String, Double, ForeignKey
from models.storage import Base
from models.base_model import BaseModel


class Payment(BaseModel, Base):
    """This class stores information about payments made for orders"""

    __tablename__ = "payments"

    order_id = Column(String(60), ForeignKey("orders.id"))
    amount = Column(Double(), nullable=False)
    payment_method = Column(String(50), nullable=False)
    status = Column(String(50), nullable=False)
