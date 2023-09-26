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

@app.route('/resta/<int:n1>/<int:n2>')
def resta(n1=0,n2=0):
    resultado = n1 - n2
    return '<center><h1>La resta de {} - {} es {}</h1></center>'.format(n1,n2,resultado)

app.run(debug=True)
