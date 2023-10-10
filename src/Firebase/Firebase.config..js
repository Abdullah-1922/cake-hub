// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJR8EYtHz9DgMAeZhMaxf7Jj96llpLkt4",
  authDomain: "cakehub-a4cb8.firebaseapp.com",
  projectId: "cakehub-a4cb8",
  storageBucket: "cakehub-a4cb8.appspot.com",
  messagingSenderId: "367991978793",
  appId: "1:367991978793:web:68954392bd9307b90e9538"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth