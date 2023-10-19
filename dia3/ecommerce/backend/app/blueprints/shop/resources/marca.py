from flask_restful import Resource,Api
from flask import request

from .. import shop

from ..models import Marca
from ..schemas import MarcaSchema

api = Api(shop)

class MarcaResource(Resource):
    
    def post(self):
        data = request.get_json()
        nombre = data['nombre']
        
        marca = Marca(nombre)  
        marca.save()
        
        data_schema = MarcaSchema()
        
        context = {
            'status':True,
            'content':data_schema.dump(marca)
        }
        
        return context
    
    def get(self):
        data = Marca.get_all()
        data_schema = MarcaSchema(many=True)
        
        context = {
            'status':True,
            'content':data_schema.dump(data)
        }
        
        return context
        
class MarcaDetailResource(Resource):
    
    def get(self,id):
        data = Marca.get_by_id(id)
        data_schema = MarcaSchema()
        
        context = {
            'status':True,
            'content':data_schema.dump(data)
        }
        
        return context
    
    def put(self,id):
        data = request.get_json()
        nombre = data['nombre']
        
        marca = Marca.get_by_id(id)
        marca.nombre = nombre
        marca.save()
        
        data_schema = MarcaSchema()
        
        context = {
            'status':True,
            'content':data_schema.dump(marca)
        }
        
        return context
    
    def delete(self,id):
        
        marca = Marca.get_by_id(id)
        marca.delete()
        
        data_schema = MarcaSchema()
        
        context = {
            'status':True,
            'content':data_schema.dump(marca)
        }
        
        return context
        
    
api.add_resource(MarcaResource,'/marca')
api.add_resource(MarcaDetailResource,'/marca/<id>')