from flask import Flask,render_template,request,redirect

from . import web
from app import db

@web.route('/')
def index():
    return render_template('index.html')

@web.route('/cursos')
def cursos():
    cursor = db.cursor(dictionary=True)
    sql_cursos = "select curso_id as id,curso_nombre as nombre from tbl_curso"
    cursor.execute(sql_cursos)
    data_cursos = cursor.fetchall()
    cursor.close()
    print(data_cursos)
    context = {
        'data':data_cursos
    }
    return render_template('cursos.html',**context)