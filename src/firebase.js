// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqpXbdWAOi323ORWoJm7OQ2YDI3i3rRGo",
  authDomain: "mern-estate-c0ceb.firebaseapp.com",
  projectId: "mern-estate-c0ceb",
  storageBucket: "mern-estate-c0ceb.appspot.com",
  messagingSenderId: "565630542250",
  appId: "1:565630542250:web:61607e2ef94327a14bcbd3",
  measurementId: "G-XWS6W04L3V",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
