from utils import ma
from marshmallow import fields

class UsuarioSchema(ma.Schema):
    class Meta:
        fields = ('id','nombre','email','is_admin')