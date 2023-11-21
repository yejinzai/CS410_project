How To Use StudyFriend Chrome browser extension

1. Download this Github repository locally to your computer. 

2. Install the extension in your Google Chrome:
    In a Chrome browser, go to chrome://extensions/
    enable Developer Mode using the toggle switch
    click on "Load Unpacked" and select the directory where you downloaded this Github repo

3. Open a new tab or window in the Chrome web browser

4. Click on the extension icon in the extension toolbar.

5. View the popup and enter a search term.

------

Notes about search to test on terminal and the api
1. pip install requirements.txt
1. test on terminal
   - python main.py "search query" k e.g. python main.py "climate change" 5
3. test the api
   - python app.py on a terminal
   - in another terminal, curl -X POST -H "Content-Type: application/json" -d '{"query": "search query", "k": k}' http://localhost:5000/api/search e.g. curl -X POST -H "Content-Type: application/json" -d '{"query": "climate change", "k": 5}' http://localhost:5000/api/search
   - 

