# StudyFriend Chrome Browser Extension

## Overview

StudyFriend is a browser extension under the Intelligent Browsing theme intended to scrape and index queries on TED. A user can search for a topic in the extension and be presented with links of related content. Important links can be bookmarked for quick access. This will streamline the process for students searching for material by eliminating the need to search and research on each site.

There are 3 major parts to the tool: a web scraper, a search and index function, and a front-end web interface.

## Implementation

The process of building the extension takes multiple steps, both leveraging frontend and backend capabilities. The design is as follows

![flow.png](course_deliverables%2Fflow.png)

### Tools and Tech Stack
- Chrome Extension for web
- [Beautiful Soup](https://pypi.org/project/beautifulsoup4/) for scraping
- [Universal Sentence Encoder](https://www.tensorflow.org/hub/tutorials/semantic_similarity_with_tf_hub_universal_encoder) for embedding
- [Faiss](https://github.com/facebookresearch/faiss/wiki) for indexing and search
- [Firebase](https://docs.flutter.dev/data-and-backend/firebase) for bookmarks database
- Javascript, Node.js, HTML, CSS for frontend coding 
- Python, Flask for backend coding

## How To Use

### 1. Download and Setup Steps

- Install Google Chrome browser
- Clone the repository:
    - `git clone https://github.com/yejinzai/CS410_project`

- Install Python
- Open a terminal window in the project folder and execute:
    - `pip install -r requirements.txt`
    - `npm install firebase`


### 2. Run Servers

- Open a terminal window in the project folder and execute:
  - `flask run`


### 3. (Optional) Install the Extension in Google Chrome

- In a Chrome browser, go to `chrome://extensions/`
- Enable Developer Mode using the toggle switch
- Click on "Load Unpacked" and select the directory where you downloaded this GitHub repository
- Access the extension from the extension bar in Chrome

### 4. Use the Web Interface

- From the project folder, open `index.html` in the Chrome browser
- Enter a search term


## Relevant Documentation for Reviewers
- [Project Proposal](course_deliverables%2FProjectProposal.pdf)
- [Progress Report](course_deliverables%2FProgressReport.pdf)
- [Final Documentation](course_deliverables%2FFinal%20Documentation.pdf)
- [Study Friend Overview and Demonstration](course_deliverables%2FStudy%20Friend%20Demonstration.mp4)