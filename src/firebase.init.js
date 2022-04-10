// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJIDQfXeycYrSl_6x7Yng7zLyOpMiB5wc",
    authDomain: "ema-john-simple-ea9e5.firebaseapp.com",
    projectId: "ema-john-simple-ea9e5",
    storageBucket: "ema-john-simple-ea9e5.appspot.com",
    messagingSenderId: "907395523602",
    appId: "1:907395523602:web:d314dd72cc40f31c0f24cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;