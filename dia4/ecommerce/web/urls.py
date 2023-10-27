from django.urls import path

from . import views

app_name = 'web'

urlpatterns = [
    path('',views.index,name='index'),
    path('categoria/<int:categoria_id>',views.productos_por_categoria,name='categoria'),
    path('marca/<int:marca_id>',views.productos_por_marca,name='marca'),
    path('buscar',views.productos_por_nombre,name='buscar'),
    path('producto/<int:producto_id>',views.producto,name='producto')
]