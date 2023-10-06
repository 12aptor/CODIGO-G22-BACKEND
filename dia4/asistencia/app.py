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

app.run(debug=True)