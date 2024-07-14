#!/usr/bin/env python3
"""Storage Model"""
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, scoped_session
from sqlalchemy import create_engine

Base = declarative_base()

engine = create_engine("sqlite:///:memory:", echo=True)


class Storage:
    """Represents a storage class"""

    __engine = None
    __session = None

    def __init__(self) -> None:
        """Entry point"""
        self.__engine = create_engine("sqlite:///:memory:", echo=True)

    def load_session(self) -> None:
        """Load database session"""
        Base.metadata.create_all(self.__engine)
        session_factory = sessionmaker(bind=engine, expire_on_commit=False)
        Session = scoped_session(session_factory)
        self.__session = Session

    def close(self) -> None:
        """Close the session"""
        self.__session.close()
