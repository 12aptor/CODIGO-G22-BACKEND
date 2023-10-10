from flask import Flask,jsonify,request

app = Flask(__name__)

@app.route('/')
def index():
    context = {
        'status':True,
        'content':'servidor activo'
    }
    
    return jsonify(context)

if __name__ == '__main__':
    app.run(debug=True)