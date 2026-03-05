// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKBPL5_H1esqIKQKkHKiZG0lFxlSus0o8",
  authDomain: "scorelive-pro-3b232.firebaseapp.com",
  projectId: "scorelive-pro-3b232",
  storageBucket: "scorelive-pro-3b232.firebasestorage.app",
  messagingSenderId: "535624184239",
  appId: "1:535624184239:web:c951148bae38736ccc7f5a",
  measurementId: "G-GTDSBQRCX8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
