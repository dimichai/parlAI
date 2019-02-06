# Connects to the database and gets documents that don't have fileurls, mines this data from the dataurl website.

from libs.ministry_scrapper.mysql_connector import MySqlConnector
import requests
from libs.ministry_scrapper.json_helper import get_json_from_url

connector = MySqlConnector('parlai')
docs_cursor = connector.get_empty_fileurls_documents_cursor()

count = 0
for row in docs_cursor:
    row_dict = dict(zip(docs_cursor.column_names, row))
    id = row_dict['id']
    dataurl = row_dict['dataurl']

    # From the dataurl, we need the fileurl, to easy access it later
    # Documents without a url are of no need to us, since we need the actual file.
    if not dataurl:
        continue
    
    data = get_json_from_url(dataurl + '?output=json')
    files = data['files']
    fileurls = ''
    for file in files:
        fileurls += file['fileurl'] + ';'

    connector.update_document_set_file_url((fileurls, id))
