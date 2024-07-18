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
from models.order import Order, OrderItems

AUTH = Auth()


@app_views.route("/orders", methods=["POST"])
def create_order():
    """End-point to create a order"""
    session_id = request.cookies.get("session_id")
    if not session_id:
        abort(403)
    user = AUTH.get_user_from_session_id(session_id)
    if user is None:
        abort(403)
    try:
        order = Order(user_id=user.id)
        order.save()
        return jsonify({"message": "order created"}), 200
    except ValueError:
        return jsonify({"message": "order creation failed"}), 400


# @app_views.route("/orders", methods=["GET"])
# def get_user_order():
#     """End-point to get a user's order"""
#     session_id = request.cookies.get("session_id")
#     if not session_id:
#         abort(403)
#     user = AUTH.get_user_from_session_id(session_id)
#     if user is None:
#         abort(403)
#     try:
#         orderItems = AUTH.get_user_order(user.id)
#         return jsonify(orderItems), 200
#     except ValueError:
#         return jsonify([]), 200


# @app_views.route("/orders/<order_id>/items", methods=["POST"])
# def add_item_to_order(order_id):
#     """Add Item to order"""
#     data = request.form
#     if set(data.keys()) != set(["product_id", "quantity"]):
#         return make_response(jsonify({"message": "Invalid keys"}), 400)
#     attr = {
#         "order_id": order_id,
#         "product_id": data.get("product_id"),
#         "quantity": data.get("quantity"),
#     }
#     orderItem = (
#         AUTH._db._session.query(orderItems)
#         .filter_by(order_id=order_id, product_id=data.get("product_id"))
#         .first()
#     )
#     if orderItem is not None:
#         orderItem.__setattr__("quantity", data.get("quantity"))
#         AUTH._db._session.commit()
#         return jsonify({"message": f"{orderItem.to_dict()}"})

#     orderItem = orderItems(**attr)
#     orderItem.save()

#     return jsonify({"message": f"{orderItem.to_dict()}"})


# @app_views.route("/orders/<order_id>/items/<item_id>", methods=["PUT"])
# def update_item_in_order(order_id, item_id):
#     """Update Item in order"""
#     data = request.form
#     if set(data.keys()) != set(["quantity"]):
#         return make_response(jsonify({"message": "Invalid keys"}), 400)
#     orderItem = (
#         AUTH._db._session.query(orderItems)
#         .filter_by(id=item_id, order_id=order_id)
#         .first()
#     )
#     if orderItem is None:
#         return jsonify({"message": "Cannot update order"})

#     orderItem.__setattr__("quantity", data.get("quantity"))
#     AUTH._db._session.commit()

#     return jsonify({"message": f"{orderItem.to_dict()}"})


# @app_views.route("/orders/<order_id>/items/<item_id>", methods=["DELETE"])
# def delete_item_in_order(order_id, item_id):
#     """Delete Item in order"""
#     orderItem = (
#         AUTH._db._session.query(orderItems)
#         .filter_by(id=item_id, order_id=order_id)
#         .first()
#     )
#     if orderItem is None:
#         return jsonify({"message": "orderItem does not exist"})
#     AUTH._db._session.delete(orderItem)
#     AUTH._db._session.commit()

#     return jsonify({"message": "order Item deleted successfully"})
