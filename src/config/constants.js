var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');


const config = {
  apiKey: "AIzaSyDDOjrf5CGT7N4PshFvvNebGdFKM-aTNHk",
  authDomain: "login-react-54b57.firebaseapp.com",
  databaseURL: "https://login-react-54b57.firebaseio.com",
  projectId: "login-react-54b57",
  storageBucket: "login-react-54b57.appspot.com",
  messagingSenderId: "933495019839"
};

firebase.initializeApp(config);

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth