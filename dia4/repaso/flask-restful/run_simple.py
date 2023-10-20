from flask import Flask,request,jsonify

app = Flask(__name__)


@app.route('/',methods=['GET'])
def index():
    context = {
        'message':'api simple'
    }
    return jsonify(context)

app.run(debug=True)