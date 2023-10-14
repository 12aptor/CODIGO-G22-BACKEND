from flask_restful import Resource,Api
from flask import request

from .. import shop

from ..models import Categoria
from ..schemas import CategoriaSchema

api = Api(shop)

class CategoriaResource(Resource):
    
    def post(self):
        data = request.get_json()
        nombre = data['nombre']
        
        nueva_categoria = Categoria(nombre)  
        nueva_categoria.save()
        
        data_schema = CategoriaSchema()
        
        context = {
            'status':True,
            'content':data_schema.dump(nueva_categoria)
        }
        
        return context
    
    def get(self):
        data = Categoria.get_all()
        data_schema = CategoriaSchema(many=True)
        
        context = {
            'status':True,
            'content':data_schema.dump(data)
        }
        
        return context
        
    
api.add_resource(CategoriaResource,'/categoria')