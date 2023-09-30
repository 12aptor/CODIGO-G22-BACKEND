from flask import render_template,request
from . import admin

@admin.route('/')
def index():
    return render_template('admin/index.html')

@admin.route('/experiencia')
def experiencia():
    return render_template('admin/experiencia.html')