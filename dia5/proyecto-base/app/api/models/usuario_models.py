from utils import db

class Usuario(db.Model):
    __tablename__ = 'tbl_usuario'
    
    id = db.Column(db.Integer,primary_key=True)
    nombre = db.Column(db.String(255),nullable=False)
    email = db.Column(db.String(200),nullable=False,unique=True)
    password = db.Column(db.Text,nullable=False)
    
    @staticmethod
    def get_all():
        return Usuario.query.all()
    
    @staticmethod
    def get_by_id(id):
        return Usuario.query.get(id)
    
    @staticmethod
    def get_by_email(email):
        return Usuario.query.filter_by(email=email).first()
    
    def save(self):
        if not self.id:
            db.session.add(self)
        db.session.commit()
        
    def delete(self):
        db.session.delete(self)
        db.session.commit()