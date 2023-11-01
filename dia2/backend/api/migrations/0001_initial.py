# Generated by Django 3.2 on 2023-11-01 01:10

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Tarea',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('descripcion', models.CharField(max_length=200)),
                ('estado', models.CharField(choices=[('pendiente', 'Pendiente'), ('completado', 'Completado')], max_length=50)),
            ],
        ),
    ]
