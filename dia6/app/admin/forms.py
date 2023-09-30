from flask_wtf import FlaskForm
from wtforms.fields import StringField,SubmitField
from wtforms.validators import DataRequired

class ExperienciaForm(FlaskForm):
    periodo = StringField('Periodo',validators=[DataRequired()])
    empresa = StringField('Empresa',validators=[DataRequired()])
    puesto = StringField('Puesto',validators=[DataRequired()])
    ubicacion = StringField('Ubicación',validators=[DataRequired()])
    resumen = StringField('Resumen')
    submit = SubmitField('Guardar')
    