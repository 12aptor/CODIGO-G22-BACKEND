"""misitioweb URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.http import HttpResponse,JsonResponse

#primer vista
def index(request):
    return HttpResponse('<h1>Hola Mundo Django</h1>')

#response con json
def api(request):
    context = {
        'status':True,
        'message':'api rest con django'
    }
    
    return JsonResponse(context)

#paso de parametros
def saludo(request):
    nombre = request.GET['nombre']
    return HttpResponse('<h1>Hola '+ nombre + '</h1>')

#paso de parametros por path
def suma(request,n1,n2):
    resultado = n1 + n2
    return HttpResponse('<h1>El resultado de '+ str(n1) + ' + ' + str(n2) + ' es ' + str(resultado) + '</h1>')


def calculadora(request,ope,n1,n2):
    if(ope == "suma"):
        resultado = n1 + n2
    elif(ope == "resta"):
        resultado = n1 - n2
    elif(ope == "multiplicacion"):
        resultado = n1 * n2
    else:
        resultado = "nn"
        
    if(resultado != "nn"):
        calculadora_resultado = f'el resultado es {resultado}'
    else:
        calculadora_resultado = 'no hay la operación que buscas'
        
    return HttpResponse(f'<h1>{calculadora_resultado}</h1>')

urlpatterns = [
    path('',index),
    path('api',api),
    path('saludo',saludo),
    path('sumaprueba/<int:n1>/<int:n2>',suma),
    path('<ope>/<int:n1>/<int:n2>',calculadora),
    path('admin/', admin.site.urls),
]
