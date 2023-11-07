from django.urls import path,include
from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()

router.register(r'skill',views.SkillView,basename='skill')
router.register(r'type',views.TypeView,basename='type')

urlpatterns = [
    path('',include(router.urls)),
    path('category', views.CategoryView.as_view()),
    path('company',views.CompanyView.as_view()),
    path('company/<int:company_id>',views.CompanyDetailView.as_view()),
    path('location',views.LocationView.as_view()),
    path('candidate',views.CandidateView.as_view()),
    path('upload/image',views.UploadImageView.as_view()),
    path('job',views.JobView.as_view()),
    path('job/<int:job_id>',views.JobDetailView.as_view()),
    path('job/skill',views.JobSkillView.as_view()),
    path('job/list',views.JobListView.as_view()),
    path('job/create',views.JobCreateView.as_view())
]
