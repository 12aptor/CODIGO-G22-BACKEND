from flask import Flask

from .portafolio import portafolio
from .admin import admin

def create_app():
    app = Flask(__name__)
    app.register_blueprint(portafolio)
    app.register_blueprint(admin)
    
    return app