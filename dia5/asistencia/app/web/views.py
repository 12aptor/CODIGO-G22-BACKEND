from flask import Flask,render_template,request,redirect

from . import web
from app import db

from .forms import CursoForm

def mostrar_cursos():
    cursor = db.cursor(dictionary=True)
    sql_cursos = "select curso_id as id,curso_nombre as nombre from tbl_curso"
    cursor.execute(sql_cursos)
    data_cursos = cursor.fetchall()
    cursor.close()
    return data_cursos

@web.route('/')
def index():
    return render_template('index.html')

@web.route('/cursos',methods=['GET','POST'])
def cursos():
    form = CursoForm()
    
    if form.validate_on_submit():
        nombre = form.nombre.data
        cursor_insert = db.cursor()
        sql_insert = "insert into tbl_curso(curso_nombre) values('"+nombre+"')"
        cursor_insert.execute(sql_insert)
        db.commit()
        cursor_insert.close()
        return redirect('/cursos')

    
    context = {
        'cursos':mostrar_cursos(),
        'form':form
    }
    return render_template('cursos.html',**context)

@web.route('/cursos/<id>',methods=['GET','POST'])
def cursos_editar(id):
    cursor_editar = db.cursor(dictionary=True)
    sql_editar = "select curso_nombre as nombre from tbl_curso where curso_id = '"+ id +"'"
    
    cursor_editar.execute(sql_editar)
    data = cursor_editar.fetchall()
    print(data)
    cursor_editar.close()
    
    form = CursoForm(data=data[0])
    
    if form.validate_on_submit():
        nombre = form.nombre.data
        cursor_update = db.cursor()
        sql_update = "update tbl_curso set curso_nombre = '"+nombre+"' where curso_id="+id
        cursor_update.execute(sql_update)
        db.commit()
        cursor_update.close()
        return redirect('/cursos')
    
    context = {
        'cursos':mostrar_cursos(),
        'form':form
    }
    
    return render_template('cursos.html',**context)