# Needs the database to be setup in order to work
# For all the documents in the database, it parses the content and generates keywords.

from rake_nltk import Rake, Metric
from mysql_connector import MySqlConnector
import re

class MinistryRake:
    def __init__(self, language):
        self.rake_object = Rake(language=language) # Initialize rake with the Dutch stopwords

    def _extract_keywords_from_field(self, field):
        self.rake_object.extract_keywords_from_text(field)

        keywords = ''
        for kw in self.rake_object.get_ranked_phrases():
            kw = re.sub(r'[^\w\s]', '', kw) # remove punctuation from the keyword
            kw = kw.strip()
            keywords += kw + ';'

        return keywords.strip()

    def extract_keywords(self):
        connector = MySqlConnector('parlai')
        docs_cursor = connector.get_all_documents_cursor()

        for row in docs_cursor:
            row_dict = dict(zip(docs_cursor.column_names, row))
            id = row_dict['id']

            title = row_dict['title']
            title_keywords = self._extract_keywords_from_field(title)
            intro = row_dict['introduction']
            intro_keywords = self._extract_keywords_from_field(intro)

            connector.update_document_set_keywords((title_keywords, intro_keywords, id))

if __name__ == "__main__":
    rake = MinistryRake('dutch')
    rake.extract_keywords()