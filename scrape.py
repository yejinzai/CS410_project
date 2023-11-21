import json

def do_scrape(query):
    # TODO: Payel

    with open('dummy.txt', 'r') as json_file:
        output = json.load(json_file)

    return output