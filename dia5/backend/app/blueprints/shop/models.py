from utils import db

class Categoria(db.Model):
    __tablename__ = "tbl_categoria"
    
    id = db.Column(db.Integer,primary_key=True)
    nombre = db.Column(db.String(200),nullable=False)
    
    def __init__(self,nombre):
        self.nombre = nombre
        
    @staticmethod
    def get_all():
        return Categoria.query.all()
    
    @staticmethod
    def get_by_id(id):
        return Categoria.query.get(id)
        
    def save(self):
        if not self.id:
            b.session.add(self)
        db.session.commit() 
        
    def delete(self):
        db.session.delete(self)
        db.session.commit()      
        
        
class Marca(db.Model):
    __tablename__ = "tbl_marca"
    
    id = db.Column(db.Integer,primary_key=True)
    nombre = db.Column(db.String(200),nullable=False)
    
    def __init__(self,nombre):
        self.nombre = nombre
        
    @staticmethod
    def get_all():
        return Marca.query.all()
    
    @staticmethod
    def get_by_id(id):
        return Marca.query.get(id)
        
    def save(self):
        if not self.id:
            db.session.add(self)
        db.session.commit() 
        
    def delete(self):
        db.session.delete(self)
        db.session.commit()     