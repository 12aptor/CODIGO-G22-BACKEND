from flask import Flask,render_template,request
from flask_mysqldb import MySQL

app = Flask(__name__)

#conexión a base de datos
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'root'
app.config['MYSQL_DB'] = 'db_asistencia'
app.config["MYSQL_CURSORCLASS"] = "DictCursor"

mysql = MySQL(app)
print("conectado a base de datos")

@app.route('/')
def index():
    cursor = mysql.connection.cursor()
    sqlCursos = "select curso_id,curso_nombre from tbl_curso"
    cursor.execute(sqlCursos)
    data_cursos = cursor.fetchall()
    cursor.close()
    print(data_cursos)
    context = {
        'cursos':data_cursos
    }
    return render_template('index.html',**context)

@app.route('/asistencia/<cid>')
def asistencia(cid):
    cursor_asistencia = mysql.connection.cursor()
    sql_asistencia = """
    select tbl_alumno.alumno_nombre as alumno,
    tbl_asistencia.asistencia_fecha as fecha,
    tbl_asistencia.asistencia_valor as valor
    from
    tbl_alumno
    inner join tbl_asistencia on tbl_asistencia.alumno_id = tbl_alumno.alumno_id 
    where tbl_asistencia.curso_id = """ + cid  + """
    """
    cursor_asistencia.execute(sql_asistencia)
    data_asistencia = cursor_asistencia.fetchall()
    cursor_asistencia.close()
    
    context = {
        'asistencia':data_asistencia
    }
    
    return render_template('index.html',**context)

app.run(debug=True)