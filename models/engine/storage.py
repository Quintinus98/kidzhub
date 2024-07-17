#!/usr/bin/env python3
"""Storage Model"""

from sqlalchemy.orm import sessionmaker, scoped_session
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
        self._engine = create_engine("sqlite:///:memory:", echo=True)
        Base.metadata.create_all(self._engine)
        self.__session = None

    @property
    def _session(self) -> None:
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

    def close(self) -> None:
        """Close the session"""
        self._session.close()

    def all(self, cls=None) -> list:
        objs = {}
        for clss in classes:
            pass
