from flask import Flask
from .config import Config

from .web import web

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    
    app.register_blueprint(web)
    
    return app