from flask import Flask, request, jsonify
from flask_cors import CORS
from search import get_knn
from scrape import do_scrape
import json

app = Flask(__name__)
# Enable CORS for all routes with explicit origin
CORS(app, resources={r"/test/*": {"origins": "*", "methods": ["POST", "OPTIONS"], "headers": ["Content-Type", "Authorization"]}})

@app.route('/test/search', methods=['POST'])
def handle_request():
    data = request.get_json()

    query = data.get('query')
    k = data.get('k', 5)  # Default to 5 if 'k' is not provided
    print(data)
    scrape_output = do_scrape(query, False)
    search_output = get_knn(query, scrape_output, k)

    json_response = json.dumps(search_output)
    print(json_response)
    return jsonify(json_response)

if __name__ == '__main__':
    app.run(port=5000)