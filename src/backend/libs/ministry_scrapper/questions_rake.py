from rake_nltk import Rake
import string
import re

rake_object = Rake(language='dutch')

rake_object.extract_keywords_from_text("""
Kent u het bericht «Schokkende toename vliegverkeer Buitenveldertbaan»?
""")

keywords = ''
for kw in rake_object.get_ranked_phrases():
    kw = re.sub(r'[^\w\s]', '', kw) # remove punctuation from the keyword
    kw = kw.strip()
    keywords += kw + ';'


print(keywords.strip())