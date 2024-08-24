#!/usr/bin/env python3
"""Products Model"""

from sqlalchemy import Column, String, Integer, Double, ForeignKey, Text
from models.base_model import BaseModel, Base
from sqlalchemy.orm import relationship


class Product(BaseModel, Base):
    """This class stores information about products
    available"""

    __tablename__ = "products"

    name = Column(String(50), nullable=False)
    description = Column(Text(), nullable=False)
    sold = Column(Integer(), nullable=False, default=0)
    discount = Column(Integer(), nullable=False, default=0)
    price = relationship("Price", cascade="all, delete", uselist=False)
    category = relationship("Category", cascade="all, delete", uselist=False)
    images = relationship("Image", cascade="all, delete")

    def __repr__(self) -> str:
        return f"<Product {self.name}: {self.price}>"


class Image(BaseModel, Base):
    """This class stores the image urls for the products"""

    __tablename__ = "images"

    url = Column(String(255), nullable=False)
    product_id = Column(String(60), ForeignKey("products.id"), nullable=False)

    def __repr__(self):
        return f"<Image {self.url}>"


class Price(BaseModel, Base):
    """This class stores the prices of the products"""

    __tablename__ = "prices"

    XS = Column(Double(), nullable=True)
    S = Column(Double(), nullable=True)
    M = Column(Double(), nullable=True)
    L = Column(Double(), nullable=True)
    XL = Column(Double(), nullable=True)
    XXL = Column(Double(), nullable=True)
    product_id = Column(String(60), ForeignKey("products.id"), nullable=False)

    def __repr__(self) -> str:
        return f"Prices\t XS: {self.XS} S: {self.S} M: {self.M}"
