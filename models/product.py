#!/usr/bin/env python3
"""Products Model"""

from sqlalchemy import Column, String, Integer, Double, ForeignKey
from storage import Base
from models.base_model import BaseModel


class Product(BaseModel, Base):
    """This class stores information about products
    available"""

    __tablename__ = "products"

    name = Column(String(50), nullable=False)
    description = Column(String(125), nullable=False)
    price = Column(Double(), nullable=False)
    quantity = Column(Integer(), nullable=False)
