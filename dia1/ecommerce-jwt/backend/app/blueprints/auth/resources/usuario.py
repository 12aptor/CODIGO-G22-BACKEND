from flask_restful import Resource,Api
from flask import request
from .. import auth
from ..models import Usuario

from werkzeug.security import (
    generate_password_hash,
    check_password_hash
)

api = Api(auth)

class UsuarioResource(Resource):
    
    def post(self):
        try:
            data = request.get_json()
            password_hash = generate_password_hash(data['password'])
            usuario = Usuario()
            usuario.nombre=data['nombre']
            usuario.email=data['email']
            usuario.password=password_hash
            usuario.save()
            
            return{
                'status':True,
                'content':''
            }
            
        except Exception as e:
            return {
                'message':str(e),
                'status':False
            },500
            
api.add_resource(UsuarioResource,'/user')