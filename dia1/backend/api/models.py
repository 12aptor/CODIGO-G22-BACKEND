from django.db import models

# Create your models here.
class Tarea(models.Model):
    ESTADO_CHOICES = (
        ('pendiente','pendiente'),
        ('completado','completado')
    )
    
    descripcion = models.CharField(max_length=200)
    estado = models.CharField(max_length=100,choices=ESTADO_CHOICES)
    
    def __str__(self):
        return self.descripcion