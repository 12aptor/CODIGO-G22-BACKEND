from flask import render_template,request,session

from . import portafolio

from app import fb

@portafolio.route('/')
def index():
    context = fb.get_document('perfil','MKuNXNh1wdxyWZUV5MkH')
    session['nombre'] = context['nombre']
    session['curriculum'] = context['curriculum']
    return render_template('portafolio/index.html',**context)

@portafolio.route('/cv')
def curriculum():
    data_experiencia = fb.get_collection('experiencia')
    data_estudios = fb.get_collection('estudios')
    
    context = {
        'experiencias':data_experiencia,
        'estudios':data_estudios
    }
    
    return render_template('portafolio/cv.html',**context)

@portafolio.route('/proyectos')
def proyectos():
    return render_template('portafolio/proyectos.html')

@portafolio.route('/contacto')
def contacto():
    return render_template('portafolio/contacto.html')