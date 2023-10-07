from flask import Flask,render_template,request,redirect

from . import web

@web.route('/')
def index():
    return render_template('index.html')