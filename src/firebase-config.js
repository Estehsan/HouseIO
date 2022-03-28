// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBq_uSuqQ5PA6Eox4uYbF8jubp8YOWWd7c",
  authDomain: "homemarketplace-af299.firebaseapp.com",
  projectId: "homemarketplace-af299",
  storageBucket: "homemarketplace-af299.appspot.com",
  messagingSenderId: "696191835178",
  appId: "1:696191835178:web:3777631443571061107753",
  measurementId: "G-9GV4D1NTFK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = firestore();
