from django.urls import path

from . import views

urlpatterns = [
    path('category', views.CategoryView.as_view()),
    path('company',views.CompanyView.as_view()),
    path('company/<int:company_id>',views.CompanyDetailView.as_view()),
    path('location',views.LocationView.as_view()),
    path('candidate',views.CandidateView.as_view())
]
