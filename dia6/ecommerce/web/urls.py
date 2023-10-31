from django.urls import path

from . import views

app_name = 'web'

urlpatterns = [
    path('',views.index,name='index'),
    path('categoria/<int:categoria_id>',views.productos_por_categoria,name='categoria'),
    path('marca/<int:marca_id>',views.productos_por_marca,name='marca'),
    path('buscar',views.productos_por_nombre,name='buscar'),
    path('producto/<int:producto_id>',views.producto,name='producto'),
    path('carrito',views.carrito,name='carrito'),
    path('carrito/add/<int:producto_id>',views.agregar_carrito,name='carritoadd'),
    path('carrito/del/<int:producto_id>',views.eliminar_carrito,name='carritodel'),
    path('carrito/clear',views.limpiar_carrito,name='carritoclear'),
    path('usuario/add',views.crear_usuario,name='usuarioadd'),
    path('cuenta',views.cuenta_usuario,name='cuenta'),
    path('login',views.login_usuario,name='usuariologin'),
    path('logout',views.logout_usuario,name='usuariologout'),
    path('cliente/update',views.actualizar_cliente,name='clienteupdate'),
    path('pedido',views.confirmar_pedido,name='pedido'),
    path('registrarpedido',views.registrar_pedido,name='registrarpedido'),
    path('pedido/pagado',views.pedido_pagado,name='pedidopagado')
]