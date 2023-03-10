// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrFpC4EfO_qMnroOoZueD3gWxeyBNN008",
  authDomain: "stack-mern-fb27b.firebaseapp.com",
  projectId: "stack-mern-fb27b",
  storageBucket: "stack-mern-fb27b.appspot.com",
  messagingSenderId: "961995418490",
  appId: "1:961995418490:web:3ba2165485cf7a988384c3",
  measurementId: "G-RP36E7FYHG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);