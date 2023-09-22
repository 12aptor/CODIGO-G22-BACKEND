"""open es una funcion que nos permite abrir un archivo,
recibe dos parametros, el primero es el nombre del archivo
y el segundo es el modo en el que lo vamos a abrir."""

archivo = open("./dia4/texto.txt", "a")
archivo.write("Hola, este es un archivo de texto")
archivo.close()

"""Modos de apertura de archivos:"""
# r: read, solo lectura
# w: write, escritura, si el archivo no existe lo crea
# a: append, agregar, agrega al final del archivo
# r+: read and write, lectura y escritura
# w+: write and read, escritura y lectura, si el archivo no existe lo crea
# a+: append and read, agregar y leer, agrega al final del archivo

"""Para leer un archivo utilizamos el metodo read()"""
documento = open("./dia4/texto.txt", "r")
print(documento.read())
documento.close()

"""Crear un documento python y lo vamos a tratar como módulo"""
py_file = open("./dia4/python_file.py", "w")
py_file.write("def suma(a, b):\n\treturn a + b")
py_file.close()

import python_file

print(python_file.suma(5, 5))