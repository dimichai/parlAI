from libs.ministry_scrapper.mysql_connector import MySqlConnector
from datetime import datetime
from libs.ministry_scrapper.json_helper import get_json_from_url

doc_url = "https://opendata.rijksoverheid.nl/v1/sources/rijksoverheid/documents?output=json&organisationalunit=ministerie-van-infrastructuur-en-waterstaat"
doctype_url = "https://opendata.rijksoverheid.nl/v1/sources/rijksoverheid/documents/infotypes?rows=200&output=json"

# Initialize MySQL connector
connector = MySqlConnector('parlai')

# Get json document Types
documentTypes = get_json_from_url(doctype_url)
# Insert document Types into the db
for docType in documentTypes:
    infoType = docType['informationtype']
    infoId = docType['id']
    name = docType['name']
    namesingular = docType['namesingular']
    lastmodified = datetime.strptime(docType['lastmodified'], '%Y-%m-%dT%H:%M:%S.%fZ')

    connector.insert_documentType((infoType, infoId, name, namesingular, lastmodified))

# Get json documents
offset = 0
rows = 200
lookForMore = True
lastModifiedSince = '20171001'

while lookForMore:
    documents = get_json_from_url(doc_url + '&offset=' + str(offset) + '&rows=' + str(rows) + '&lastmodifiedsince=' + lastModifiedSince)
    if len(documents) == 0:
            lookForMore = False
            continue

    for doc in documents:
        docId = doc['id']
        docType = doc['type']
        docTypeId = connector.get_documentType_by_name(docType)
        canonical = doc['canonical']
        dataurl = doc['dataurl']
        title = doc['title']
        intro = doc['introduction']
        lastmodified = datetime.strptime(doc['lastmodified'], '%Y-%m-%dT%H:%M:%S.%fZ')
        frontenddate = datetime.strptime(doc['frontenddate'], '%Y-%m-%dT%H:%M:%S.%fZ')

        connector.insert_document((docId, docType, docTypeId, canonical, dataurl, title, intro, lastmodified, frontenddate))
    
    total = offset + rows
    print('Successfully downloaded and inserted ' + str(total) + ' documents to the database.')
    offset += rows
