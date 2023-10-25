from django.contrib import admin

# Register your models here.
from .models import Autor,Receta,Comentario

admin.site.register(Autor)
admin.site.register(Receta)
admin.site.register(Comentario)