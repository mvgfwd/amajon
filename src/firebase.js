import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAgSssv7mKqoI0VX3KiDkoEUpe2luRI4Mk",
  authDomain: "clone-51952.firebaseapp.com",
  projectId: "clone-51952",
  storageBucket: "clone-51952.appspot.com",
  messagingSenderId: "976472185276",
  appId: "1:976472185276:web:ffe51a0171893a807cb3b9",
  measurementId: "G-HN2PHE4F5E",
};

const firebaseApplication = firebase.initializeApp(firebaseConfig);

const database = firebaseApplication.firestore();

const otentikasi = firebase.auth();

export { database, otentikasi };
