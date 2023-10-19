
def decorador(otra_funcion):
    
    def funcion_decorador():
        print("esto es un decorador")
        
        otra_funcion()
        
    return funcion_decorador


@decorador
def mensaje():
    print("esto es un mensaje")

mensaje()