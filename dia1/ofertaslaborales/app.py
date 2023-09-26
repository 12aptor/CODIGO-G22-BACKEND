from flask import Flask,request,render_template

app = Flask(__name__)

@app.route('/')
def index():
    titulo = "OFERTAS LABORALES"
    lista_ofertas = [
        {
            "titulo":"FRONTEND DEVELOPER REACT",
            "imagen":"https://sigdeletras.com/images/blog/202004_react_leaflet/react.png",
            "descripcion":"Buscamos frontend developer con experiencia en react"
        },
        {
            "titulo":"BACKEN DEVELOPER PYTHON",
            "imagen":"https://beapythondev.files.wordpress.com/2019/06/python.png?w=365&h=365&crop=1",
            "descripcion":"Buscamos backend developer con python , buena paga"
        }
    ]
    
    context = {
        "titulo":titulo,
        "ofertas":lista_ofertas
    }
    
    return render_template('index.html',**context)

app.run(debug=True)