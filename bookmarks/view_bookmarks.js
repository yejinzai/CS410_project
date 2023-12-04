// Import the functions you need from the SDKs you need
console.log('firebase init');

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
let docRef = await firestore.collection('users').doc(userID).collection('bookmarks');

////////
let bookmarkSection = document.querySelector('#bookmarks');


//get bookmarks
function getBookmarksFromFirestore() {
    return new Promise((resolve, reject) => {
        docRef.get().then((results) => {
            let bookmarks = [];
            results.forEach((doc) => {
                bookmarks.push({
                    Title: doc.data().Title,
                    Url: doc.data().Url,
                    Description: doc.data().Description
                });
            });
            console.log("bookmarks:", bookmarks);
            resolve(bookmarks);
        });
    });
}
getBookmarksFromFirestore();
