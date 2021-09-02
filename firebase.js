import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCsKZA-M7BmIaFzFDASHQYAbVj4-CAjh-M",
    authDomain: "dirmes-97655.firebaseapp.com",
    projectId: "dirmes-97655",
    storageBucket: "dirmes-97655.appspot.com",
    messagingSenderId: "958234886324",
    appId: "1:958234886324:web:2ae533d82b41bd6988d7e1"
};

// protect app from reinitializing a second time
const app = !firebase.apps.length 
? firebase.initializeApp(firebaseConfig) 
: firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };