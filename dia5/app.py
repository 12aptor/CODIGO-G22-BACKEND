# Importar Flask
from flask import Flask, request
import requests

# Crear una instancia de Flask
app = Flask(__name__)

# Crear una ruta
@app.route("/")
def hola_mundo():
    response = requests.get("https://jsonplaceholder.typicode.com/todos/1")
    return response.json()

# Definir los métodos que se pueden usar en la ruta
@app.route("/registro", methods=["POST", "GET", "PUT", "DELETE", "OPTIONS"])
def registrar_usuario():
    return "Registro de usuario"

# Definir una ruta con parámetros
@app.route("/usuario/<int:id>")
def obtener_usuario(id):
    return f"El id del usuario es {id}"

@app.route("/usuarios", methods=["POST", "GET"])
def mostrar_listar_usuarios():
    # request.method: Obtiene el método de la petición
    if request.method == "POST":
        return {
            "id": 2,
            "nombre": "Juan",
            "apellido": "Perez"
        }
    return [
        {
            "id": 1,
            "nombre": "Juan",
            "apellido": "Perez"
        },
        {
            "id": 2,
            "nombre": "Miguel",
            "apellido": "Rodriguez"
        }
    ]

# Recibir datos por el body
@app.route("/productos", methods=["POST"])
def crear_producto():
    json = request.json
    return {
        "id": 1,
        "nombre": json["nombre"],
        "precio": json["precio"]
    }

@app.route("/html")
def mostrar_html():
    return "<button>Click</button>"

if __name__ == "__main__":
    app.run(debug=True)