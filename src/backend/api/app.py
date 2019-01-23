from flask import Flask, jsonify, request

from services.question_document_service import QuestionDocumentService
from services.question_service import QuestionService
from services.user_service import UserService
from services.document_service import DocumentService
from libs.string_helper import split_by_delimeter
from libs.entity_extractor import EntityExtractor
from libs.reference_extractor import extract_url
from models.topic_modeller import TopicModeller
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app)
userService: UserService = UserService()
questionService: QuestionService = QuestionService()
qDocumentService: QuestionDocumentService = QuestionDocumentService()
entityExtractor: EntityExtractor = EntityExtractor()
documentService: DocumentService = DocumentService()
NUM_TOPICS = 5
MALLET_PATH = './libs/mallet-2.0.8/bin/mallet'
DICT_PATH = './models/data/dictionary.pkl'
CORPUS_PATH = './models/data/corpus.pkl'
MODEL_PATH = './models/data/ldaModel'
topicModeller: TopicModeller = TopicModeller(MALLET_PATH, NUM_TOPICS, CORPUS_PATH, DICT_PATH, MODEL_PATH)


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
    # Extract relevant documents
    for question in questions:
        question['documents'] = documentService.get_document_by_question(question['id'], question['keywords'])

    if topicModeller.model:
        for question in questions:
            question['topic'] = topicModeller.get_topic_of_document(question['content'])

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


@app.route('/documents', methods=['POST'])
def documents_by_question():
    data = request.get_json()
    qid = data['id']
    keywords = data['keywords']
    documents = documentService.get_document_by_question(qid, keywords)

    return jsonify(documents)


@app.route('/topicmodeller/train')
def train_topic_modeller():
    questions = pd.read_sql("SELECT * FROM question", questionService.connector)
    topicModeller.fit_model(questions['content'])
    return 'Topic Modeller is fit and saved.'


if __name__ == '__main__':
    app.debug = True
    app.run()
