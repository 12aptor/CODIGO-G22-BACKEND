from flask_restful import Resource,Api
from flask import request

from .. import shop
from ..models import Producto
from ..schemas import ProductoSchema

api = Api(shop)

class ProductoResource(Resource):
    
    def post(self):
        data = request.get_json()
        nombre = data['nombre']
        precio = data['precio']
        imagen = data['imagen']
        categoria_id = data['categoria_id']
        marca_id = data['marca_id']
        
        producto = Producto(nombre,precio,imagen,
                            categoria_id,marca_id)
        
        producto.save()
        
        data_schema = ProductoSchema()
        
        context = {
            'status':True,
            'content':data_schema.dump(producto)
        }
        
        return context
    
    def get(self):
        data = Producto.get_all()
        data_schema = ProductoSchema(many=True)
        context = {
            'status':True,
            'content':data_schema.dump(data)
        }
        
        return context
    
class ProductoDetailResource(Resource):
    
    def get(self,id):
        producto = Producto.get_by_id(id)
        data_schema = ProductoSchema()
        context = {
            'status':True,
            'content':data_schema.dump(producto)
        }
        
        return context
    
    def put(self,id):
        data = request.get_json()
        nombre = data['nombre']
        precio = data['precio']
        descripcion = data['descripcion']
        imagen = data['imagen']
        
        producto = Producto.get_by_id(id)
        producto.nombre = nombre
        producto.precio = precio
        producto.descripcion = descripcion
        producto.imagen = imagen
        producto.save()
        
        data_schema = ProductoSchema()
        
        context = {
            'status':True,
            'content':data_schema.dump(producto)
        }
        
        return context
    
    def delete(self,id):
        producto = Producto.get_by_id(id)
        producto.delete()
        
        data_schema = ProductoSchema()
        
        context = {
            'status':True,
            'content':data_schema.dump(producto)
        }
        
        return context   
    
api.add_resource(ProductoResource,'/producto')
api.add_resource(ProductoDetailResource,'/producto/<id>')