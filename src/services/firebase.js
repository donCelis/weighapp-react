import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAPIINCjq9_UJeWry3v4MWN6fESu9HLa5A",
  authDomain: "weigh-app.firebaseapp.com",
  databaseURL: "https://weigh-app.firebaseio.com",
  projectId: "weigh-app",
  storageBucket: "weigh-app.appspot.com",
  messagingSenderId: "52806352856",
  appId: "1:52806352856:web:c8ed965182c5b3ab443cad",
};

const db = firebase.initializeApp(config);
const dbEstore = db.firestore();
const dbAuth = db.auth;


