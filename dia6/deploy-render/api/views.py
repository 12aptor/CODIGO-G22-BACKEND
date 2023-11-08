from rest_framework import generics

from .models import (
    Category,Company,Location,
    Candidate,Skill,Type,Job,JobSkill)

from .serializers import (
    CategorySerializer,CompanySerializer,
    LocationSerializer,CandidateSerializer,
    SkillSerializer,TypeSerializer,JobSerializer,
    JobSkillSerializer,JobListSerializer,
    JobCreateSerializer
)

from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated

class CategoryView(generics.ListCreateAPIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
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

class JobView(generics.ListCreateAPIView):
    queryset = Job.objects.all()
    serializer_class = JobSerializer
    
class JobDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Job.objects.all()
    lookup_url_kwarg = 'job_id'
    serializer_class = JobSerializer
    
class JobSkillView(generics.ListCreateAPIView):
    queryset = JobSkill.objects.all()
    serializer_class = JobSkillSerializer
    
class JobListView(generics.ListAPIView):
    queryset = Job.objects.all()
    serializer_class = JobListSerializer
    
class JobCreateView(generics.CreateAPIView):
    queryset = Job.objects.all()
    serializer_class = JobCreateSerializer
    
""" endpoint para subir imagenes """
from rest_framework.parsers import MultiPartParser,JSONParser
from rest_framework.views import APIView
from rest_framework.response import Response

import cloudinary.uploader

class UploadImageView(APIView):
    parser_classes = (
        MultiPartParser,
        JSONParser
    )
    
    @staticmethod
    def post(request):
        file = request.data.get('image')
        upload_data = cloudinary.uploader.upload(file)
        context = {
            'image_url':upload_data['url']
        }
        return Response(context,status=201)
    
    
    
""" viewsets """
from rest_framework import viewsets

class SkillView(viewsets.ModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer
    
class TypeView(viewsets.ModelViewSet):
    queryset = Type.objects.all()
    serializer_class = TypeSerializer
    
