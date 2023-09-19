texto = """Soy un comentario de varias líneas,
pero en realidad soy un string"""

# print(texto[4]) # u
# print(len(texto)) # 66
# print("string" in texto)

# if "string" in texto:
#     print("string está en texto")

# if "python" not in texto:
#     print("python no está en texto")

# print(texto[0:6]) # Soy un

# print(texto.lower())
# print(texto.upper())

# print(texto.replace("string", "cadena"))

cadenaDeTexto = "Hola soy {}, desarrollador de {}".format("Luis", "Python")

otraCadenaDeTexto = f"Hola soy {'Luis'}, desarrollador de {'Python'}"

print(otraCadenaDeTexto)