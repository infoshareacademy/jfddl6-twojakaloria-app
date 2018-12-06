import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyBPOo4tQ3HPZCAVu2SYpi3DQKV_bKZmox4",
    authDomain: "twoja-kaloria.firebaseapp.com",
    databaseURL: "https://twoja-kaloria.firebaseio.com",
    projectId: "twoja-kaloria",
    storageBucket: "twoja-kaloria.appspot.com",
    messagingSenderId: "903630807410"
};
firebase.initializeApp(config);

export const database = firebase.database()
export const auth = firebase.auth()
export const googleProvider = new firebase.auth.GoogleAuthProvider()