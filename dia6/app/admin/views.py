from flask import render_template,request,redirect,url_for,flash
from . import admin

import pyrebase
from app.firebase_config import firebaseConfig

fb_app = pyrebase.initialize_app(firebaseConfig)
auth = fb_app.auth()


from app import fb

from .forms import ExperienciaForm

""" LOGIN DE USUARIOS """

@admin.route('/login',methods=['GET','POST'])
def login():
    if request.method == "POST":
        email = request.form['email']
        password = request.form['password']
        try:
            usuario = auth.sign_in_with_email_and_password(email,password)
            data = auth.get_account_info(usuario['idToken'])
            return redirect(url_for('admin.index'))
        
        except Exception as error:
            flash("datos de acceso invalidos")
            
    return render_template('admin/login.html')

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
        return redirect(url_for('admin.experiencia'))
    
    data = fb.get_collection('experiencia')
    context = {
        'experiencias':data,
        'form':experiencia_form
    }
    print(context)
    return render_template('admin/experiencia.html',**context)

@admin.route('/experiencia/<id>',methods=['GET','POST'])
def experiencia_update(id=''):
    data = fb.get_document('experiencia',id)
    form = ExperienciaForm(data=data)
    
    if form.validate_on_submit():
        data_update = {
            'puesto':form.puesto.data,
            'periodo':form.periodo.data,
            'empresa':form.empresa.data,
            'ubicacion':form.ubicacion.data,
            'resumen':form.resumen.data
        }
        update_exp = fb.update_document('experiencia',id,data_update)
        
        return redirect(url_for('admin.experiencia'))
    
    lista_exp = fb.get_collection('experiencia')
    context = {
        'experiencias':lista_exp,
        'form':form
    }
    
    return render_template('admin/experiencia.html',**context)

@admin.route('/experiencia/del/<id>')
def experiencia_delete(id=''):
    result = fb.delete_document('experiencia',id)
    if(result):
        return redirect(url_for('admin.experiencia'))