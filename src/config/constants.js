var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');


const config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};

firebase.initializeApp(config);

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth