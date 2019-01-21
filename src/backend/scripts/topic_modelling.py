from libs.questions_parser.mysql_connector import MySqlConnector
from models.topic_modeller import TopicModeller
import pandas as pd

if __name__ == "__main__":
    NUM_TOPICS = 5
    MALLET_PATH = './libs/mallet-2.0.8/bin/mallet'
    CORPUS_PATH = './models/data/corpus.pkl'
    MODEL_PATH = './models/data/ldaModel'

    # Get questions from database
    connector = MySqlConnector('parlai')
    questions = pd.read_sql("SELECT * FROM question", connector.connector)

    # Initialize topic modeller
    topicModeller = TopicModeller(MALLET_PATH, NUM_TOPICS, questions['content'], CORPUS_PATH, MODEL_PATH)
    # Connect to the database
    questions_cursor = connector.get_all_questions_cursor()

    # Get questions from the databse
    topicModeller.fit_model()

    topicModeller.print_topics_scores()
    topicModeller.print_topics_simple()

    topicModeller.get_coherence_score()

    sent_topics_df = topicModeller.get_topics_per_document()
    print(sent_topics_df.head())
    for index, row in sent_topics_df.head(5).iterrows():
        print(row['Dominant_Topic'])
        print(row['Perc_Contribution'])
        print(row['Topic_Keywords'])
        print(row['content'])
        print('----')

    # topicModeller.create_visualization(model)
