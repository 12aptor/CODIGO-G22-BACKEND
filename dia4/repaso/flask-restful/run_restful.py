from flask import Flask
from flask_restful import Resource,Api

app = Flask(__name__)
api = Api(app)

class Index(Resource):
    
    def get(self):
        context = {
            'message':'api rest con flask-restful'
        }
        return context
    
api.add_resource(Index,'/')

app.run(debug=True)