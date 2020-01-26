#This example uses Python 2.7 and the python-request library.

from requests import Request, Session
from requests.exceptions import ConnectionError, Timeout, TooManyRedirects
import json

url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/historical'
parameters = {
    'start':'1',
    'limit':'1',
    'convert':'USD,BTC',
    'date':'2018-08-09'
}
headers = {
    'Accepts': 'application/json',
    'X-CMC_PRO_API_KEY': '66e51ddf-3b35-4977-8044-8a19819d0022',
}

session = Session()
session.headers.update(headers)

try:
    response = session.get(url, params=parameters)
    data = json.loads(response.text)
    with open('historical.json', 'w') as f:  # writing JSON object
            json.dump(data, f)
    print(data)
except (ConnectionError, Timeout, TooManyRedirects) as e:
    print(e)