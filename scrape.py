import json
from Scraper import WebScrapeTedTalk

def do_scrape(query, is_dummy):

    if is_dummy:
        with open('dummy.txt', 'r') as json_file:
            output = json.load(json_file)
    else:
        o = WebScrapeTedTalk(query)
        output = o.output_as_records()

    return output
