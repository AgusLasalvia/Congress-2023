from flask import Flask,request,redirect,session,render_template

app = Flask(__name__)


@app.route('/pre_registration',mehotds = ['POST'])
def pre_reg():
    if request.method = 'POST':
        data = request.form
    
