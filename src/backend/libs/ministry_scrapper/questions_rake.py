from rake_nltk import Rake
import string
import re

rake_object = Rake(language='dutch')

rake_object.extract_keywords_from_text("""
Klopt het dat gemeentes recyclebedrijven tienduizend tot twintigduizend euro betalen om kunstgras te verwerken? Klopt het ook dat deze recyclebedrijven zich vaak niet houden aan deze afspraken en het kunstgras illegaal opslaan en/of illegaal doorverkopen? Deelt u de mening dat het zeer zorgelijk is dat deze bedrijven moedwillig vervuilen voor winst en dat deze winst betaald wordt door de Nederlandse burger?
""")

keywords = ''
for kw in rake_object.get_ranked_phrases():
    kw = re.sub(r'[^\w\s]', '', kw) # remove punctuation from the keyword
    kw = kw.strip()
    keywords += kw + ';'


print(keywords.strip())