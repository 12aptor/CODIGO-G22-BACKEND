from utils import db

class Categoria(db.Model):
    __tablename__ = "tbl_categoria"
    
    id = db.Column(db.Integer,primary_key=True)
    nombre = db.Column(db.String(200),nullable=False)
    
    def __init__(self,nombre):
        self.nombre = nombre