from utils import ma
from marshmallow_sqlalchemy import SQLAlchemyAutoSchema

from .models import (
    Categoria,Marca,
    Producto
)

class CategoriaSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Categoria
        
class MarcaSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Marca
        
class ProductoSchema(SQLAlchemyAutoSchema):
    categoria = ma.Nested(CategoriaSchema)
    marca = ma.Nested(MarcaSchema)
    class Meta:
        model = Producto