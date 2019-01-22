from flask import Flask, jsonify, request

from api.services.question_document_service import QuestionDocumentService
from api.services.question_service import QuestionService
from api.services.user_service import UserService
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
userService: UserService = UserService()
questionService: QuestionService = QuestionService()
qDocumentService: QuestionDocumentService = QuestionDocumentService()


@app.route('/')
def index():
    return 'Index Page.'


@app.route('/questions')
def questions_by_userid():
    userid = request.args.get('userid')
    questions = []
    if userid:
        questions = questionService.get_questions_by_userid(userid)
    return jsonify(questions)


@app.route('/questionDocuments')
def question_documents_by_userid():
    userid = request.args.get('userid')
    documents = []
    if userid:
        documents = qDocumentService.get_question_document_by_userid(userid)
    return jsonify(documents)


@app.route('/users')
def users():
    allusers = userService.get_all_users()
    return jsonify(allusers)


@app.route('/users/<int:userid>')
def user_by_id(userid):
    user = userService.get_user_by_id(userid)
    return jsonify(user)
