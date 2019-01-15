import urllib.request, json 

def get_json_from_url(url):
    with urllib.request.urlopen(url) as url:
        data = json.loads(url.read().decode())
        return data