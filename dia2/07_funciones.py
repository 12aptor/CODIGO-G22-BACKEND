def miFuncion():
    print("Mi primera función")

# miFuncion()

def suma(num1, num2):
    return num1 + num2

def suma2(*args):
    # print(args) # Tupla (1,2,3,4)
    return sum(args)

# print(suma2(1,2,3,4))

def suma3(**kwargs):
    # print(kwargs) # Diccionario {'a': 1, 'b': 2, 'c': 3, 'd': 4}
    return sum(kwargs.values())

print(suma3(a=1, b=2, c=3, d=4))

def suma4(num1=5, num2=5):
    return num1 + num2

print(suma4(4, 4))