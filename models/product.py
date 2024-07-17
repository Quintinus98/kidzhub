#!/usr/bin/env python3
"""Products Model"""

from sqlalchemy import Column, String, Integer, Double
from models.base_model import BaseModel, Base



class Product(BaseModel, Base):
    """This class stores information about products
    available"""

    __tablename__ = "products"

    name = Column(String(50), nullable=False)
    description = Column(String(125), nullable=False)
    image = Column(String(125), nullable=False)
    price = Column(Double(), nullable=False)
    quantity = Column(Integer(), nullable=False)
