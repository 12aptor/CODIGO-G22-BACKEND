from django.urls import path

from . import views

urlpatterns = [
    path('category', views.Category.as_view()),
]
