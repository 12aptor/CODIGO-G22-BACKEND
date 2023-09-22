"""Polimorfismo en programación es una funcion/metodo/operador
con el mismo nombre que se puede comportar de manera diferente"""

texto = "Hola mundo"
diccionario = {
    "id": 1,
    "nombre": "Juan",
    "apellido": "Perez"
}
lista = [16, 30, 25, 27]
tupla = (1, 3, 5, 7)

print(len(texto)) # ✔️
print(len(diccionario)) # ✔️
print(len(lista)) # ✔️
print(len(tupla)) # ✔️

for letra in texto: # ✔️
    print(letra)

for llave in diccionario: # ✔️
    print(llave)

for edad in lista: # ✔️
    print(edad)

for numero in tupla: # ✔️
    print(numero)