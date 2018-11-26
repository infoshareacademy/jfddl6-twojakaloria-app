import firebase from 'firebase';
const config = {
  apiKey: "AIzaSyDfpec0txPvziSag-4x6IKtUVlFBmOW2Fk",
  authDomain: "poniedzialek-d7900.firebaseapp.com",
  databaseURL: "https://poniedzialek-d7900.firebaseio.com",
  projectId: "poniedzialek-d7900",
  storageBucket: "poniedzialek-d7900.appspot.com",
  messagingSenderId: "954889666979"
};

const firebaseApp = firebase.initializeApp(config);
export const database = firebaseApp.database();