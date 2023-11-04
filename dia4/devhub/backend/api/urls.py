from django.urls import path,include
from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()

router.register(r'skill',views.SkillView,basename='skill')

urlpatterns = [
    path('',include(router.urls)),
    path('category', views.CategoryView.as_view()),
    path('company',views.CompanyView.as_view()),
    path('company/<int:company_id>',views.CompanyDetailView.as_view()),
    path('location',views.LocationView.as_view()),
    path('candidate',views.CandidateView.as_view()),
    path('candidate/uploadimage',views.UploadCandidateImageView.as_view())
]
