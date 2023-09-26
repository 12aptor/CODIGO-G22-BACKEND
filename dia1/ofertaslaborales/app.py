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
            "titulo":"BACKEND DEVELOPER PYTHON",
            "imagen":"https://beapythondev.files.wordpress.com/2019/06/python.png?w=365&h=365&crop=1",
            "descripcion":"Buscamos backend developer con python , buena paga"
        },
        {
            "titulo":"MOBILE DEVELOPER",
            "imagen":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTtE3yAbQtbA4oCsav_aOv28n57jcFsMI5FZvgOQVh8WFE99F4CkINj_PvDX-vYV5TMEw&usqp=CAU",
            "descripcion":"Buscamos Programador de apps mobile flutter"
        }
    ]
    
    context = {
        "titulo":titulo,
        "ofertas":lista_ofertas
    }
    
    return render_template('index.html',**context)

@app.route('/detalle')
def detalle():
    return render_template('detalle.html')

app.run(debug=True)