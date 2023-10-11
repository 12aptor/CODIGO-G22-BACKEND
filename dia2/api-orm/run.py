from flask import Flask,jsonify,request
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

app = Flask(__name__)

app.app_context().push()

db = SQLAlchemy()
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///db_api.db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

#### MODELOS ####
class Tarea(db.Model):
    id = db.Column(db.Integer,primary_key=True) #id int primary_key
    descripcion = db.Column(db.String(200),nullable=False) # descripcion varchar(200) not null
    estado = db.Column(db.String(100),nullable=False)
    
    def __init__(self,descripcion,estado):
        self.descripcion = descripcion
        self.estado = estado

db.create_all()


### ESQUEMAS ###
ma = Marshmallow(app)
class TareaSchema(ma.Schema):
    class Meta:
        fields = ('id','descripcion','estado')

@app.route('/')
def index():
    context = {
        'status':True,
        'content':'servidor activo con orm'
    }
    return jsonify(context)

@app.route('/tarea',methods=['POST'])
def set_tarea():
    descripcion = request.json['descripcion']
    estado = request.json['estado']
    
    nueva_tarea = Tarea(descripcion,estado)
    db.session.add(nueva_tarea)
    db.session.commit()
    
    data_schema = TareaSchema()
    
    
    context = {
        'status':True,
        'content':data_schema.dump(nueva_tarea)
    }

    return jsonify(context)

@app.route('/tarea',methods=['GET'])
def get_tarea():
    data = Tarea.query.all() #select * from tarea
    #serialización
    data_schema = TareaSchema(many=True)
    """lista_tareas = []
    for tarea in data:
        dic_tarea = {
            'id':tarea.id,
            'descripcion':tarea.descripcion
        }
        lista_tareas.append(dic_tarea)"""
    
    context = {
        'status':True,
        'content:':data_schema.dump(data)
    }
    
    return jsonify(context)


if __name__ == "__main__":
    app.run(debug=True)