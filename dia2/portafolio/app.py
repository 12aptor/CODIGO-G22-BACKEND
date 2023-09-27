import requests
from flask import Flask,request,render_template

app = Flask(__name__)

URL_GITHUB = 'https://api.github.com/users/cesarmayta'


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
    return render_template('cv.html')

@app.route('/proyectos')
def proyectos():
    return render_template('proyectos.html')

@app.route('/contacto')
def contacto():
    return render_template('contacto.html')


app.run(debug=True)
