import requests
import xmltodict
import json

URL = "https://api.openstreetmap.org/api/capabilities"

r = requests.get(url=URL)


print(json.dumps(xmltodict.parse(r.text), indent=4))
