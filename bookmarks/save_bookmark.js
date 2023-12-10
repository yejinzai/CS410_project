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

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Test Authenticaiton  
let test_email = "cs410testaccount@gmail.com";
let test_password = "cs410testaccountpassword";

firebase.auth().signInWithEmailAndPassword(test_email, test_password)
    .then(function (result) {
        console.log('user signed in');
    }).catch(function (error) {
        console.log(error.code + ":" + error.message);
    });
console.log('firebases init success');


//db access
const firestore = firebase.firestore();
let userID = 'localtest';


//function - add bookmark

/*
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
*/

//button event listeners
function addBookmarkButtonEventListener(){
    addBookmarkButtons = document.querySelectorAll('.add-bookmark-button');

    addBookmarkButtons.forEach((addBookmarkButton)=>{
        addBookmarkButton.addEventListener("click", ()=>{
            
            let buttonId = addBookmarkButton.id;
            let articleIndex = buttonId.charAt(buttonId.length-1);
            let bookmark = articleList[articleIndex];

            let addBookmarkAction = addBookmarkToFirestore(bookmark).then(()=>{
                let successMessage = document.createElement('p');
                successMessage.innerHTML = "Added to Bookmarks";
                addBookmarkButton.after(successMessage);
            });

        });
    });
}

async function addBookmarkToFirestore(article){
    let item = await firestore.collection('users').doc(userID).collection('bookmarks').add(article);
    return item;
}