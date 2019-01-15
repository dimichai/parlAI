from flask import Flask
app = Flask(__name__)

@app.route('/')
def index():
    return 'Index Page.'

@app.route('/hello')
def hello():
    return 'Hello, world!'

@app.route('/user/<username>')
def greet_user(username):
    return 'Hello, %s ' %username

@app.route('/post/<int:post_id>')
def show_post(post_id):
    return 'This is post %d ' %post_id