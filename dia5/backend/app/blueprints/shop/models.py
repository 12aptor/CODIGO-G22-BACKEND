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
        
class Producto(db.Model):
    __tablename__ = 'tbl_producto'
    
    id = db.Column(db.Integer,primary_key=True)
    nombre = db.Column(db.String(200),nullable=False)
    descripcion = db.Column(db.Text,nullable=True)
    precio = db.Column(db.Double,default=0)
    imagen = db.Column(db.String(255))
    categoria_id = db.Column(db.Integer,db.ForeignKey("tbl_categoria.id"))
    marca_id = db.Column(db.Integer,db.ForeignKey("tbl_marca.id"))
    
    def __init__(self,nombre,precio,imagen,categoria_id,marca_id):
        self.nombre = nombre
        self.precio = precio
        self.imagen = imagen
        self.categoria_id = categoria_id
        self.marca_id = marca_id
        
    @staticmethod
    def get_all():
        return Producto.query.all()
    
    @staticmethod
    def get_by_id(id):
        return Producto.query.get(id)
    
    def save(self):
        if not self.id:
            db.session.add(self)
        db.session.commit()
        
    def delete(self):
        db.session.delete(self)
        db.session.commit()