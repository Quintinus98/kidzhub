#!/usr/bin/env python3
"""API Entry point - app"""

from flask import Flask, jsonify
from flask_cors import CORS
from api.v1.views import app_views

app = Flask(__name__)
app.url_map.strict_slashes = False
app.register_blueprint(app_views)
CORS(app, resources={r"/api/v1/*": {"origins": "*"}})


@app.route("/")
def hello_world():
    return "Home route working"


@app.errorhandler(404)
def page_not_found(error):
    return jsonify({"error": "Check URL"}), 404


if __name__ == "__main__":
    app.run(host="localhost", port=5000, debug=True, threaded=True)
