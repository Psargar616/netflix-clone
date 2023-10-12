// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-RRVtAQo9Bp5DXidX3vCHrZEv5VAoCKA",
  authDomain: "netflix-clone-a41a8.firebaseapp.com",
  projectId: "netflix-clone-a41a8",
  storageBucket: "netflix-clone-a41a8.appspot.com",
  messagingSenderId: "651775888098",
  appId: "1:651775888098:web:c5be5b9409f96b69342cbb",
  measurementId: "G-R3M3YY3TY8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
// Initialize Firebase Authentication and get a reference to the service
const auth = firebase.auth();


const db = getFirestore(app);

export  {auth}
export default db;