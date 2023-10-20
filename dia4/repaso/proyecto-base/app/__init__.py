from flask import Flask,jsonify
from .config import Config

from .api import api

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    app.register_blueprint(api)
    
    @app.route('/')
    def index():
        context = {
            'status':True,
            'message':'principal'
        }
        return jsonify(context)
    
    return app