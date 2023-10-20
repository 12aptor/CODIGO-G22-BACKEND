class Persona:
    def __init__(self,nombre,email):
        self.nombre = nombre
        self.email = email
    
    def mostrar(self):
        print("Nombre : " + self.nombre)
        print("Email : " + self.email)
        

class Profesor(Persona):
    pass

persona1 = Persona('cesar','cesar@gmail.com')
persona1.mostrar()

profesor1 = Profesor('Paolo','paolo@gmail.com')
profesor1.mostrar()