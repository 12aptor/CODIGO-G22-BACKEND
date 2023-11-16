from pymongo import MongoClient

cliente = MongoClient('mongodb://localhost:27017')

db_codigo = cliente['db_codigo_g22']

col_alumnos = db_codigo['alumnos']

print("inserte datos de alumno")
nombre = input("nombre : ")
email = input("email : ")
nota = input("nota : ")

dic_alumno = {
    'nombre':nombre,
    'email':email,
    'nota':int(nota)
}

nuevo_alumno = col_alumnos.insert_one(dic_alumno)

print("id de alumno : ",str(nuevo_alumno))

for alumno in col_alumnos.find():
   print("*"*40)
   print("nombre : ",alumno['nombre'])
   print("email  : ",alumno['email'])
   print("nota   : ",alumno['nota'])