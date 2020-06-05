/** @format */

import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyBe0og6X-o8bikmHn5QXOUow5wCu5FUO3Q",
    authDomain: "web-chat-app-7ead6.firebaseapp.com",
    databaseURL: "https://web-chat-app-7ead6.firebaseio.com",
    projectId: "web-chat-app-7ead6",
    storageBucket: "web-chat-app-7ead6.appspot.com",
    messagingSenderId: "148064658063",
    appId: "1:148064658063:web:951ab520a8e0ceec8a06fa",
    measurementId: "G-5N7C6W6SNC"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth;

export default firebase;
