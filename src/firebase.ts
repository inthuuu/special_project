import { Database } from './../node_modules/@firebase/database-types/index.d';
import firebase from 'firebase/app';
import "firebase/database";

let config = {
    apiKey: "AIzaSyDxuv0g1HkW30XXnayD1NydN2SdROo-CJ4",
    authDomain: "specialproject-311ad.firebaseapp.com",
    projectId: "specialproject-311ad",
    storageBucket: "specialproject-311ad.appspot.com",
    messagingSenderId: "560611933735",
    appId: "1:560611933735:web:3900de4d6edefe233a5802",
    measurementId: "G-Z1M4ETMV0P"
};

firebase.initializeApp(config);

export default firebase;