#!/usr/bin/env python3
"""Authentication"""
import bcrypt

from sqlalchemy.orm.exc import NoResultFound
import uuid


def _generate_uuid() -> str:
    """Generates a random uuid"""
    return str(uuid.uuid4())


class Auth:
    """Auth class to interact with the authentication database."""

    def __init__(self):
        from models.engine.storage import Storage

        """Initialize Auth with DB"""
        self._db = Storage()

    def get_users(self):
        """Returns all user"""
        users = self._db.all("User")
        allUsers = []
        for val in users.values():
            value = val.to_dict()
            value.pop("password", None)
            allUsers.append(value)
        return allUsers

    def register_user(self, data: object):
        """Returns a User object"""
        from models.user import User

        keys = ["firstname", "lastname", "email", "username", "password"]
        if keys != list(data.keys()):
            raise ValueError(f"Incomplete details")
        email = data.get("email")
        try:
            user = self._db.find_user_by(email=email)
        except NoResultFound:
            user_obj = User(**data)
            user = self._db.add(user_obj)

            return user
        else:
            raise ValueError(f"User {email} already exists")

    def valid_login(self, email: str, password: str) -> bool:
        """Checks if a login is valid"""
        try:
            user = self._db.find_user_by(email=email)
        except NoResultFound:
            return False
        password_bytes = password.encode("utf-8")
        res = bcrypt.checkpw(password_bytes, user.password)
        return res

    def create_session(self, email: str) -> str:
        """Returns the session id as a str"""
        try:
            user = self._db.find_user_by(email=email)
        except NoResultFound:
            return None
        session_id = _generate_uuid()
        self._db.update_user(user.id, session_id=session_id)
        return session_id

    def get_user_from_session_id(self, session_id: str):
        """Get a user from the session id"""
        if session_id is None:
            return None
        try:
            user = self._db.find_user_by(session_id=session_id)
        except NoResultFound:
            return None
        return user

    def destroy_session(self, user_id: str) -> None:
        """Destroys a session"""
        self._db.update_user(user_id, session_id=None)

    def get_reset_password_token(self, email: str) -> str:
        """Get reset password token"""
        try:
            user = self._db.find_user_by(email=email)
        except NoResultFound:
            raise ValueError
        reset_token = _generate_uuid()
        self._db.update_user(user.id, reset_token=reset_token)
        return reset_token

    def update_password(self, reset_token: str, password: str) -> None:
        """Update password"""
        try:
            user = self._db.find_user_by(reset_token=reset_token)
        except NoResultFound:
            raise ValueError
        self._db.update_user(user.id, password=password)
        self._db.update_user(user.id, reset_token=None)

    def update_user(self, data, user) -> None:
        """Update password"""
        if data.get("password"):
            raise ValueError("Cannot update password")
        try:
            user = self._db.update_user(user_id=user.id, **data)
        except NoResultFound:
            raise ValueError

    def delete_user(self, user) -> None:
        """Delete User"""
        try:
            user = self._db.delete(user)
        except NoResultFound:
            raise ValueError

    def get_user_cart(self, user_id):
        """Returns user cart information"""
        cartItems = self._db.get_all_by_kwargs("CartItems", user_id=user_id)
        if cartItems is None:
            return []

        items = []
        for item in cartItems:
            product = self._db.get_by_kwargs("Product", id=item.product_id)
            price = self._db.get_by_kwargs(
                "Price", product_id=product.id
            ).to_dict()
            display = price.get(item.size)

            items.append(
                {
                    "id": item.id,
                    "name": product.name,
                    "description": product.description,
                    "images": [image.url for image in product.images][0],
                    "discount": product.discount,
                    "quantity": item.quantity,
                    "price": display,
                }
            )
        return items

    def update_user_cart(self, data, item_id):
        cartItems = self._db.get_by_kwargs("CartItems", id=item_id)
        if cartItems is None:
            raise ValueError
        if set(data.keys()) <= set(["quantity", "size"]):
            for key, val in data.items():
                setattr(cartItems, key, val)
            self._db._session.commit()
