// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYMLmVCVjUA3Nl0aKpU-Gz2iC4WrQsOx0",
  authDomain: "react-course-bd868.firebaseapp.com",
  projectId: "react-course-bd868",
  storageBucket: "react-course-bd868.appspot.com",
  messagingSenderId: "815986044238",
  appId: "1:815986044238:web:c73475908e5e13430c421f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()