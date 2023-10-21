from flask import request
from flask_restful import Resource,Api
from .. import api
from ..models.usuario_models import Usuario
from ..schemas.usuario_schemas import UsuarioSchema

from werkzeug.security import (
    generate_password_hash,
    check_password_hash
)

from flask_jwt_extended import (
    create_access_token,
    jwt_required
)

api_usuario = Api(api)

class UsuarioResource(Resource):
    
    def get(self):
        data = Usuario.get_all()
        schema = UsuarioSchema(many=True)
        
        context = {
            'status':True,
            'message':'lista de usuarios',
            'content':schema.dump(data)
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
            
class AuthenticationResource(Resource):
    
    def post(self):
        data = request.get_json()
        usuario = Usuario.get_by_email(data['email'])
        if not usuario:
            return {
                'status':False,
                'message':'no se encontro usuario'
            }
        
        is_password_checked = check_password_hash(usuario.password,data['password'])
        if is_password_checked:
            token = create_access_token(identity=usuario.id)
            return {
                'status':True,
                'token':token
            }
        else:
            return {
                'status':False,
                'message':'contraseña invalida'
            }
    
api_usuario.add_resource(UsuarioResource,'/usuario')
api_usuario.add_resource(AuthenticationResource,'/login')