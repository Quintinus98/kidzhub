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

@app_views.route("/carts/:user_id", methods=["GET"])
def get_user_cart():
    """End-point to get a user's cart"""
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

