from rest_framework import generics

from .models import (
    Category,Company,Location,
    Candidate)

from .serializers import (
    CategorySerializer,CompanySerializer,
    LocationSerializer,CandidateSerializer
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
    
class LocationView(generics.ListCreateAPIView):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer
    
class CandidateView(generics.ListCreateAPIView):
    queryset = Candidate.objects.all()
    serializer_class = CandidateSerializer