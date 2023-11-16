// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsfNl_qs9ZCyUNtbpS7i1Wn5FCb2VX6g8",
  authDomain: "netflix-react-009.firebaseapp.com",
  projectId: "netflix-react-009",
  storageBucket: "netflix-react-009.appspot.com",
  messagingSenderId: "232063022413",
  appId: "1:232063022413:web:e7f796a4a2e45a137fb304"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

