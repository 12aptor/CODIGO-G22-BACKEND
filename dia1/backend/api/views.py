from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def index(request):
    context = {
        'status':True,
        'message':'mi primer api rest con django rest framework'
    }
    
    return Response(context)
