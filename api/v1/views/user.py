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

AUTH = Auth()


@app_views.route("/", methods=["GET"])
def home():
    """Home route"""
    return jsonify({"message": "Bienvenue"})


@app_views.route("/users", methods=["GET"])
def getUsers():
    """Return all users"""
    user = AUTH.get_users()
    return user


@app_views.route("/users", methods=["POST"])
def users():
    """End-point to register a user"""
    data = request.form
    try:
        user = AUTH.register_user(data)
        return jsonify({"message": "user created"})
    except ValueError:
        return jsonify({"message": "email already registered"}), 400


# Get user profile via user id
@app_views.route("/users/<id>", methods=["POST"])
def user(id: str):
    """Get profile"""
    pass


# Update a user profile via session_id
@app_views.route("/users", methods=["PUT"])
def updateProfile():
    """Get profile"""
    session_id = request.cookies.get("session_id")
    if not session_id:
        abort(403)
    user = AUTH.get_user_from_session_id(session_id)
    if user is None:
        abort(403)
    data = request.form
    AUTH.update_user(data, user)
    return make_response(jsonify({"message": "user updated"}), 201)


# Delete a user profile via session_id
@app_views.route("/users", methods=["DELETE"])
def deleteProfile():
    """Get profile"""
    session_id = request.cookies.get("session_id")
    if not session_id:
        abort(403)
    user = AUTH.get_user_from_session_id(session_id)
    if user is None:
        abort(403)
    AUTH.destroy_session(user.id)
    AUTH.delete_user(user)
    return make_response(jsonify({"message": "User Deleted"}), 201)


# Get user profile via session_id
@app_views.route("/profile", methods=["GET"])
def profile():
    """Get profile"""
    session_id = request.cookies.get("session_id")
    if not session_id:
        abort(403)

    user = AUTH.get_user_from_session_id(session_id)
    if user is None:
        abort(403)
    return make_response(jsonify({"email": f"{user.email}"}), 200)


@app_views.route("/sessions", methods=["POST"])
def login():
    """Login function"""
    email = request.form.get("email")
    password = request.form.get("password")
    if AUTH.valid_login(email, password):
        session_id = AUTH.create_session(email)
        res = jsonify({"email": f"{email}", "message": "logged in"})
        res.set_cookie("session_id", session_id)
        return res

    abort(401)


@app_views.route("/sessions", methods=["DELETE"])
def logout():
    """Log out the User"""
    session_id = request.cookies.get("session_id")
    if not session_id:
        abort(403)

    user = AUTH.get_user_from_session_id(session_id)
    if user is None:
        abort(403)

    AUTH.destroy_session(user.id)
    res = make_response(redirect(url_for("home")))
    res.set_cookie("session_id", "", 0)
    return res


@app_views.route("/reset_password", methods=["POST"])
def get_reset_password_token():
    email = request.form.get("email")
    if not email:
        abort(403)
    try:
        reset_token = AUTH.get_reset_password_token(email)
    except ValueError:
        abort(403)
    return make_response(
        jsonify({"email": f"{email}", "reset_token": f"{reset_token}"}), 200
    )


@app_views.route("/reset_password", methods=["PUT"])
def update_password():
    email = request.form.get("email")
    reset_token = request.form.get("reset_token")
    new_password = request.form.get("new_password")
    try:
        AUTH.update_password(reset_token, new_password)
    except ValueError:
        abort(403)
    return make_response(
        jsonify({"email": f"{email}", "message": "Password updated"}, 200)
    )
