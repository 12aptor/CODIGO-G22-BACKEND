from flask import Flask,render_template,request,redirect

from . import web
from app import db

from .forms import CursoForm

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
    
    
    cursor = db.cursor(dictionary=True)
    sql_cursos = "select curso_id as id,curso_nombre as nombre from tbl_curso"
    cursor.execute(sql_cursos)
    data_cursos = cursor.fetchall()
    cursor.close()
    print(data_cursos)
    context = {
        'cursos':data_cursos,
        'form':form
    }
    return render_template('cursos.html',**context)