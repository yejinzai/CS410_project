// Import the functions you need from the SDKs you need
console.log('firebase init');

// Import the functions you need from the SDKs you need
//import { initializeApp } from 'firebase/app';
import 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
const firebaseApp = initializeApp(firebaseConfig);

// Test Authenticaiton  
let test_email = "cs410testaccount@gmail.com";
let test_password = "cs410testaccountpassword";
firebaseApp.auth().signInWithEmailAndPassword(test_email, test_password).then((userCredentials) => {
    user = userCredentials.user; 
    console.log('User signed in: ' + user.uid);
}).catch(function (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode + ":" + errorMessage);
});
console.log('firebases init success');


/*
const firestore = firebase.firestore();
let userID = 'localtest ';
let bookmarkDB = 'bookmarks';
let docRef = firestore.collection('users').doc(userID).collection(bookmarkDB);*/