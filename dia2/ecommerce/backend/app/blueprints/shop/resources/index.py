from flask_restful import Resource,Api
from .. import shop

api = Api(shop)

class IndexResource(Resource):
    
    def get(self):
        context = {
            'status':True,
            'message':'api rest activo'
        }
        
        return context
    
api.add_resource(IndexResource,'/')