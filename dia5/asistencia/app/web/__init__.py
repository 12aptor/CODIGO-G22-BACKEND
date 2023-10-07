from flask import Blueprint

web = Blueprint('web',__name__,url_prefix='/')

from . import views