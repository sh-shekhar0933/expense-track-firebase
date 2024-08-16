// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTfO9o3fIKjwh-9t4iAOeQCQ6P1UY0S5E",
  authDomain: "expense-track-901b3.firebaseapp.com",
  projectId: "expense-track-901b3",
  storageBucket: "expense-track-901b3.appspot.com",
  messagingSenderId: "780865920575",
  appId: "1:780865920575:web:459f622eb5b3821220628a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);