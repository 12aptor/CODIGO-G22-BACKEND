from flask_restful import Resource,Api
from flask import request
from .. import auth
from ..models import Usuario
from ..schemas import UsuarioSchema

from werkzeug.security import (
    generate_password_hash,
    check_password_hash
)

from flask_jwt_extended import (
    create_access_token,
    jwt_required,
    verify_jwt_in_request,
    get_jwt_identity
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
            
            schema = UsuarioSchema()
            
            return{
                'status':True,
                'content':schema.dump(usuario)
            }
            
        except Exception as e:
            return {
                'message':str(e),
                'status':False
            },500
         
    @jwt_required()
    def get(self):
        data = Usuario.get_all()
        schema = UsuarioSchema(many=True)
        
        context = {
            'status':True,
            'content':schema.dump(data)
        }
        
        return context
    
class AuthenticationResource(Resource):
    
    def post(self):
        try:
            data = request.get_json()
            usuario = Usuario.get_by_email(data['email'])
            if not usuario:
                return {
                    'status':False,
                    'message':'no se encontro usuario con el email proporcionado'
                },404
            
            is_password_checked = check_password_hash(usuario.password,data['password'])
            if is_password_checked:
                token = create_access_token(identity=usuario.id)
                return {
                    'status':True,
                    'token':token
                },201
            else:
                return {
                    'status':False,
                    'message':'contraseña incorrecta'
                },400
            
        except Exception as e:
            return {
                'status':False,
                'message':str(e)
            },500
            
class TokenResource(Resource):
    
    @jwt_required()
    def get(self): 
        verify_jwt_in_request()
        return {
            'status':True,
            'message':'token valido'
        }
        
            
api.add_resource(UsuarioResource,'/user')
api.add_resource(AuthenticationResource,'/login')
api.add_resource(TokenResource,'/verifytoken')