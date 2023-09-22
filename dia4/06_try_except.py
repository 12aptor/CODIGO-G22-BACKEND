"""Try: nos permite probar un bloque de código para buscar errores.
Except: En caso de que ocurra un error, podemos manejarlo con except."""

try:
    division = 10/0
except ZeroDivisionError as err:
    print(err)
# Finally: Nos permite ejecutar un bloque de código, sin importar si hubo un error o no.
finally:
    print("Esta línea se ejecuta siempre")

"""Exception: Nos permite manejar cualquier tipo de error que ocurra en el bloque de código."""

try:
    division = 10/"hola"
except Exception as err:
    print(err)


"""Raise: Nos permite lanzar una excepción."""
# Controlar el ingreso a un sitio web de apuestas
try:
    edad = 25
    if edad < 18:
        raise Exception("No puedes ingresar a este sitio web")
    print("Bienvenido a nuestro sitio web")
except Exception as err:
    print(err)