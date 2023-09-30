from flask import render_template,request
from . import admin

from app import fb

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
@admin.route('/experiencia')
def experiencia():
    """
    READ EXPERIENCIAS
    """
    data = fb.get_collection('experiencia')
    context = {
        'experiencias':data
    }
    print(context)
    return render_template('admin/experiencia.html',**context)