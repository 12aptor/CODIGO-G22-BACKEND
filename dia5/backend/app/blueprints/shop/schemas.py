from utils import ma
from marshmallow_sqlalchemy import SQLAlchemyAutoSchema

from .models import (
    Categoria,Marca
)

class CategoriaSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Categoria
        
class MarcaSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Marca