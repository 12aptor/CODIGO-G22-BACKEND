from flask import render_template,request
from . import admin

from app import fb

from .forms import ExperienciaForm

@admin.route('/')
def index():
    return render_template('admin/index.html')

""" 
CRUD DE EXPERIENCIAS
C - CREATE
R - READ
U - UPDATE
D - DELETE
"""
@admin.route('/experiencia',methods=['GET','POST'])
def experiencia():
    """
    LEER Y CREAR EXPERIENCIAS
    """
    
    experiencia_form = ExperienciaForm()
    
    if experiencia_form.validate_on_submit():
        new_data = {
            'puesto':experiencia_form.puesto.data,
            'periodo':experiencia_form.periodo.data,
            'empresa':experiencia_form.empresa.data,
            'ubicacion':experiencia_form.ubicacion.data,
            'resumen':experiencia_form.resumen.data
        }
        doc_experiencia = fb.insert_document('experiencia',new_data)
        print(doc_experiencia)
    
    data = fb.get_collection('experiencia')
    context = {
        'experiencias':data,
        'form':experiencia_form
    }
    print(context)
    return render_template('admin/experiencia.html',**context)