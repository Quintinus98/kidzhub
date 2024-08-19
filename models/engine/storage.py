#!/usr/bin/env python3
"""Storage Model"""

from sqlalchemy.orm import sessionmaker, scoped_session, Session
from sqlalchemy import create_engine

from sqlalchemy.exc import NoResultFound
from sqlalchemy.exc import InvalidRequestError

from models.base_model import Base

from models.user import User
from models.address import Address
from models.cart import Cart, CartItems
from models.order import Order, OrderItems
from models.payment import Payment
from models.product import Product
from models.review import Review


classes = {
    "User": User,
    "Address": Address,
    "Cart": Cart,
    "CartItems": CartItems,
    "Order": Order,
    "OrderItems": OrderItems,
    "Payment": Payment,
    "Product": Product,
    "Review": Review,
}


class Storage:
    """Represents a storage class"""

    def __init__(self) -> None:
        """Entry point"""
        self._engine = create_engine("sqlite:///a.db")
        Base.metadata.create_all(self._engine)
        self.__session = None

    @property
    def _session(self) -> Session:
        """Memoized session

        Load database session"""
        if self.__session is None:
            session_factory = sessionmaker(
                bind=self._engine, expire_on_commit=False
            )
            Session = scoped_session(session_factory)
            self.__session = Session
        return self.__session

    def add(self, obj):
        """Adds an object to Storage

        obj: list[object] | object"""
        if isinstance(obj, list):
            self._session.add_all(obj)
        else:
            self._session.add(obj)
        self._session.commit()

    def find_user_by(self, **kwargs) -> User:
        """This method takes in arbitrary keyword arguments and
        filters the method's input arguments.

        Return: The first row found in the users table
        """
        if not kwargs:
            raise InvalidRequestError

        allowed_keys = User.__table__.columns.keys()
        for key in kwargs.keys():
            if key not in allowed_keys:
                raise InvalidRequestError

        my_user = self._session.query(User).filter_by(**kwargs).first()
        if my_user is None:
            raise NoResultFound

        return my_user

    def update_user(self, user_id: int, **kwargs) -> None:
        """Takes a user_id and arbitrary keyword arguments

        Return: None
        """
        user_obj = self.find_user_by(id=user_id)
        valid_attr = User.__table__.columns.keys()

        for key in kwargs.keys():
            if key not in valid_attr:
                raise ValueError

        for key, val in kwargs.items():
            setattr(user_obj, key, val)

        self._session.commit()

    def delete(self, obj=None):
        """Deletes an object from storage

        obj: list[object] | object"""
        if obj is not None:
            if isinstance(obj, list):
                for instance in obj:
                    self._session.delete(instance)
            else:
                self._session.delete(obj)
            self._session.commit()

    def close(self) -> None:
        """Close the session"""
        self._session.close()

    def all(self, cls=None) -> dict:
        """Returns all instances of a class or all instances."""
        objects = {}
        for clss in classes:
            if cls is None or cls is classes[clss] or cls is clss:
                objs = self._session.query(classes[clss]).all()
                for obj in objs:
                    key = f"{obj.__class__.__name__}.{obj.id}"
                    objects[key] = obj
        return objects

    def get(self, cls, obj_id):
        """Get's a particular table value using it's id"""
        instance = self.all(cls)
        if not instance or len(instance) == 0:
            return None
        for value in instance.values():
            if value.id == obj_id:
                return value
        return None

    def get_by_kwargs(self, cls, **kwargs):
        """Get a model by key word"""
        if len(kwargs) != 1:
            return None
        obj = self._session.query(cls).filter_by(**kwargs).first()
        return obj

    def get_user(self, email) -> dict:
        """Get's a user from it's email"""
        obj = self._session.query(User).filter_by(email=email).first()
        if obj:
            return obj.to_dict()
        return {}
