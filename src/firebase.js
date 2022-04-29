// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase";
import firebase from "firebase/compat/app"
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDITtwAjHyg7BTh4Z4FF0n4d1XONsnDFlQ",
    authDomain: "linkedin-clone-alexleebizz.firebaseapp.com",
    projectId: "linkedin-clone-alexleebizz",
    storageBucket: "linkedin-clone-alexleebizz.appspot.com",
    messagingSenderId: "424895536064",
    appId: "1:424895536064:web:2f68ce5469dc3e9d2c4625",
    measurementId: "G-J4PCBYB1RE"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };