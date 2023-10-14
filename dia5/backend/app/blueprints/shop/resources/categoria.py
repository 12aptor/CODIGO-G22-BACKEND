from flask_restful import Resource,Api
from flask import request

from .. import shop

from ..models import Categoria

api = Api(shop)

class CategoriaResource(Resource):
    
    def post(self):
        data = request.get_json()
        nombre = data['nombre']
        
        nueva_categoria = Categoria(nombre)
        nueva_categoria.save()
        
        context = {
            'status':True,
            'content':''
        }
        
        return context
    
api.add_resource(CategoriaResource,'/categoria')