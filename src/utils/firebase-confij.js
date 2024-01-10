// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDArLMddtTbY7uboeIHzWJHBZY4yRbQILY",
  authDomain: "netflix-9d973.firebaseapp.com",
  projectId: "netflix-9d973",
  storageBucket: "netflix-9d973.appspot.com",
  messagingSenderId: "567784306598",
  appId: "1:567784306598:web:579a97ab028b61fe0ec167"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth= getAuth(app);