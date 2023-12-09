How To Use StudyFriend Chrome browser extension

1.  Download and setup steps
    Install Google Chrome browser 
    git clone https://github.com/yejinzai/CS410_project 
    Install Python
    Open a terminal window in the project folder and execute:
        pip install -r requirements.txt
        Npm install firebase
        npm install -g live-server

2. Run servers:
    open two terminal windows in the project folder and execute one of these commands in each one:
        flask run
           note: if flask run is not successful, you may also use
            python app.py
        live-server . 
             note: if this command causes an error about scripts being disabled, run a terminal as administrator and then execute: Set-ExecutionPolicy Unrestricted

3. Install the extension in your Google Chrome:
    In a Chrome browser, go to chrome://extensions/
    enable Developer Mode using the toggle switch
    click on "Load Unpacked" and select the directory where you downloaded this Github repo

4. Use the web interface 
    From the project folder, open index.html in the Chrome browser
    enter a search term


