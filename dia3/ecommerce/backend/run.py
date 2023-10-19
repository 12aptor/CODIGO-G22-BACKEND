from app import create_app
from utils import db,migrate,jwt

app = create_app()

with app.app_context():
    db.init_app(app)
    migrate.init_app(app,db)
    jwt.init_app(app)