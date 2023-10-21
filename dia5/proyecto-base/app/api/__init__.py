from flask import Blueprint,jsonify

api = Blueprint('api',__name__,url_prefix='/api')

from .resources import (
    usuario_resources
)

@api.route('/')
def index():
    context ={
        'message':'blueprint api'
    }
    return jsonify(context)