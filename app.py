from flask import Flask, request, jsonify
#from flask_cors import CORS
from flask_cors import CORS, cross_origin

from search import get_knn
from scrape import do_scrape
import json

app = Flask(__name__)
# Enable CORS for all routes with explicit origin

CORS(app, resources={r"/test/*": {"origins": "*", "methods": ["POST", "OPTIONS"], "headers": ["Content-Type", "Authorization"]}})
@cross_origin(origin='*')


@app.route('/test/search', methods=['POST', 'OPTIONS'])
def handle_request():
    if request.method == 'OPTIONS':
        # Respond to the preflight request
        # response = jsonify()
        response = jsonify()
        response.headers.add('Access-Control-Allow-Origin', '*')  # Change * to your specific front-end domain in production
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
        response.headers.add('Access-Control-Allow-Methods', 'POST')
        return response
       
    else:
        data = request.get_json()

        query = data.get('query')
        k = data.get('k', 5)  # Default to 5 if 'k' is not provided
        print(data)
        scrape_output = do_scrape(query, False)
        search_output = get_knn(query, scrape_output, k)
        response = jsonify(search_output)

        json_response = json.dumps(search_output)
        print(json_response)
        # response = jsonify(json_response)
        response.headers.add('Content-Type', 'application/json')


    # response.headers['Access-Control-Allow-Origin'] = 'http://127.0.0.1:5500'
    # response.headers['Access-Control-Allow-Methods'] = 'POST, OPTIONS'
    # # response.headers['Access-Control-Allow-Headers'] = 'Content-Type, Accept'
    # response.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'
    # # response.headers['Access-Control-Allow-Credentials'] = 'true'
    return response

if __name__ == '__main__':
    app.run(port=5000)





