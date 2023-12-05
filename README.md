How To Use StudyFriend Chrome browser extension

1. Download this Github repository locally to your computer. 

pip install requirements.txt

for issues with pip install invovling long paths: https://learn.microsoft.com/en-us/windows/win32/fileio/maximum-file-path-limitation?tabs=powershell#enable-long-paths-in-windows-10-version-1607-and-later

2. Install the extension in your Google Chrome:
    In a Chrome browser, go to chrome://extensions/
    enable Developer Mode using the toggle switch
    click on "Load Unpacked" and select the directory where you downloaded this Github repo

3. Open a terminal in the Github folder and run:
    flask run 

    or you may be able to use:
    python app.py

4. Open index.html in the Chrome browser

5. enter a search term

-----
Bookmarks Section

1. npm install firebase
2. to test out the bookmark feature, open terminal and run: live-server . 



------
dummy.txt has text data
    - Payel can use to verify if scaper output matches with search input
    - Sharon and Christine can use to development front-end tasks in parallel

------

Notes about search to test on terminal and the api
1. pip install requirements.txt
1. test on terminal
   - python main.py "search query" k
   - e.g. python main.py "climate change" 5
3. test the api
   - python app.py on a terminal
   - in another terminal, curl -X POST -H "Content-Type: application/json" -d '{"query": "search query", "k": k}' http://localhost:5000/api/search
   - e.g. curl -X POST -H "Content-Type: application/json" -d '{"query": "climate change", "k": 5}' http://localhost:5000/api/search
   - 


