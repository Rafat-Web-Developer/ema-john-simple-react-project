// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCz9k5KYnt7k1OgortbnQY5ys6mhfGsVYU",
  authDomain: "ema-john-simple-faeb6.firebaseapp.com",
  projectId: "ema-john-simple-faeb6",
  storageBucket: "ema-john-simple-faeb6.appspot.com",
  messagingSenderId: "767573493375",
  appId: "1:767573493375:web:24e401355801f8408ae14a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
