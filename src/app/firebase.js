// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCzqyUT-WkhilaUcAoZxcW7fw9w1yvKJgI",
    authDomain: "supspizza.firebaseapp.com",
    projectId: "supspizza",
    storageBucket: "supspizza.appspot.com",
    messagingSenderId: "970275156308",
    appId: "1:970275156308:web:9761b392d50623b33798c1",
    measurementId: "G-FZWDQJE0TC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app)
export { storage }