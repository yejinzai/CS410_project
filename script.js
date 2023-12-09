
// From save_bookmark.js  Firebase configration:

// Import the functions you need from the SDKs you need
console.log('firebase init from firebase_save_video.js');

// Import the functions you need from the SDKs you need
// import from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
// import "https://www.gstatic.com/firebasejs/7.17.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCg0i7ODbz1V4hFgXfXNukHg2JiBEonbNU",
    authDomain: "cs410groupproject-a5f71.firebaseapp.com",
    projectId: "cs410groupproject-a5f71",
    storageBucket: "cs410groupproject-a5f71.appspot.com",
    messagingSenderId: "811032205033",
    appId: "1:811032205033:web:03a209fb639d1be4cd8278"
};





// function - add bookmark
function addBookmarkToFirestore(article) {
    return new Promise((resolve, reject) => {
        console.log("here");
        docRef.add(article).then(() => {
            resolve(true);
            console.log('successfuly add to firestore');
        }).catch((error) => {
            console.log('error message: ', error.message);
        });
    });
}

// // Modified function -- to my actural data to be bookmarked
// function addBookmarkToFirestore(article) {
//     return new Promise((resolve, reject) => {
//         const bookmarkData = {
//             Title: article.querySelector('.bookmark-title').innerHTML,
//             Url: article.querySelector('.bookmark-url').href,
//             Description: article.querySelector('.bookmark-description').innerHTML,
//         };

//         docRef.add(bookmarkData).then(() => {
//             resolve(true);
//             console.log('successfully added to Firestore');
//         }).catch((error) => {
//             console.log('error message: ', error.message);
//         });
//     });
// }





function performSearch() {
    // Get the search term from the input field
    var searchTerm = document.getElementById("searchInput").value;
    const resultElement = document.getElementById('result');
  //   var dummy = [
  // {
  //   "Title": "8 Businesses That Immediately Regretted Their Decisions",
  //   "Url": "http://archive.is/S8mBk",
  //   "Description": "1) Decca Records didn't sign The Beatles; 2) Excite not partnering w/ Google; 3) M&M's turn down ET; 4) NBC/CBS rejecting NFL Monday; 5) AOL/TW merger; 6) Coca Cola changing flavor in 1985; 7) JCPenney dropping sales; 8) Borders' plans"
  // },
  // {
  //   "Title": "Is it true that periods synchronise when women live together?",
  //   "Url": "http://archive.is/fU6Aq",
  //   "Description": "No, any perceived synchronisation is just random chance"
  // },
  // {
  //   "Title": "Steve Carell Just Got Everyone\u2019s Hopes Up About \"The Office\" Returning To NBC",
  //   "Url": "http://archive.is/cwsfC",
  //   "Description": "It's not. (he later said it was a typo, and that he meant \"Will and Grace\" [Buzzfeed]"
  // },
  // {
  //   "Title": "'I looked at it, and it was moving': Worm in woman's eye leads to unique discovery",
  //   "Url": "http://archive.today/pCGu6",
  //   "Description": "What was really exciting is that it is a new species that has never infected people before. It's a cattle worm that somehow jumped into a human."
  // },
  // {
  //   "Title": "SNL host Kieran Culkin reveals he totally dissed a cast member when he was on the show as a kid",
  //   "Url": "http://web.archive.org/web/20211107130928/https://ew.com/tv/kieran-culkin-dissed-snl-cast-member-when-on-the-show-as-a-child/",
  //   "Description": "told Kevin Nealon he was his 2nd fave - Dana Carvey was his top fave"
  // },
  // {
  //   "Title": "It appears Taylor Swift made a brief appearance in 13 Reasons Why",
  //   "Url": "https://web.archive.org/web/20170620090433/http://www.digitalspy.com/tv/13-reasons-why/news/a831213/taylor-swift-13-reasons-why-1989-cameo/",
  //   "Description": "A drawing of the 1989 album cover art appears in the background of a scene"
  // }];

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
        // .then(data => {
        //     const parsedData = JSON.parse(data);  // not neccery
        .then(parsedData => {
            //Christine's debug
            //createBookmarkElements(dummy).then((response)=>{

            var resultsContainer = document.getElementById('results');
            resultsContainer.innerHTML = '';

            // var resultElement = document.querySelector('results');
            // if (resultElement !== null) {
            //     resultElement.innerHTML = ' ';
            // }
            //TODO: add bookmark
            //TODO: paging
            //TODO: generalized code of sharon's and this page to address code duplication
            createBookmarkElements(parsedData).then((elements)=>{
              if (elements && elements.length > 0) {
                var addBookmarkButton = document.querySelector('.add-bookmark-button');
                if (addBookmarkButton) {
                  addBookmarkButton.innerHTML = '';
                }
              }
            });
          })
         
       .catch(error => {
            console.error('Fetch error:', error);
        });


         //db access
         const firestore = firebase.firestore();
         let userID = 'localtest';
         async function addBookmark() {
             let docRef = await firestore.collection('users').doc(userID).collection('bookmarks');
         
             // ... rest of your code that involves using 'await'
         }
         
         // Call the async function
         addBookmark();

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
    let bookmarkButtonDiv = document.createElement('div')
    bookmarkButtonDiv.classList.add('bookmark-button-div')

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

    //bookmark-button
    let bookmarkButton = document.createElement('button');
    if (bookmarkButton) {
        bookmarkButton.classList.add('bookmark-button');
        bookmarkButton.innerHTML = 'Add Bookmark'; // Change this to the desired text/content
    }

    let addBookmarkButtons = document.querySelectorAll('.add-bookmark-button');
    let articleList = document.querySelectorAll('.article'); // TODO - change the value to the actual list

    // button event listeners
    addBookmarkButtons.forEach((addBookmarkButton)=>{
      addBookmarkButton.addEventListener("click", ()=>{
          let buttonId = addBookmarkButton.id;
          let articleIndex = buttonId.charAt(buttonId.length-1)-1;
          // Make sure the index is within the valid range
        if (articleIndex >= 0 && articleIndex < articleList.length) {
            let bookmark = articleList[articleIndex];
          addBookmarkToFirestore(bookmark).then(()=>{ 
              let successMessage = document.createElement('p');
              successMessage.innerHTML = "Bookmarks added Successfully!";
              addBookmarkButton.after(successMessage);
          });
         } else {
            console.error("Invalid article index");
        }
    });
})

    //TODO: add bookmark
    // <button className="add-bookmark-button" id="add-bookmark-2">Add Bookmark</button>

        //append
        bookmarkTitleDiv.appendChild(title);
        bookmarkUrlDiv.appendChild(url);
        boookmarkDescriptionDiv.appendChild(description);
        bookmarkButtonDiv.appendChild(bookmarkButton)

        bookmarkDiv.appendChild(bookmarkTitleDiv);
        bookmarkDiv.appendChild(bookmarkUrlDiv);
        bookmarkDiv.appendChild(boookmarkDescriptionDiv);
        bookmarkDiv.appendChild(bookmarkButtonDiv);


        return bookmarkDiv;       

}