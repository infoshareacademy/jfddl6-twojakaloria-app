import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyBPOo4tQ3HPZCAVu2SYpi3DQKV_bKZmox4",
    authDomain: "twoja-kaloria.firebaseapp.com",
    databaseURL: "https://twoja-kaloria.firebaseio.com",
    projectId: "twoja-kaloria",
    storageBucket: "twoja-kaloria.appspot.com",
    messagingSenderId: "903630807410"
};

const firebaseApp = firebase.initializeApp(config);
export const database = firebaseApp.database();