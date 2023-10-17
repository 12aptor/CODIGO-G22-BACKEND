import jwt

payload = {
    'usuario':'cesar.mayta',
    'email':'cesarmayta@gmail.com',
    'id':1
}

secret_key  = 'QWERTY123'

token = jwt.encode(payload,secret_key,algorithm="HS256")
print("mi token es : ",token)