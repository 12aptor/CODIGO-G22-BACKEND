# Ejercicio 1

"""Ingresar dos datos de 1 usuario (nombre, correo y la contraseña) y estos
datos se guardarán en un diccionario"""

import hashlib

nombre = input("Ingrese su nombre: ")
correo = input("Ingrese su correo: ")
contrasena = input("Ingrese su contraseña: ")

contrasena = hashlib.sha256(contrasena.encode()).hexdigest()

# Primera forma
# usuario = {
#     "nombre": nombre,
#     "correo": correo,
#     "contrasena": contrasena
# }

# Segunda forma
# usuario = {}

# usuario["nombre"] = nombre
# usuario["correo"] = correo
# usuario["contrasena"] = contrasena

# Tercera forma
usuario = dict(nombre=nombre, correo=correo, contrasena=contrasena)

print(usuario)