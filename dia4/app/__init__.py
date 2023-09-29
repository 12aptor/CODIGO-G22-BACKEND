from flask import Flask
from app.firebase import FirebaseAdmin
fb = FirebaseAdmin()


#blueprints
from .portafolio import portafolio
from .admin import admin

from .config import Config

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    app.register_blueprint(portafolio)
    app.register_blueprint(admin)
    
    return app