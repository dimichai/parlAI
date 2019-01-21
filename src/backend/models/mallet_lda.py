import re
# from gensim.utils import simple_preprocess
import string
from pprint import pprint

import gensim
import pandas as pd
import spacy
from gensim import corpora
from gensim.models import CoherenceModel
from libs.questions_parser.mysql_connector import MySqlConnector
from nltk.corpus import stopwords
from nltk.stem.snowball import DutchStemmer
from nltk.stem.wordnet import WordNetLemmatizer

class MalletTopicModeller:
    num_topics = 10
    mallet_path = ''
    corpus = None
    dictionary = None
    model = None

    # exclude = set(string.punctuation)

    def __init__(self, mallet_path, num_topics):
        self.num_topics = num_topics
        self.mallet_path = mallet_path

        self.stopwords = set(stopwords.words('dutch'))
        self.stemmer = DutchStemmer()
        self.lemmatizer = WordNetLemmatizer()

        self.model = gensim.models.ldamodel.LdaModel.load('ldaModel')

    def clean_doc(self, doc):
        cleaned = " ".join(
            [i for i in doc.lower().split() if i not in self.stopwords and re.match(r'[a-zA-Z\-][a-zA-Z\-]{2,}', i)])
        cleaned = "".join(
            ch for ch in cleaned if ch not in set(string.punctuation))
        cleaned = re.sub(r'^https?:\/\/.*[\r\n]*', '', cleaned, flags=re.MULTILINE)
        cleaned = " ".join(token for token in self.lemmatize_doc(cleaned, ['NOUN', 'ADJ']) if token)
        cleaned = cleaned.replace('”', '')

        return cleaned

    def lemmatize_doc(self, doc, allowed_postags=['NOUN', 'ADJ', 'VERB', 'ADV']):
        nlp = spacy.load('nl_core_news_sm', disable=['parser', 'ner'])

        text = nlp(doc)
        lemmatized_doc = [token.lemma_ for token in text if token.pos_ in allowed_postags]
        return lemmatized_doc

    def fit_model(self, questions):
        # Clean questions
        cleaned = [self.clean_doc(q).split() for q in questions]

        # Build a Dictionary - association word to numeric id
        dictionary = corpora.Dictionary(cleaned)

        # Transform the collection of texts to a numerical form
        self.corpus = [dictionary.doc2bow(text) for text in cleaned]

        # model = gensim.models.wrappers.LdaMallet(self.mallet_path, corpus=corpus, num_topics=self.num_topics,
        #                                              id2word=dictionary, optimize_interval=5)
        self.model = gensim.models.ldamodel.LdaModel(corpus=self.corpus,
                                                     id2word=dictionary,
                                                     num_topics=self.num_topics,
                                                     random_state=123,
                                                     chunksize=100,
                                                     passes=10,
                                                     alpha='auto',
                                                     per_word_topics=True)

        self.model.save('ldaModel')

    def print_topics_simple(self):
        x = self.model.show_topics(num_topics=self.num_topics,
                                   num_words=10, formatted=False)
        topics_words = [(tp[0], [wd[0] for wd in tp[1]]) for tp in x]

        # Below Code Prints Topics and Words
        for topic, words in topics_words:
            print(str(topic) + ":" + str(words))

    def print_topics_scores(self):
        pprint(self.model.print_topics())

    def get_coherence_score(self, questions):
        # Clean questions
        cleaned = [self.clean_doc(q).split() for q in questions]

        coherence_model = CoherenceModel(
            model=self.model, texts=cleaned, dictionary=self.dictionary, coherence='c_v')
        coherence = coherence_model.get_coherence()
        print('\nCoherence Score: ', coherence)

    # def create_visualization(self, model):
    #     vis = pyLDAvis.gensim.prepare(model, self.corpus, self.dictionary)
    #     pyLDAvis.show(vis)
    #     return

    def format_topics_sentences(self, questions):
        # Init output
        sent_topics_df = pd.DataFrame()

        # Get main topic in each document
        for i, row in enumerate(self.model[self.corpus]):
            row = sorted(row, key=lambda x: (x[1]), reverse=True)
            # Get the Dominant topic, Perc Contribution and Keywords for each document
            for j, (topic_num, prop_topic) in enumerate(row):
                if j == 0:  # => dominant topic
                    wp = self.model.show_topic(topic_num)
                    topic_keywords = ", ".join([word for word, prop in wp])
                    sent_topics_df = sent_topics_df.append(
                        pd.Series([int(topic_num), round(prop_topic, 4), topic_keywords]), ignore_index=True)
                else:
                    break
        sent_topics_df.columns = ['Dominant_Topic', 'Perc_Contribution', 'Topic_Keywords']

        # Add original text to the end of the output
        contents = pd.Series(questions)
        sent_topics_df = pd.concat([sent_topics_df, contents], axis=1)
        return sent_topics_df


if __name__ == "__main__":
    NUM_TOPICS = 10
    MALLET_PATH = './libs/mallet-2.0.8/bin/mallet'
    # Initialize topic modeller
    topicModeller = MalletTopicModeller(MALLET_PATH, NUM_TOPICS)
    # Connect to the database
    connector = MySqlConnector('parlai')
    questions_cursor = connector.get_all_questions_cursor()

    # Get questions from the databse
    questions = pd.read_sql("SELECT * FROM question", connector.connector)
    # topicModeller.fit_model(questions['content'])

    topicModeller.print_topics_scores()
    topicModeller.print_topics_simple()

    # topicModeller.get_coherence_score(questions['content'])

    sent_topics_df = topicModeller.format_topics_sentences(questions['content'])
    print(sent_topics_df.head())

    # topicModeller.create_visualization(model)
