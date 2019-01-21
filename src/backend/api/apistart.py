from flask import Flask, jsonify
from api.services.user_service import UserService
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
userService: UserService = UserService()


@app.route('/')
def index():
    return 'Index Page.'


@app.route('/questions')
def questions():
    return 'these are all the questions'


@app.route('/users')
def users():
    allusers = userService.get_all_users()
    print(allusers)
    return jsonify(allusers)


@app.route('/post/<int:post_id>')
def show_post(post_id):
    return 'This is post %d ' % post_id
