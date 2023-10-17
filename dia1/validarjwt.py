import jwt
secret_key  = 'QWERTY123'

token = input("inserta token : ")

try:
    validate_jwt = jwt.decode(token,secret_key,algorithms=["HS256"])
    print("Token valido : ")
    print(validate_jwt)
except jwt.exceptions.ExpiredSignatureError:
    print("el token ha expirado")
except jwt.exceptions.InvalidSignatureError:
    print("la firma no es valida")
except jwt.exceptions.DecodeError:
    print("El token no es valido!!!")