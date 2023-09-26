from flask import Flask,request

app = Flask(__name__)

@app.route('/')
def index():
    return '<center>BIENVENIDO A MI WEB CON FLASK</center>'

@app.route('/saludo')
def saludo():
    nombre = request.args.get('nom','no hay nombre')
    return '<center><h1>Hola {}</h1></center>'.format(nombre)

@app.route('/suma')
def suma():
    n1 = request.args.get('n1','0')
    n2 = request.args.get('n2','0')
    
    resultado = int(n1) + int(n2)
    return '<center><h1>la suma de {} + {} es {}</h1></center>'.format(n1,n2,resultado)

@app.route('/restar/<int:n1>/<int:n2>')
def resta(n1=0,n2=0):
    resultado = n1 - n2
    return '<center><h1>La resta de {} - {} es {}</h1></center>'.format(n1,n2,resultado)

""" crear una ruta que reciba 3 parametros
n1,n2 y ope donde ope es la operación a realizar
si ope = suma el resultado debe ser la suma de n1 y n2
si ope = resta el resultado debe ser la resta de n1 y n2
si ope = multiplicacion el resultado debe ser la multiplicación de n1 y n2
"""
@app.route('/<ope>/<int:n1>/<int:n2>')
def operacion(ope='',n1=0,n2=0):
    if(ope=="suma"):
        resultado = n1 + n2
    elif(ope=="resta"):
        resultado = n1 - n2
    elif(ope=="multiplicacion"):
        resultado = n1 * n2
    else:
        resultado = "nn"
        
    if(resultado != "nn"):
        return "la {} de {} y {} es {}".format(ope,n1,n2,resultado)
    else:
        return "no se encontro la operacion solicitada"

app.run(debug=True)
