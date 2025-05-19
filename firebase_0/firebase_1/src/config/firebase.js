// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuG2wei3Pe_lMCLEu-f-uRZN4IGMUu42A",
  authDomain: "dae-demo-57835.firebaseapp.com",
  projectId: "dae-demo-57835",
  storageBucket: "dae-demo-57835.firebasestorage.app",
  messagingSenderId: "389435743325",
  appId: "1:389435743325:web:c163279c0bc20db9a641b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)