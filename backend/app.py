import json
import requests
from flask_cors import CORS
from flask import Flask, jsonify

URL = 'http://www.scale.com.br/countries.json'

app = Flask(__name__)
CORS(app)

def ordering_countries_by_frontier(countries: list):
	countries.sort(key=lambda country: len(country['fronteiras']), reverse=True)
	return countries

def parse_data(data: str):
	modified_lines = [line.strip() for line in data.splitlines()[1:-1]]
	modified_lines.pop()
	modified_lines.pop(0)

	modified_lines[len(modified_lines) - 1] = modified_lines[
			len(modified_lines) - 1
	].replace(",", "")
	parsed_data = "[" + "".join(modified_lines) + "]"
	json_data = json.loads(parsed_data)

	ordered_data = ordering_countries_by_frontier(json_data)

	return ordered_data
	

@app.route('/', methods=['GET'])
def countries():
	global URL
	response = requests.get(URL)

	if response.status_code == 200:
		data = parse_data(response.text)
	elif response.status_code == 404:
		print('error!')
	print(data)
	
	return jsonify({'data': data})

if __name__ == '__main__':
	app.run()