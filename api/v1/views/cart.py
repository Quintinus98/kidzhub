#!/usr/bin/env python3
"""User API"""
# from flask import request, abort, jsonify, make_response
from flask import (
    Flask,
    request,
    jsonify,
    abort,
    make_response,
    url_for,
    redirect,
)
from api.auth.auth import Auth
from api.v1.views import app_views
from models.cart import Cart, CartItems

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
    try:
        cart = Cart(user_id=user.id)
        cart.save()
        return jsonify({"message": "Cart created"}), 200
    except ValueError:
        return jsonify({"message": "Cart creation failed"}), 400


@app_views.route("/carts", methods=["GET"])
def get_user_cart():
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


@app_views.route("/carts/<cart_id>/items", methods=["POST"])
def add_item_to_cart(cart_id):
    """Add Item to cart"""
    data = request.form
    if set(data.keys()) != set(["product_id", "quantity"]):
        return make_response(jsonify({"message": "Invalid keys"}), 400)
    attr = {
        "cart_id": cart_id,
        "product_id": data.get("product_id"),
        "quantity": data.get("quantity"),
    }
    cartItem = (
        AUTH._db._session.query(CartItems)
        .filter_by(cart_id=cart_id, product_id=data.get("product_id"))
        .first()
    )
    if cartItem is not None:
        cartItem.__setattr__("quantity", data.get("quantity"))
        AUTH._db._session.commit()
        return jsonify({"message": f"{cartItem.to_dict()}"})

    cartItem = CartItems(**attr)
    cartItem.save()

    return jsonify({"message": f"{cartItem.to_dict()}"})


@app_views.route("/carts/<cart_id>/items/<item_id>", methods=["PUT"])
def update_item_in_cart(cart_id, item_id):
    """Update Item in cart"""
    data = request.form
    if set(data.keys()) != set(["quantity"]):
        return make_response(jsonify({"message": "Invalid keys"}), 400)
    cartItem = (
        AUTH._db._session.query(CartItems)
        .filter_by(id=item_id, cart_id=cart_id)
        .first()
    )
    if cartItem is None:
        return jsonify({"message": "Cannot update cart"})

    cartItem.__setattr__("quantity", data.get("quantity"))
    AUTH._db._session.commit()

    return jsonify({"message": f"{cartItem.to_dict()}"})


@app_views.route("/carts/<cart_id>/items/<item_id>", methods=["DELETE"])
def delete_item_in_cart(cart_id, item_id):
    """Delete Item in cart"""
    cartItem = (
        AUTH._db._session.query(CartItems)
        .filter_by(id=item_id, cart_id=cart_id)
        .first()
    )
    if cartItem is None:
        return jsonify({"message": "CartItem does not exist"})
    AUTH._db._session.delete(cartItem)
    AUTH._db._session.commit()

    return jsonify({"message": "Cart Item deleted successfully"})
