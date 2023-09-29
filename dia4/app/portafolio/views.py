from flask import render_template,request,session

from . import portafolio

from app import fb

@portafolio.route('/')
def index():
    context = fb.get_document('perfil','MKuNXNh1wdxyWZUV5MkH')
    session['nombre'] = context['nombre']
    session['curriculum'] = context['curriculum']
    return render_template('portafolio/index.html',**context)