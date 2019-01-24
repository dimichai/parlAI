import re
import urllib.request
import urllib.error

pattern = '<title>(.+?)</title>|$'
regex = re.compile(pattern)


def extract_url(document):
    extracted = re.findall('https?://(?:[-\w.]|(?:%[\da-fA-F]{2}))+', document)
    refs = []
    for ref in extracted:
        req = urllib.request.Request(ref, headers={'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                                                                 "AppleWebKit/537.36 (KHTML, like Gecko) "
                                                                 "Chrome/70.0.3538.77 Safari/537.36"})
        try:
            with urllib.request.urlopen(req) as url:
                htmltext = url.read().decode('utf-8')
                title = re.findall(regex, htmltext)[0]
                refs.append({'title': title, 'url': ref})
        except urllib.error.HTTPError:
            continue

    return refs
