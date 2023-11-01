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
    
from django.http import Http404
from rest_framework import status

class TareaDetailView(APIView):
    
    def get_object(self,pk):
        try:
            return Tarea.objects.get(pk=pk)
        except  Tarea.DoesNotExist:
            raise Http404

    def get(self,request,pk):
        obj_tarea = self.get_object(pk)
        serializer = TareaSerializer(obj_tarea)
        context = {
            'status':True,
            'content':serializer.data
        }
        
        return Response(context)
    
    def put(self,request,pk):
        obj_tarea = self.get_object(pk)
        serializer = TareaSerializer(obj_tarea,data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            context = {
                'status':True,
                'content':serializer.data
            }
            return Response(context)
        
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
    
    def delete(self,request,pk):
        obj_tarea = self.get_object(pk)
        serializer = TareaSerializer(obj_tarea)
        
        context = {
            'status':True,
            'content':serializer.data
        }
        
        obj_tarea.delete()
        
        return Response(context)
    
    def patch(self,request,pk):
        obj_tarea = self.get_object(pk)
        obj_tarea.estado = request.data['estado']
        obj_tarea.save()
        
        serializer = TareaSerializer(obj_tarea)
        
        context = {
            'status':True,
            'content':serializer.data
        }
        
        return Response(context)
        
        