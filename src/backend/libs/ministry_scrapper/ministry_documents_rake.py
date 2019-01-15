# Needs the database to be setup in order to work
# For all the documents in the database, it parses the content and generates keywords.

from rake_nltk import Rake, Metric
from mysql_connector import MySqlConnector
import re

class MinistryRake:
    def __init__(self, language):
        self.rake_object = Rake(language=language) # Initialize rake with the Dutch stopwords

    def extract_title_keywords(self):
        connector = MySqlConnector('parlai')
        docs_cursor = connector.get_all_documents_cursor()

        for row in docs_cursor:
            row_dict = dict(zip(docs_cursor.column_names, row))
            id = row_dict['id']
            title = row_dict['title']

            self.rake_object.extract_keywords_from_text(title)
            
            keywords = ''
            for kw in self.rake_object.get_ranked_phrases():
                keywords += kw + ';'

            keywords = keywords.strip()
            connector.update_document_set_title_keywords((keywords, id))

    def extract_intro_keywords(self):
        connector = MySqlConnector('parlai')
        docs_cursor = connector.get_all_documents_cursor()

        for row in docs_cursor:
            row_dict = dict(zip(docs_cursor.column_names, row))
            id = row_dict['id']
            intro = row_dict['introduction']

            self.rake_object.extract_keywords_from_text(intro)
            
            keywords = ''
            for kw in self.rake_object.get_ranked_phrases():
                keywords += kw + ';'

            keywords = keywords.strip()
            connector.update_document_set_intro_keywords((keywords, id))


if __name__ == "__main__":
    rake = MinistryRake('dutch')
    rake.extract_title_keywords()
    rake.extract_intro_keywords()