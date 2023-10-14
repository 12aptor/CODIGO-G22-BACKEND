from utils import ma
from marshmallow_sqlalchemy import SQLAlchemyAutoSchema

from .models import (
    Categoria
)

class CategoriaSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Categoria