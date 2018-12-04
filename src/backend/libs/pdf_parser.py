from pdfminer.pdfinterp import PDFResourceManager, PDFPageInterpreter
from pdfminer.converter import TextConverter
from pdfminer.layout import LAParams
from pdfminer.pdfpage import PDFPage
import io


from pathlib import Path
import pandas as pd

def convert_pdf_to_txt(path):
    rsrcmgr = PDFResourceManager()
    retstr = io.StringIO()
    codec = 'utf-8'
    laparams = LAParams()
    device = TextConverter(rsrcmgr, retstr, codec=codec, laparams=laparams)
    fp = open(path, 'rb')
    interpreter = PDFPageInterpreter(rsrcmgr, device)
    password = ""
    maxpages = 0
    caching = True
    pagenos=set()
    for page in PDFPage.get_pages(fp, pagenos, maxpages=maxpages, password=password,caching=caching, check_extractable=True):
        interpreter.process_page(page)
    fp.close()
    device.close()
    str = retstr.getvalue()
    retstr.close()
    return str

# text = convert_pdf_to_txt('./data/parliament-documents/2e-rapportage-rijkswegennet-2018.pdf')
# raw = ' '.join(text)
# print(raw)

root_dir = './data/parliament-documents'

pathlist = Path(root_dir).glob('**/*.pdf')

# documents = pd.DataFrame()
# documents['text'] = [convert_pdf_to_txt(str(path)) for path in pathlist]

d = []
# length = sum (1 for p in pathlist)
counter = 0
for path in pathlist:
    print('Parsing ' + str(counter) + ' of 189')
    counter += 1
    try:
        text = convert_pdf_to_txt(str(path))
        d.append({'text': text})
    except:
        continue



# for path in pathlist:
#     # because path is object not string
#     filepath = str(path)
#     text = convert_pdf_to_txt(filepath)

    
