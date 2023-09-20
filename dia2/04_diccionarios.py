usuario = {
    "id": 1,
    "nombre": "Carlos",
    "apellido": "Sanchez",
    "edad": 30,
    "estado": True,
}

# Acceder a un valor
# print(usuario["estado"])

# Cambiar un valor
usuario["estado"] = False

# Agrear un valor nuevo
usuario["correo"] = "carlos@gmail.com"

# Eliminar un valor
del usuario["correo"]
usuario.pop("estado")
# usuario.clear() # Elimina todos los valores del diccionario
# print(usuario)

# Recorrer un diccionario
# for valor in usuario.values():
#     print(valor)

for valor in usuario:
    print(valor)

# Crear un diccionario
usuario2 = dict(nombre="Carlos", apellido="Sanchez", edad=30)