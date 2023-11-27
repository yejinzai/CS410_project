from flask import Flask, request, jsonify
from flask_cors import CORS
from search import get_knn
from scrape import do_scrape
import json

app = Flask(__name__)
CORS(app)
#CORS(app, resources={r"*": {"origins": "*"}}, supports_credentials=True)  # Allow all origins during development

#@app.route('/test/search', methods=['GET'])

@app.route('/test/search', methods=['GET'])
def handle_request():

    data = request.get_json()

    query = data.get('query')
    k = data.get('k', 5)  # Default to 5 if 'k' is not provided
    return query
    scrape_output = do_scrape(query, False)
    search_output = get_knn(query, scrape_output, k)

    json_response = json.dumps(search_output)
    print(json_response)
    return jsonify(json_response)

if __name__ == '__main__':
    app.run(port=5000)