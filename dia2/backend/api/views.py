from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Tarea
from .serializers import TareaSerializer

class IndexView(APIView):
    
    def get(self,request):
        context = {
            'status':True,
            'content':'api rest activo'
        }
        return Response(context)
    
class TareaView(APIView):
    
    def post(self,request):
        serializer = TareaSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        
        context = {
            'status':True,
            'content':serializer.data
        }
        return Response(context)
    
    def get(self,request):
        queryset = Tarea.objects.all()
        serializer = TareaSerializer(queryset,many=True)
        
        context = {
            'status':True,
            'content':serializer.data
        }
        
        return Response(context)
    
