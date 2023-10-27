from django.shortcuts import render

from .models import Categoria,Marca,Producto

# Create your views here.
def index(request):
    lista_categorias = Categoria.objects.all()
    lista_marcas = Marca.objects.all()
    lista_productos = Producto.objects.all()
    
    context = {
        'categorias':lista_categorias,
        'marcas':lista_marcas,
        'productos':lista_productos
    }
    
    return render(request,'index.html',context)

def productos_por_categoria(request,categoria_id):
    """ vista para filtrar productos por categoria """
    obj_categoria = Categoria.objects.get(pk=categoria_id)
    lista_productos = obj_categoria.producto_set.all()
    lista_categorias = Categoria.objects.all()
    lista_marcas = Marca.objects.all()
    
    context  = {
        'categorias':lista_categorias,
        'marcas':lista_marcas,
        'productos':lista_productos
    }
    
    return render(request,'index.html',context)