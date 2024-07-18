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
from models.engine.storage import Storage
from api.v1.views import app_views
from models.product import Product
from sqlalchemy.exc import NoResultFound


db = Storage()


@app_views.route("/products", methods=["GET"])
def all_products():
    """Return all products"""
    try:
        products = db._session.query(Product).all()
    except ValueError:
        return jsonify([])
    allProducts = [product.to_dict() for product in products]
    return jsonify(allProducts), 200


@app_views.route("/products", methods=["POST"])
def create_product():
    """End-point to register a product"""
    data = request.form
    keys = ["name", "description", "image", "price", "quantity"]
    if keys != list(data.keys()):
        raise ValueError(f"Incomplete details")
    try:
        product = Product(**data)
        db.add(product)
        return jsonify({f"{product.id}": f"{product.to_dict()}"})
    except ValueError:
        return jsonify({"message": "Failed to create product"}), 400


@app_views.route("/products/<id>", methods=["GET"])
def get_product(id):
    """Get a product if it exists"""
    try:
        product = db._session.query(Product).filter_by(id=id).first()
    except NoResultFound:
        return jsonify({"message": "Product Unavailable"})
    if product is None:
        return jsonify({"message": "Product is Unavailable"})
    return jsonify(product.to_dict())


@app_views.route("/products/<id>", methods=["PUT"])
def update_product(id):
    """Get a product if it exists"""
    try:
        product = db._session.query(Product).filter_by(id=id).first()
    except NoResultFound:
        return jsonify({"message": "Product Unavailable"})
    data = request.form
    valid_attr = Product.__table__.columns.keys()
    for key in data.keys():
        if key not in valid_attr:
            raise ValueError
    for key, val in data.items():
        setattr(product, key, val)
    db._session.commit()

    return make_response(jsonify({"message": "Product updated"}), 201)


@app_views.route("/products/<id>", methods=["DELETE"])
def delete_product(id):
    """Get profile"""
    try:
        product = db._session.query(Product).filter_by(id=id).first()
    except NoResultFound:
        return jsonify({"message": "Product Unavailable"})
    db._session.delete(product)
    db._session.commit()

    return make_response(jsonify({"message": "Product Deleted"}), 201)
