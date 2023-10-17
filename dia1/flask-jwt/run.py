from flask import Flask,jsonify,request
from flask_jwt_extended import JWTManager
from flask_jwt_extended import jwt_required
from flask_jwt_extended import create_access_token

app = Flask(__name__)


################ CONFIGURA JWT EN MI PROYECTO FLASK
app.config['JWT_SECRET_KEY'] = 'esta-es-mi-clave-secreta'
jwt = JWTManager(app)
######################################################

usuarios = [
    {
        'id':1,
        'username':'admin',
        'email':'admin@gmail.com'
    },
    {
        'id':2,
        'username':'guest',
        'email':'guest@gmail.com'
    }
]

@app.route('/')
@jwt_required()
def index():
    context = {
        'status':True,
        'content':usuarios
    }
    
    return jsonify(context)

@app.route('/login',methods=['POST'])
def login():
    usuario = request.json.get("usuario",None)
    password = request.json.get("password",None)
    
    if usuario == "admin" and password == "1234":
        token = create_access_token({'id':1})
    else:
        token = 'datos de acceso invalidos'

    context = {
        'status':True,
        'content':token
    }
    
    return jsonify(context)

app.run(debug=True)