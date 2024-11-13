// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYN0vh61JysonAwDWBBTAoOq0WBsXA92o",
  authDomain: "ai-wanderlust.firebaseapp.com",
  projectId: "ai-wanderlust",
  storageBucket: "ai-wanderlust.firebasestorage.app",
  messagingSenderId: "260456123946",
  appId: "1:260456123946:web:9608d32525aee44ca13d53",
  measurementId: "G-T9DNRN4RLD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);