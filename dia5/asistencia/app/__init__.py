from flask import Flask
from flask_bootstrap import Bootstrap5
from .config import Config

from .mysql_lib import MysqlDb
mysql_db = MysqlDb('localhost','root','root','db_asistencia')
db = mysql_db.get_conn()

from .web import web

def create_app():
    app = Flask(__name__)
    boostrap = Bootstrap5(app)
    app.config.from_object(Config)
    
    app.register_blueprint(web)
    
    return app