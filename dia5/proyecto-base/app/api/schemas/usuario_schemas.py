from utils import ma

class UsuarioSchema(ma.Schema):
    class Meta:
        fields = ('id','nombre','email')