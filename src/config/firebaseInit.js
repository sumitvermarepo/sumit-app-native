/** @format */

import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyADt6Cun3Zn4B-5s1nJHQx7UKJCDKjyHnI",
  authDomain: "steward-d89fe.firebaseapp.com",
  databaseURL: "https://steward-d89fe.firebaseio.com",
  projectId: "steward-d89fe",
  storageBucket: "steward-d89fe.appspot.com",
  messagingSenderId: "169115731242",
  appId: "1:169115731242:web:ecbd15bc4fa93c69180a53",
  measurementId: "G-S6NFJYKVM2",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth;

export default firebase;
