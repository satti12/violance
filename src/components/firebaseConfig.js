// src/firebaseConfig.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBSjY88nmSNlneLb5Rz26q101orwBEgsMw",
  authDomain: "finalyearproject-d0594.firebaseapp.com",
  projectId: "finalyearproject-d0594",
  storageBucket: "finalyearproject-d0594.appspot.com",
  messagingSenderId: "225155958875",
  appId: "1:225155958875:web:2f91635504b0afddbf577e"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();

export { db };
