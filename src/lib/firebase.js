// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNvCYC8s8vBxmkO4iNjwb5pQhc8OEmquU",
  authDomain: "felion-website.firebaseapp.com",
  databaseURL: "https://felion-website.firebaseio.com",
  projectId: "felion-website",
  storageBucket: "felion-website.appspot.com",
  messagingSenderId: "651582048062",
  appId: "1:651582048062:web:529efad52d39f6bf308e6f",
  measurementId: "G-LFV09HXMP0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);