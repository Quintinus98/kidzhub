#!/usr/bin/env python3
from flask import Blueprint


app_views = Blueprint("app_views", __name__, url_prefix="/api/v1")


from api.v1.views.user import *

from api.v1.views.cart import *
from api.v1.views.product import *
