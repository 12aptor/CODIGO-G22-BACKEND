from rest_framework import generics

from .models import (
    Category,Company)

from .serializers import (
    CategorySerializer,CompanySerializer
)

class CategoryView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    
class CompanyView(generics.ListCreateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    
class CompanyDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Company.objects.all()
    lookup_url_kwarg = 'company_id'
    serializer_class = CompanySerializer