from flask import Flask

from flask_cors import CORS
from .blueprints.shop import shop


def create_app():
    
    app = Flask(__name__)
    
    CORS(app)
    
    app.register_blueprint(shop)
    
    return app