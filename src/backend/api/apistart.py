from flask import Flask, jsonify, request

from api.services.question_document_service import QuestionDocumentService
from api.services.question_service import QuestionService
from api.services.user_service import UserService
from api.services.document_service import DocumentService
from api.libs.string_helper import split_by_delimeter
from api.libs.entity_extractor import EntityExtractor
from api.libs.reference_extractor import extract_url
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
userService: UserService = UserService()
questionService: QuestionService = QuestionService()
qDocumentService: QuestionDocumentService = QuestionDocumentService()
entityExtractor: EntityExtractor = EntityExtractor()
documentService: DocumentService = DocumentService()


@app.route('/')
def index():
    return 'Index Page.'


@app.route('/questions')
def get_questions():
    questions = []

    userid = request.args.get('userid')
    docid = request.args.get('docid')

    if userid:
        questions = questionService.get_questions_by_userid(userid)
    elif docid:
        questions = questionService.get_questions_by_doc_id(docid)

    # Extract named entities
    for question in questions:
        question['entities'] = entityExtractor.extract_keywords(question['content'])
    # Extract references
    for question in questions:
        question['references'] = extract_url(question['content'])

    return jsonify(questions)


@app.route('/questionDocuments')
def question_documents_by_userid():
    userid = request.args.get('userid')
    documents = []
    if userid:
        documents = qDocumentService.get_question_document_by_userid(userid)

    # split keywords by comma instead of #
    for doc in documents:
        doc['keywords'] = split_by_delimeter(doc['keywords'], '#')

    return jsonify(documents)


@app.route('/users')
def users():
    allusers = userService.get_all_users()
    return jsonify(allusers)


@app.route('/users/<int:userid>')
def user_by_id(userid):
    user = userService.get_user_by_id(userid)
    return jsonify(user)


@app.route('/documents')
def documents_by_question():
    keywords = request.args.get('keywords')
    documents = documentService.get_document_by_question(1, keywords)

    return jsonify(documents)