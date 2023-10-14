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
        
class CategoriaDetailResource(Resource):
    
    def get(self,id):
        data = Categoria.get_by_id(id)
        data_schema = CategoriaSchema()
        
        context = {
            'status':True,
            'content':data_schema.dump(data)
        }
        
        return context
    
    def put(self,id):
        data = request.get_json()
        nombre = data['nombre']
        
        categoria = Categoria.get_by_id(id)
        categoria.nombre = nombre
        categoria.save()
        
        data_schema = CategoriaSchema()
        
        context = {
            'status':True,
            'content':data_schema.dump(categoria)
        }
        
        return context
    
    def delete(self,id):
        
        categoria = Categoria.get_by_id(id)
        categoria.delete()
        
        data_schema = CategoriaSchema()
        
        context = {
            'status':True,
            'content':data_schema.dump(categoria)
        }
        
        return context
        
    
api.add_resource(CategoriaResource,'/categoria')
api.add_resource(CategoriaDetailResource,'/categoria/<id>')