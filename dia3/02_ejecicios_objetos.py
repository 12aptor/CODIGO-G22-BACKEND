# Ejercicio 1
"""Crear un objeto Gato que tenga los atributos nombre, color y estado(despierto y dormido)
y tiene que tener los metodos dormir y despertar que cambien el estado del gato y tambien se debe
poder consultar el estado del gato(esta dormido o despierto)"""

class Gato:
    def __init__(self):
        self.nombre = "Michi"
        self.color = "Gris"
        self.estado = "Despierto"
    
    def dormir(self):
        self.estado = "Dormido"
    
    def despertar(self):
        self.estado = "Despierto"

    def estadoGato(self):
        return f"El gato esta {self.estado}"

gato = Gato()
gato.dormir()
# print(gato.estadoGato())

# Ejericio 2
"""Crear un objeto Usuario que tenga los atributos id, nombre, email y password. Que tenga los
métodos para mostrar sus datos en diccionario y crear otro metodo que encripte la contraseña.
Plus: Aplicar esto para una lista de usuarios"""

import hashlib
from pprint import pprint

class Usuario:
    def __init__(self, id, nombre, email, password):
        self.id = id
        self.nombre = nombre
        self.email = email
        self.password = self.__hashPwd(password)

    def toJson(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "email": self.email,
            "password": self.password
        }

    def __hashPwd(self, password):
        return hashlib.sha256(
                password.encode()
            ).hexdigest()

users = [
    {
        "nombre": "Juan",
        "email": "juan@gmail.com",
        "password": "1234"
    },
    {
        "nombre": "Miguel",
        "email": "miguel@gmail.com",
        "password": "123456"
    },
    {
        "nombre": "Eduardo",
        "email": "eduardo@gmail.com",
        "password": "123"
    }
]

index = 1
usersList = []
for user in users:
    usuario = Usuario(
        index,
        user["nombre"],
        user["email"],
        user["password"]
    )
    usersList.append(usuario.toJson())
    index += 1

pprint(usersList)