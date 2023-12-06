function performSearch() {
    // Get the search term from the input field
    var searchTerm = document.getElementById("searchInput").value;
    const resultElement = document.getElementById('result');
    var dummy = [
  {
    "Title": "8 Businesses That Immediately Regretted Their Decisions",
    "Url": "http://archive.is/S8mBk",
    "Description": "1) Decca Records didn't sign The Beatles; 2) Excite not partnering w/ Google; 3) M&M's turn down ET; 4) NBC/CBS rejecting NFL Monday; 5) AOL/TW merger; 6) Coca Cola changing flavor in 1985; 7) JCPenney dropping sales; 8) Borders' plans"
  },
  {
    "Title": "Is it true that periods synchronise when women live together?",
    "Url": "http://archive.is/fU6Aq",
    "Description": "No, any perceived synchronisation is just random chance"
  },
  {
    "Title": "Steve Carell Just Got Everyone\u2019s Hopes Up About \"The Office\" Returning To NBC",
    "Url": "http://archive.is/cwsfC",
    "Description": "It's not. (he later said it was a typo, and that he meant \"Will and Grace\" [Buzzfeed]"
  },
  {
    "Title": "'I looked at it, and it was moving': Worm in woman's eye leads to unique discovery",
    "Url": "http://archive.today/pCGu6",
    "Description": "What was really exciting is that it is a new species that has never infected people before. It's a cattle worm that somehow jumped into a human."
  },
  {
    "Title": "SNL host Kieran Culkin reveals he totally dissed a cast member when he was on the show as a kid",
    "Url": "http://web.archive.org/web/20211107130928/https://ew.com/tv/kieran-culkin-dissed-snl-cast-member-when-on-the-show-as-a-child/",
    "Description": "told Kevin Nealon he was his 2nd fave - Dana Carvey was his top fave"
  },
  {
    "Title": "It appears Taylor Swift made a brief appearance in 13 Reasons Why",
    "Url": "https://web.archive.org/web/20170620090433/http://www.digitalspy.com/tv/13-reasons-why/news/a831213/taylor-swift-13-reasons-why-1989-cameo/",
    "Description": "A drawing of the 1989 album cover art appears in the background of a scene"
  }];

    fetch(`http://localhost:5000/test/search?searchTerm=${searchTerm}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: searchTerm,
            k:5,
        }),
    })
        .then(response => response.json())
        .then(data => {
            const parsedData = JSON.parse(data);

            //Christine's debug
            //createBookmarkElements(dummy).then((response)=>{

            var resultsContainer = document.getElementById('results');
            resultsContainer.innerHTML = '';
            //TODO: add bookmark
            //TODO: paging
            //TODO: generalized code of sharon's and this page to address code duplication
            createBookmarkElements(parsedData).then((response)=>{
            if (response) {
            }
});
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
}

function createBookmarkElements(bookmarks){
    bookmarks.forEach((bookmark)=>{
        let bookmarkElement = createBookmarkElement(bookmark);
        var resultsContainer = document.getElementById('results');
        resultsContainer.appendChild(bookmarkElement);
    });
    return new Promise((resolve, reject) => {
        resolve(true);
    });
}

function createBookmarkElement(bookmark){
    //div
    let bookmarkDiv = document.createElement('div');
    bookmarkDiv.classList.add('bookmark-div');
    let bookmarkTitleDiv = document.createElement('div');
    bookmarkTitleDiv.classList.add('bookmark-title-div');
    let bookmarkUrlDiv = document.createElement('div');
    bookmarkUrlDiv.classList.add('bookmark-url-div');
    let boookmarkDescriptionDiv = document.createElement('div');
    boookmarkDescriptionDiv.classList.add('bookmark-description-div');

    //title
    let title = document.createElement('p');
    title.classList.add('bookmark-title');
    title.innerHTML = bookmark.Title;

    //url
    let url = document.createElement('a');
    url.classList.add('bookmark-url');
    url.innerHTML = bookmark.Url;
    url.href = bookmark.Url;


    //description
    let description = document.createElement('p');
    description.classList.add('bookmark-url');
    description.innerHTML = bookmark.Description;

    //TODO: add bookmark
    // <button className="add-bookmark-button" id="add-bookmark-2">Add Bookmark</button>

    //append
    bookmarkTitleDiv.appendChild(title);
    bookmarkUrlDiv.appendChild(url);
    boookmarkDescriptionDiv.appendChild(description);

    bookmarkDiv.appendChild(bookmarkTitleDiv);
    bookmarkDiv.appendChild(bookmarkUrlDiv);
    bookmarkDiv.appendChild(boookmarkDescriptionDiv);

    return bookmarkDiv;

}