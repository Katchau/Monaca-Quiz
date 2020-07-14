import * as firebase from "firebase/app";
// firebase plugins and utilities imports goes here
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// firebase init goes here
const firebaseConfig = {
    apiKey: "AIzaSyDi12gl0FBff9JihCAekYeaH-SwxyEQFec",
    authDomain: "fir-m-7abf4.firebaseapp.com",
    databaseURL: "https://fir-m-7abf4.firebaseio.com",
    projectId: "fir-m-7abf4",
    storageBucket: "fir-m-7abf4.appspot.com",
    messagingSenderId: "483137997326",
    appId: "1:483137997326:web:8af4ccbaf140dcf0bbca5f",
    measurementId: "G-GLFZMQ67D0"
};
firebase.initializeApp(firebaseConfig);

// firebase utils
const db = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();

// These are optional parameters you can export to make it faster to access later on the app
// const currentUser = auth.currentUser
// firebase collections
// const usersCollection = db.collection('todos')
// you can add other things depending on what you are doing

export {
    auth,
    db,
    storage
}
