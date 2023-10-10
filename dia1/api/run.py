from flask import Flask,jsonify,request
from flask_mysqldb import MySQL

app = Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'root'
app.config['MYSQL_DB'] = 'db_api'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

mysql = MySQL(app)

@app.route('/')
def index():
    context = {
        'status':True,
        'content':'servidor activo'
    }
    
    return jsonify(context)

@app.route('/tarea')
def get_tarea():
    cursor = mysql.connection.cursor()
    cursor.execute("select text,completed from tbl_tarea")
    data = cursor.fetchall()
    cursor.close()
    
    return jsonify(data)

@app.route('/tarea',methods=['POST'])
def set_tarea():
    text = request.json['text']
    completed = request.json['completed']
    cursor = mysql.connection.cursor()

    sql_insert = """
                 insert into tbl_tarea(text,completed)
                 values('"""+ text +"""','"""+ str(completed) +"""')
                 """
                 
    cursor.execute(sql_insert)
    mysql.connection.commit()
    cursor.close()
    
    context = {
        'status':True,
        'message':'registro exitoso'
    }
    
    return jsonify(context)

@app.route('/tarea/<id>')
def get_tarea_by_id(id):
    sql_tarea = "select text,completed from tbl_tarea where id ="+id
    cursor = mysql.connection.cursor()
    cursor.execute(sql_tarea)
    data = cursor.fetchall()
    cursor.close()
    
    return jsonify(data[0])

if __name__ == '__main__':
    app.run(debug=True)