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
    pagina_destino = request.GET.get('next',None)
    context = {
        'destino':pagina_destino
    }
    if request.method == 'POST':
        data_usuario = request.POST['usuario']
        data_password = request.POST['password']
        data_destino = request.POST['destino']
        
        
        usuario = User.objects.create_user(username=data_usuario,password=data_password)
        if usuario is not None:
            login(request,usuario)
            if data_destino != 'None':
                return redirect(data_destino)
            
            return redirect('/cuenta')
        
    return render(request,'login.html')

def login_usuario(request):
    pagina_destino = request.GET.get('next',None)
    context = {
        'destino':pagina_destino
    }
    if request.method == 'POST':
        data_usuario = request.POST['usuario']
        data_password = request.POST['password']
        data_destino = request.POST['destino']
        
        usuario = authenticate(request,username=data_usuario,password=data_password)
        if usuario is not None:
            login(request,usuario)
            if data_destino != 'None':
                return redirect(data_destino)
            
            return redirect('/cuenta')
        else:
            context = {
                'mensaje_error':'Datos incorrectos'
            }
        
    return render(request,'login.html',context)

from .forms import ClienteForm

@login_required(login_url='/login')
def cuenta_usuario(request):
    try:
        cliente = Cliente.objects.get(usuario=request.user)
        
        data_cliente = {
            'nombre':request.user.first_name,
            'apellidos':request.user.last_name,
            'email':request.user.email,
            'direccion':cliente.direccion,
            'telefono':cliente.telefono,
            'dni':cliente.dni,
            'fecha_nacimiento':cliente.fecha_nacimiento
        }
    except:
        data_cliente = {
            'nombre':request.user.first_name,
            'apellidos':request.user.last_name,
            'email':request.user.email
        }
        
    form = ClienteForm(data_cliente)
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
    mensaje_confirmacion = ""
    frm_cliente = ClienteForm(request.POST)
    if frm_cliente.is_valid():
        data_cliente = frm_cliente.cleaned_data
        usuario = User.objects.get(pk=request.user.id)
        usuario.first_name = data_cliente['nombre']
        usuario.last_name = data_cliente['apellidos']
        usuario.email = data_cliente['email']
        usuario.save()
        try:
            cliente = Cliente.objects.get(usuario=usuario)
        except Exception as error:
            print("error : ",error)
            cliente = Cliente()
            cliente.usuario = usuario
        
        cliente.dni = data_cliente['dni']
        cliente.direccion = data_cliente['direccion']
        cliente.telefono = data_cliente['telefono']
        cliente.fecha_nacimiento = data_cliente['fecha_nacimiento']
        cliente.save()
        mensaje_confirmacion = "DATOS ACTUALIZADOS"
        
    context = {
        'form':frm_cliente,
        'mensaje':mensaje_confirmacion
    }
    return render(request,'cuenta.html',context)

@login_required(login_url='/login')
def confirmar_pedido(request):
    try:
        cliente = Cliente.objects.get(usuario=request.user)
        
        data_cliente = {
            'nombre':request.user.first_name,
            'apellidos':request.user.last_name,
            'email':request.user.email,
            'direccion':cliente.direccion,
            'telefono':cliente.telefono,
            'dni':cliente.dni,
            'fecha_nacimiento':cliente.fecha_nacimiento
        }
    except:
        data_cliente = {
            'nombre':request.user.first_name,
            'apellidos':request.user.last_name,
            'email':request.user.email
        }
        
    form = ClienteForm(data_cliente)
    context = {
        'form':form
    }
    return render(request,'pedido.html',context)

from .models import Pedido
@login_required(login_url='/login')
def registrar_pedido(request):
    context = {}
    if request.method == 'POST':
        print("metodo")
        #gestión del usuario y cliente
        frm_cliente = ClienteForm(request.POST)
        print(frm_cliente)
        data_cliente = frm_cliente.cleaned_data
        #actualizar usuario
        usuario = User.objects.get(pk=request.user.id)
        usuario.first_name = data_cliente['nombre']
        usuario.last_name = data_cliente['apellidos']
        usuario.email = data_cliente['email']
        usuario.save()
        try:
            cliente = Cliente.objects.get(usuario=usuario)
            cliente.telefono = data_cliente['telefono']
            cliente.direccion = data_cliente['direccion']
            cliente.save()
        except:
            cliente = Cliente()
            cliente.usuario = usuario
            cliente.direccion = data_cliente['direccion']
            cliente.telefono = data_cliente['telefono']
            cliente.save()
        
        pedido = Pedido()
        pedido.cliente = cliente
        pedido.direccion_envio = data_cliente['direccion']
        pedido.save()
        
        context = {
            'pedido':pedido
        }
        
    return render(request,'pago.html',context)