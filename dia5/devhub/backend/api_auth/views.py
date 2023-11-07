from rest_framework import generics

from django.contrib.auth.models import User
from .serializers import UserSerializer

class UserView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
from django.contrib.auth import authenticate
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken

class LoginView(APIView):
    def post(self,request):
        username = request.data.get("username")
        password = request.data.get("password")
        
        user = authenticate(username=username,password=password)
        
        if user:
            token = RefreshToken.for_user(user)
            context = {
                'status':True,
                'token' : str(token.access_token)
            }
        else:
            context = {
                'status':False,
                'content':'credenciales no validas'
            }
            
        return Response(context)
            
    