from flask import Flask,jsonify

from .api import api

def create_app():
    app = Flask(__name__)
    
    app.register_blueprint(api)
    
    @app.route('/')
    def index():
        context = {
            'status':True,
            'message':'principal'
        }
        return jsonify(context)
    
    return app