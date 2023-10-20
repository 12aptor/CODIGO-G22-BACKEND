from flask_restful import Resource,Api
from .. import api

api_usuario = Api(api)

class UsuarioResource(Resource):
    
    def get(self):
        context = {
            'status':True,
            'message':'lista de usuarios'
        }
        return context
    
api_usuario.add_resource(UsuarioResource,'/usuario')