"""El escope es el alcance que tiene una variable dentro de una aplicación"""

def miFuncion():
    numero = 10
    print(numero)

    def miFuncionInterna():
        print(numero)
    miFuncionInterna()

miFuncion()

# print(numero) # ❌

"""Si queremos que la pertenezca al ambito global tenemos que utilizar la palabra reservada global"""

def miFuncion2():
    global texto
    texto = "Hola mundo"

miFuncion2()

print(texto)