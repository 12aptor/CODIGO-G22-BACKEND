from flask import request
from flask_restful import Resource,Api
from .. import api
from ..models.usuario_models import Usuario
from ..schemas.usuario_schemas import UsuarioSchema

from werkzeug.security import (
    generate_password_hash
)

api_usuario = Api(api)

class UsuarioResource(Resource):
    
    def get(self):
        context = {
            'status':True,
            'message':'lista de usuarios'
        }
        return context
    
    def post(self):
        try:
            data = request.get_json()
            password_hash = generate_password_hash(data['password'])
            
            usuario = Usuario()
            usuario.nombre = data['nombre']
            usuario.email = data['email']
            usuario.password = password_hash
            usuario.save()
            
            schema = UsuarioSchema()
            return {
                'status':True,
                'content':schema.dump(usuario)
            }
            
        except Exception as e:
            return {
                'status':False,
                'message':str(e)
            },500
    
api_usuario.add_resource(UsuarioResource,'/usuario')