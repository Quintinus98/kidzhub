#!/usr/bin/env python3
"""Products Model"""

from sqlalchemy import Column, String, Integer, Double, ForeignKey
from models.base_model import BaseModel, Base
from sqlalchemy.orm import relationship


class Product(BaseModel, Base):
    """This class stores information about products
    available"""

    __tablename__ = "products"

    name = Column(String(50), nullable=False)
    description = Column(String(125), nullable=False)
    price = Column(Double(), nullable=False)
    quantity = Column(Integer(), nullable=False)
    images = relationship("Image", cascade="all, delete")

    def __repr__(self) -> str:
        return f"<Product {self.name}: {self.price}>"


class Image(BaseModel, Base):
    """This class stores the image urls for the products"""

    __tablename__ = "images"

    url = Column(String(255), nullable=False)
    product_id = Column(Integer, ForeignKey("products.id"), nullable=False)

    def __repr__(self):
        return f"<Image {self.url}>"
