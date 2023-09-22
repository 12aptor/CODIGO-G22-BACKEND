"""Un modulo en python hacer referencia a un archivo que contiene
funciones, clases y variables que pueden ser importadas desde otro"""

from modulo import suma

# print(suma(1, 4))

import modulo

# print(modulo.suma(3, 3))

operaciones = modulo.Operaciones(3, 5)

# print(operaciones.suma())
# print(modulo.texto)

from helpers.is_number import is_number

print(is_number(False))