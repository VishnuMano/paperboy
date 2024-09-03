// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore" 

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBc095oA3J-zwBaWPNvfTS9QEl9pNxVbYk",
  authDomain: "paper-2e35c.firebaseapp.com",
  databaseURL: "https://paper-2e35c-default-rtdb.firebaseio.com",
  projectId: "paper-2e35c",
  storageBucket: "paper-2e35c.appspot.com",
  messagingSenderId: "1034166382078",
  appId: "1:1034166382078:web:1ffc6b40c556656da864af",
  measurementId: "G-CNME94NGWJ"
};

// Establishes connection between Local App and Firebase Project
const app = initializeApp(firebaseConfig);
// Establishes and exports connection between Local App and Firestore Database
export const db = getFirestore(app);