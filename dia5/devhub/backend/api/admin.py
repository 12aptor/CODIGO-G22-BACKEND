from django.contrib import admin

# Register your models here.
from .models import (
    Category,Candidate
)

admin.site.register(Category)
admin.site.register(Candidate)