import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAOyMYjill4J9TmsD3wNqdW2LFkei1XSGE",
    authDomain: "clone-c8809.firebaseapp.com",
    projectId: "clone-c8809",
    storageBucket: "clone-c8809.appspot.com",
    messagingSenderId: "868843533255",
    appId: "1:868843533255:web:d43bb37e51af637ae79fe2",
    measurementId: "G-E3VKR8GSTL"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};