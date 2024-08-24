#!/usr/bin/env python3
"""User API"""
from flask import (
    request,
    jsonify,
    abort,
    make_response,
)
from api.auth.auth import Auth
from api.v1.views import app_views
from models.cart import CartItems

AUTH = Auth()


@app_views.route("/carts", methods=["POST"])
def create_cart():
    """End-point to create a cart"""
    session_id = request.cookies.get("session_id")
    if not session_id:
        abort(403)
    user = AUTH.get_user_from_session_id(session_id)
    if user is None:
        abort(403)

    data = request.form
    if set(data.keys()) != set(["product_id", "quantity", "size"]):
        return make_response(jsonify({"message": "Invalid keys"}), 400)
    product_id = data.get("product_id")
    # Does cartItem exist
    attr = {
        "user_id": user.id,
        "product_id": product_id,
        "quantity": data.get("quantity"),
        "size": data.get("size"),
    }
    tmp = {"user_id": user.id, "product_id": product_id}
    item = AUTH._db.get_by_kwargs("CartItems", **tmp)
    if item:
        attr.pop("user_id", None)
        attr.pop("product_id", None)
        AUTH.update_user_cart(attr, item.id)
        return (
            jsonify(
                {"status": "successful", "message": "updated successfully"}
            ),
            201,
        )
    cartItem = CartItems(**attr)
    cartItem.save()

    return jsonify({"message": f"{cartItem.to_dict()}"})


@app_views.route("/carts", methods=["GET"])
def get_cart():
    """End-point to get a user's cart"""
    session_id = request.cookies.get("session_id")
    if not session_id:
        abort(403)
    user = AUTH.get_user_from_session_id(session_id)
    if user is None:
        abort(403)
    try:
        cartItems = AUTH.get_user_cart(user.id)
        return jsonify(cartItems), 200
    except ValueError:
        return jsonify([]), 200


@app_views.route("/carts/<item_id>", methods=["PUT"])
def update_item_in_cart(item_id):
    """Update Item in cart"""
    session_id = request.cookies.get("session_id")
    if not session_id:
        abort(403)
    user = AUTH.get_user_from_session_id(session_id)
    if user is None:
        abort(403)
    try:
        AUTH.update_user_cart(request.form, item_id)
        return (
            jsonify(
                {"status": "successful", "message": "updated successfully"}
            ),
            201,
        )
    except ValueError:
        return jsonify({"status": "error", "message": "Item not found"}), 404


@app_views.route("/carts/<item_id>", methods=["DELETE"])
def delete_item_in_cart(item_id):
    """Delete Item in cart"""
    cartItem = AUTH._db.get_by_kwargs("CartItems", id=item_id)
    if cartItem is None:
        return jsonify({"message": "CartItem does not exist"})
    AUTH._db._session.delete(cartItem)
    AUTH._db._session.commit()

    return jsonify({"message": "Cart Item deleted successfully"})
