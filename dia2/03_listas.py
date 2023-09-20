nombres = ["Juan", "Karla", "Ricardo", "María"]

logitudLista = len(nombres)

# print(logitudLista)

# Agregar un elemento al final de la lista
nombres.append("Lorenzo")
nombres.insert(1, "Octavio")

# Quitar un elemento de la lista
nombres.remove("Juan") # Elimina el elemento por su valor
nombres.pop(1) # Elimina el elemento por su indice

# Ordenar una lista
nombres.sort()
nombres.sort(reverse=True)

print(nombres)