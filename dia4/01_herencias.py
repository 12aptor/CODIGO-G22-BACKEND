class Persona:
    def __init__(self, nombre, apellido):
        self.nombre = nombre
        self.apellido = apellido

    def mostrarDatos(self):
        return {
            "nombre": self.nombre,
            "apellido": self.apellido
        }


"""La clase Alumno hereda los atributos de la clase Persona"""
class Alumno(Persona):
    def mostrarNombre(self):
        return self.nombre

# persona = Persona("Juan", "Perez")
# print(persona.mostrarDatos())

"""Aquí podemos ver que se puede actualizar los atributos y acceder
a los métodos de la clase padre"""
alumno = Alumno("Juan", "Perez")
print(alumno.mostrarNombre())