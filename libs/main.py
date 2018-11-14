from ministry_scraper import simple_get, get_filename_from_cd
from bs4 import BeautifulSoup
import requests

root_url = 'https://www.rijksoverheid.nl'
local_dir = '../data/parliament-documents/'
documents_url = 'https://www.rijksoverheid.nl/ministeries/ministerie-van-infrastructuur-en-waterstaat/documenten?type=Kamerstuk&pagina=%d'
unknown_count = 0

# Iterate through the 20 pages of documents in the website.
for i in range(1, 21):
    print('Downloading page %d' % i)
    # Get the raw html of the page
    raw_html = simple_get(documents_url % i)
    soup = BeautifulSoup(raw_html, 'html.parser')

    # Find the listing of the documents
    documents = soup.find('div', {'class': 'common results'})
    # Get the links for each document
    document_links = [root_url + a['href'] for a in documents.find_all('a')]

    # Create a new BS object with the page of each individual document
    document_html = [simple_get(link) for link in document_links]
    document_soup = [BeautifulSoup(raw_html, 'html.parser') for raw_html in document_html]

    # Get the URLs of each document
    pdf_url = [root_url + soup.find('a', {'class': 'download-chunk'})['href'] for soup in document_soup]

    # Download the files
    for url in pdf_url:    
        r = requests.get(url, allow_redirects=True)
        filename = get_filename_from_cd(r.headers.get('content-disposition'))

        if (filename):
            filename = filename.replace('"', '')
        else:
            unknown_count += 1
            filename = 'unknown_%d.pdf' % unknown_count
        location = local_dir + filename
        open(location, 'wb+').write(r.content)




