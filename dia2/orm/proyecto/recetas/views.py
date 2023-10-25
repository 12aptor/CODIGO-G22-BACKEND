from django.shortcuts import render

from .models import Autor,Receta,Comentario
# Create your views here.
def index(request):
    lista_recetas = Receta.objects.all()
    lista_autores = Autor.objects.all()
    
    context = {
        'recetas': lista_recetas,
        'autores': lista_autores
    }
    return render(request,'index.html',context)