import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBysTUbGw8fEDVSqK1cvNWZMwo2zkSUpRg",
  authDomain: "aadyaventures-15e61.firebaseapp.com",
  projectId: "aadyaventures-15e61",
  storageBucket: "aadyaventures-15e61.appspot.com",
  messagingSenderId: "179309954582",
  appId: "1:179309954582:web:93566c250a5d1043549737",
  measurementId: "G-8FPWTS551Y"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const auth = firebase.auth()
const db = firebase.firestore();
export { firebase, storage, db, auth };