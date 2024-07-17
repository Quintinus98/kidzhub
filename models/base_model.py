#!/usr/bin/env python3
"""Base Model"""
from uuid import uuid4
from datetime import datetime, timezone
from sqlalchemy import Column, String, DateTime
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class BaseModel:
    """Represents the entry point for all other classes"""

    id = Column(String(60), primary_key=True)
    created_at = Column(DateTime, default=datetime.now(timezone.utc))
    updated_at = Column(DateTime, default=datetime.now(timezone.utc))

    def __init__(self, **kwargs) -> None:
        """initialize Base class"""
        if not kwargs:
            self.id = str(uuid4())
            self.created_at = datetime.now(timezone.utc)
            self.updated_at = self.created_at
        self.create(kwargs=kwargs)

    def create(self, **kwargs):
        """Create Base with key words"""
        for key, val in kwargs.items():
            if key in ["created_at", "updated_at"]:
                val = datetime.fromisoformat(val)
            if key != "__class__":
                setattr(self, key, val)
        if "id" not in kwargs:
            self.id = str(uuid4())
        if "created_at" not in kwargs:
            self.created_at = datetime.now(timezone.utc)
        if "updated_at" not in kwargs:
            self.updated_at = self.created_at

    def save(self):
        """Saves an Object"""
        pass

    def delete(self):
        """Deletes an object"""
        pass

    def to_dict(self) -> dict:
        """Converts object to dictionary"""
        obj = {}
        obj.update(self.__dict__.copy())
        if "created_at" in obj:
            obj["created_at"] = obj["created_at"].isoformat()
        if "updated_at" in obj:
            obj["updated_at"] = obj["updated_at"].isoformat()
        obj["__class__"] = self.__class__.__name__
        obj.pop("_sa_instance_state", None)
        return obj
