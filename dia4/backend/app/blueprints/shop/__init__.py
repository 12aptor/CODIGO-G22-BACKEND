from flask import Blueprint

shop = Blueprint('shop',__name__,url_prefix='/')

from .models import Categoria

from .resources import (
    index
)