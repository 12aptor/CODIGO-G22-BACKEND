from flask import Flask,render_template,request,session

from . import portafolio

@portafolio.route('/')
def index():
    return render_template('portafolio/index.html')