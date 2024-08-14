#!/usr/bin/env python3
"""Products Model"""

from sqlalchemy import Column, String, Integer, Double, ForeignKey, Text
from models.base_model import BaseModel, Base
from sqlalchemy.orm import relationship


class Category(BaseModel, Base):
    """This class stores information about product categories"""

    __tablename__ = "categories"

    category = Column(String(50), nullable=False)
    product_id = Column(String(60), ForeignKey("products.id"), nullable=False)

    def __repr__(self) -> str:
        return f"<Category {self.id}: {self.name}>"


class Tag(BaseModel, Base):
    """This class stores information about product tags"""

    __tablename__ = "tags"

    product_tags = Column(String(255), nullable=False)
    product_id = Column(String(60), ForeignKey("products.id"), nullable=False)

    def __repr__(self) -> str:
        return f"<Tag {self.id}: {self.product_tags}>"
