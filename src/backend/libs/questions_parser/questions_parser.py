import pandas as pd
from xml.dom import minidom
from libs.questions_parser.mysql_connector import MySqlConnector

def clean_questions():
    questions = pd.read_csv('./data/question_data.csv', delimiter=';')

    # Keep only the questions that reference the ministry of infrastructure
    ministry_questions = questions[questions['function'].str.lower().str.contains("infrastructuur en waterstaat")]

    # Clean special characters
    ministry_questions['keywords'] = ministry_questions['keywords'].str.replace(u'\xa0', u' ')

    # Clean the keywords
    cleaned_keywords = []
    for row in ministry_questions['keywords']:
        keywords_list = [kw.strip() for kw in str(row).split('#')]
        keywords_list = [kw for kw in keywords_list if kw]
        cleaned_keywords.append('#'.join(keywords_list))

    ministry_questions['keywords'] = cleaned_keywords

    # Save to new file
    ministry_questions.to_csv('./data/question_data_cleaned.csv', sep=';', index=False)

def save_documents_to_database():
    # Load the cleaned questions
    questions = pd.read_csv('./data/question_data_cleaned.csv', delimiter=';')
    connector = MySqlConnector('parlai')

    for index, row in questions.iterrows():
        title = row['title']
        answeredby = row['function']
        keywords = row['keywords']
        questionContent = row['questions']

        docId = connector.insert_question_document((title, answeredby, keywords, questionContent))

        # Parse questions xml
        xml = row['questions']
        questions = parse_questions_from_xml(xml)
        for q in questions:
            q = q.lstrip('0123456789 ') # strip the leading numbers and spaces from the question.
            q = q.strip()

            connector.insert_question((docId, q))
        

    return

def parse_questions_from_xml(xml):
    xmldoc = minidom.parseString(xml)
    document = xmldoc.getElementsByTagName('questions')[0]
    questions = []
    for question in document.childNodes:
        try:
            questions.append(question.childNodes[0].nodeValue)
        except:
            print(question.nodeValue)
        
    return questions

if __name__ == "__main__":
    print('Question Parsing Started')
    clean_questions()
    save_documents_to_database()
