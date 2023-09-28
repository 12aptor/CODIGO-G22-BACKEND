import firebase_admin
from firebase_admin import credentials

cred = credentials.Certificate('token.json')
firebase_admin.initialize_app(cred)

print("Conectado a firebase")

from firebase_admin import firestore

db = firestore.client()

col_experiencia = db.collection('experiencia')
list_experiencias = col_experiencia.get()

for doc_experiencia in list_experiencias:
    print(doc_experiencia.to_dict())
