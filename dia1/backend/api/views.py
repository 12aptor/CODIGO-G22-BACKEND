from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Tarea
from .serializers import TareaSerializer

@api_view(['GET'])
def index(request):
    context = {
        'status':True,
        'message':'mi primer api rest con django rest framework'
    }
    
    return Response(context)

@api_view(['GET','POST'])
def tarea(request):
    if request.method == 'GET':
        data = Tarea.objects.all() #queryset
        serializer = TareaSerializer(data,many=True)
    elif request.method == 'POST':
        serializer = TareaSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        
    context = {
        'status':True,
        'content':serializer.data
    }
    
    return Response(context)