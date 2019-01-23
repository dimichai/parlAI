import re
import urllib.request

pattern = '<title>(.+?)</title>|$'
regex = re.compile(pattern)


def extract_url(document):
    extracted = re.findall('https?://(?:[-\w.]|(?:%[\da-fA-F]{2}))+', document)
    refs = []
    for ref in extracted:
        with urllib.request.urlopen(ref) as url:
            htmltext = url.read().decode('utf-8')
            title = re.findall(regex, htmltext)[0]
            refs.append({'title': title, 'url': ref})

    return refs
