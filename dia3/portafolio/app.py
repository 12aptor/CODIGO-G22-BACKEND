import json
import requests
from flask import Flask,request,render_template
from firebase import FirebaseAdmin

app = Flask(__name__)

fb = FirebaseAdmin()

URL_GITHUB = 'https://api.github.com/users/cesarmayta'

def leer_json(archivo_json):
    with open(archivo_json,'r') as archivo:
        data = json.load(archivo)
    return data

@app.route('/')
def index():
    data = requests.get(URL_GITHUB).json()
    print(data)
    context = {
        'nombre':data['name'],
        'biografia':data['bio'],
        'imagen':data['avatar_url'],
        'ubicacion':data['location'],
        'twitter':data['twitter_username'],
        'github':data['html_url']
    }
    return render_template('index.html',**context)

@app.route('/cv')
def curriculum():
    data_experiencia = fb.get_collection('experiencia')
    data_educacion = fb.get_collection('estudios')
    context = {
        'experiencias':data_experiencia,
        'estudios':data_educacion
    }
    return render_template('cv.html',**context)

@app.route('/proyectos')
def proyectos():
    return render_template('proyectos.html')

@app.route('/contacto')
def contacto():
    return render_template('contacto.html')


app.run(debug=True)
