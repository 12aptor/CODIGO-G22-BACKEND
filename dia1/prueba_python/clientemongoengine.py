from mongoengine import *

connect(host='mongodb://localhost:27017/db_codigo_g22')

class Usuario(Document):
    usuario = StringField(required=True)
    password = StringField(required=True)
    
usuario = Usuario()
usuario.usuario = 'admin'
usuario.password = 'admin'
usuario.save()

for u in Usuario.objects:
    print(u.usuario)