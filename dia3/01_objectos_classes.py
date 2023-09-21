# Creación de una clase
class MiClase:
    # constructor de la clase
    def __init__(self):
        self.atributo = "valor"

    def __str__(self):
        return "Soy un metodo magico"
    
    # Método de la clase
    def metodo(self):
        return "Soy un método de la clase MiClase"

mi_clase = MiClase()

# print(mi_clase.atributo)
# print(mi_clase.metodo())

"""Crear un objeto Vehiculo con atributos marca, modelo, color
y un método que devuelva la marca y el modelo del vehiculo"""

class Vehiculo:
    def __init__(self, _marca, _modelo, _color):
        self.marca = _marca
        self.modelo = _modelo
        self.color = _color

    # El método __str__ es un método mágico que representa el objeto en un string
    def __str__(self):
        return f"El vehiculo es un {self.marca} {self.modelo} {self.color}"
    
    # El self es una convención de python para referirse al objeto actual
    def getMarcaModel(self):
        return f"Vehiculo {self.marca} {self.modelo}"
    
    def actualizarMarca(self, _marca):
        print(self.__metodoPrivado())
        self.marca = _marca

    # Los métodos privados son métodos que solo pueden ser llamados desde la clase y se definen con __
    def __metodoPrivado(self):
        return "Soy un método privado"

vehiculo = Vehiculo("Ford", "Fiesta", "Gris")

# print(vehiculo.getMarcaModel())
vehiculo.actualizarMarca("Chevrolet")
# print(vehiculo)
