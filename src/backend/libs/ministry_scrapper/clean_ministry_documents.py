# Cleans the downloaded document data from the ministry api. 
# Removes special characters in text, etc. 

import re
from mysql_connector import MySqlConnector

def remove_html_tags(text):
    return re.sub(r"<[^>]*>", " ", text)


def remove_html_encodings(text):
    return re.sub(r"&[^\s]*;", " ", text)


def clean_text(text):
    text = remove_html_tags(text)
    text = remove_html_encodings(text)
    text = text.strip()
    return text


if __name__ == "__main__":
    connector = MySqlConnector('parlai')
    docs_cursor = connector.get_all_documents_cursor()

    for row in docs_cursor:
        row_dict = dict(zip(docs_cursor.column_names, row))
        id = row_dict['id']
        title = clean_text(row_dict['title'])
        introduction = clean_text(row_dict['introduction'])
        
        connector.update_document_set_title_intro((title, introduction, id))
