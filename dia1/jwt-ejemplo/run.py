import datetime
from flask import Flask,jsonify,request
from flask_jwt_extended import (
    create_access_token,
    get_jwt_identity,
    jwt_required,
    JWTManager
)

app =  Flask(__name__)

app.config['JWT_SECRET_KEY'] = "QWERTY123"
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = datetime.timedelta(minutes=1)

jwt = JWTManager(app)

@app.route('/')
def index():
    context = {
        'message':'acceso publico'
    }
    return jsonify(context)

@app.route('/privada')
@jwt_required()
def privada():
    context = {
        'message':'esta ruta es privada'
    }
    return jsonify(context)

@app.route('/token')
def generar_token():
    payload = {
        'id':1
    }
    token = create_access_token(payload)
    
    context = {
        'token':token
    }
    
    return jsonify(context)


app.run(debug=True)