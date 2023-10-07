from flask_wtf import FlaskForm
from wtforms.validators import DataRequired
from wtforms.fields import StringField,SubmitField


class CursoForm(FlaskForm):
    nombre = StringField('Nombre',validators=[DataRequired()])
    submit = SubmitField('Guardar')