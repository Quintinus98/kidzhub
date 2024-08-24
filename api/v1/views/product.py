#!/usr/bin/env python3
"""User API"""
from flask import (
    request,
    jsonify,
    make_response,
)
from api.auth.auth import Auth
from models.engine.storage import Storage
from api.v1.views import app_views
from models.product import Product, Image, Price
from models.category import Category
from sqlalchemy.exc import NoResultFound
import os
from werkzeug.utils import secure_filename


db = Storage()

# Ensure you have a folder to store images
UPLOAD_FOLDER = "static/uploads"
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)


def allowed_file(filename):
    allowed_extensions = {"png", "jpg", "jpeg"}
    return (
        "." in filename
        and filename.rsplit(".", 1)[1].lower() in allowed_extensions
    )


@app_views.route("/products", methods=["GET"])
def all_products():
    """Return all products"""
    products = db._session.query(Product).all()
    productList = []

    for product in products:
        data = {
            "XS": product.price.XS,
            "S": product.price.S,
            "M": product.price.M,
            "L": product.price.L,
            "XL": product.price.XL,
            "XXL": product.price.XXL,
        }
        display = {k: v for k, v in data.items() if v != -1}
        productList.append(
            {
                "id": product.id,
                "name": product.name,
                "description": product.description,
                "images": [image.url for image in product.images],
                "sold": product.sold,
                "discount": product.discount,
                "category": product.category.category,
                "price": display,
            }
        )
    return make_response(jsonify(productList), 200)


@app_views.route("/products", methods=["POST"])
def create_product():
    """End-point to register a product"""
    data = request.form
    keys = [
        "name",
        "description",
        "sold",
        "discount",
        "category",
    ]
    if set(keys) > set(data.keys()):
        return jsonify({"error": f"Incomplete details"})
    images = request.files.getlist("images")
    if not images:
        return jsonify({"error": "Failed to upload images"})

    try:
        tmp = {
            "name": data["name"],
            "description": data["description"],
            "sold": data["sold"],
            "discount": data["discount"],
        }

        tmp2 = {
            "XS": data.get("XS", -1, type=int),
            "S": data.get("S", -1, type=int),
            "M": data.get("M", -1, type=int),
            "L": data.get("L", -1, type=int),
            "XL": data.get("XL", -1, type=int),
            "XXL": data.get("XLL", -1, type=int),
        }
        truthy = False
        for val in tmp2.values():
            if val > 0:
                truthy = True
        if not truthy:
            raise ValueError

        product = Product(**tmp)
        db.add(product)

        db.add(Category(category=data["category"], product_id=product.id))

        tmp2["product_id"] = product.id
        db.add(Price(**tmp2))

        for image in images:
            if image and allowed_file(image.filename):
                filename = secure_filename(image.filename)
                filepath = os.path.join(UPLOAD_FOLDER, filename)
                image.save(filepath)
                image_record = Image(url=filepath, product_id=product.id)
                db.add(image_record)

        return jsonify({f"{product.id}": "Created successfully"}), 201
    except ValueError:
        return jsonify({"message": "Failed to create product"}), 400


@app_views.route("/products/<id>", methods=["GET"])
def get_product(id):
    """Get a product if it exists"""

    product = db.get_by_kwargs(Product, id=id)
    if product is None:
        return jsonify({"error": "No product found"})

    price = db.get_by_kwargs(Price, product_id=product.id).to_dict()
    keys = ["L", "M", "S", "XL", "XS", "XXL"]
    display = {k: v for k, v in price.items() if k in keys and v != -1}

    return (
        jsonify(
            {
                "id": product.id,
                "name": product.name,
                "description": product.description,
                "images": [image.url for image in product.images],
                "price": display,
                "sold": product.sold,
                "discount": product.discount,
                "category": product.category.category,
            }
        ),
        200,
    )


@app_views.route("/products/<id>", methods=["PUT"])
def update_product(id):
    """Get a product if it exists"""
    product = db.get_by_kwargs(Product, id=id)
    if product is None:
        return jsonify({"error": "No product found"})

    images = request.files.getlist("images")
    if images:
        return jsonify({"error": "Cannot update images"})

    data = request.form
    tmp = {
        "name": data.get("name", None),
        "description": data.get("description", None),
        "sold": data.get("sold", None),
        "discount": data.get("discount", None),
    }
    # update product
    for key, val in tmp.items():
        if val is None:
            continue
        setattr(product, key, val)

    tmp2 = {
        "XS": data.get("XS", -1, type=int),
        "S": data.get("S", -1, type=int),
        "M": data.get("M", -1, type=int),
        "L": data.get("L", -1, type=int),
        "XL": data.get("XL", -1, type=int),
        "XXL": data.get("XLL", -1, type=int),
    }
    # update price
    price = db.get_by_kwargs(Price, product_id=product.id)
    for key, val in tmp2.items():
        if val == -1:
            continue
        setattr(price, key, val)
    # update category
    category = db.get_by_kwargs(Category, product_id=product.id)
    if data.get("category", None) != None:
        setattr(category, "category", data.get("category"))

    db._session.commit()
    return make_response(jsonify({"message": "Product updated"}), 201)


@app_views.route("/products/<id>", methods=["DELETE"])
def delete_product(id):
    """Get profile"""
    try:
        product = db.get_by_kwargs(Product, id=id)
    except NoResultFound:
        return jsonify({"message": "Product Unavailable"})

    images = [image.url for image in product.images]
    for image in images:
        if os.path.isfile(image):
            os.remove(image)

    db._session.delete(product)
    db._session.commit()

    return make_response(jsonify({"message": "Product Deleted"}), 201)
