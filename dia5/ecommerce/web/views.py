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

def productos_por_marca(request,marca_id):
    """ vista para filtrar productos por categoria """
    obj_marca = Marca.objects.get(pk=marca_id)
    lista_productos = obj_marca.producto_set.all()
    lista_categorias = Categoria.objects.all()
    lista_marcas = Marca.objects.all()
    
    context  = {
        'categorias':lista_categorias,
        'marcas':lista_marcas,
        'productos':lista_productos
    }
    
    return render(request,'index.html',context)

def productos_por_nombre(request):
    nombre = request.POST['nombre']
    
    lista_productos = Producto.objects.filter(nombre__icontains=nombre)
    lista_categorias = Categoria.objects.all()
    lista_marcas = Marca.objects.all()
    
    context = {
        'categorias':lista_categorias,
        'marcas':lista_marcas,
        'productos':lista_productos
    }
    
    return render(request,'index.html',context)

def producto(request,producto_id):
    obj_producto = Producto.objects.get(pk=producto_id)
    context = {
        'producto':obj_producto
    }
    
    return render(request,'producto.html',context)

""" VISTAS PARA CARRITO DE COMPRAS """
from .carrito import Cart

def carrito(request):
    return render(request,'carrito.html')

def agregar_carrito(request,producto_id):
    if request.method == 'POST':
        cantidad = int(request.POST['cantidad'])
    else:
        cantidad = 1
    
    obj_producto = Producto.objects.get(pk=producto_id)
    carrito = Cart(request)
    carrito.add(obj_producto,cantidad)
    
    print(request.session.get('cart'))
    
    return render(request,'carrito.html')

def eliminar_carrito(request,producto_id):
    obj_producto = Producto.objects.get(pk=producto_id)
    carrito = Cart(request)
    carrito.delete(obj_producto)
    
    return render(request,'carrito.html')

def limpiar_carrito(request):
    carrito = Cart(request)
    carrito.clear()
    
    return render(request,'carrito.html')

""" VISTAS PARA CLIENTES """

from django.contrib.auth.models import User
from django.contrib.auth import login,logout,authenticate
from django.contrib.auth.decorators  import login_required
from .models import Cliente
from django.shortcuts import redirect

def crear_usuario(request):
    if request.method == 'POST':
        data_usuario = request.POST['usuario']
        data_password = request.POST['password']
        
        usuario = User.objects.create_user(username=data_usuario,password=data_password)
        if usuario is not None:
            login(request,usuario)
            return redirect('/cuenta')
        
    return render(request,'login.html')

def login_usuario(request):
    context = {}
    if request.method == 'POST':
        data_usuario = request.POST['usuario']
        data_password = request.POST['password']
        
        usuario = authenticate(request,username=data_usuario,password=data_password)
        if usuario is not None:
            login(request,usuario)
            return redirect('/cuenta')
        else:
            context = {
                'mensaje_error':'Datos incorrectos'
            }
        
    return render(request,'login.html',context)

from .forms import ClienteForm

@login_required(login_url='/login')
def cuenta_usuario(request):
    form = ClienteForm()
    context = {
        'form':form
    }
    return render(request,'cuenta.html',context)

@login_required(login_url='/login')
def logout_usuario(request):
    logout(request)
    return redirect('/cuenta')

@login_required(login_url='/login')
def actualizar_cliente(request):
    frm_cliente = ClienteForm(request.POST)
    if frm_cliente.is_valid():
        data_cliente = frm_cliente.cleaned_data
        usuario = User.objects.get(pk=request.user.id)
        usuario.first_name = data_cliente['nombre']
        usuario.last_name = data_cliente['apellidos']
        usuario.email = data_cliente['email']
        usuario.save()
        try:
            cliente = Cliente.object.get(usuario=request.user)
        except:
            cliente = Cliente()
        cliente.dni = data_cliente['dni']
        cliente.direccion = data_cliente['direccion']
        cliente.telefono = data_cliente['telefono']
        cliente.fecha_nacimiento = data_cliente['fecha_nacimiento']
        cliente.save()
        
    context = {
        'form':frm_cliente
    }
    return render(request,'cuenta.html',context)
