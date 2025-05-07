// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";

// Import ONLY the specific Auth functions you will use, and do it ONCE
import {
    getAuth,
    signInWithEmailAndPassword,
    signInWithCustomToken, // If you need this
    onAuthStateChanged,
    signOut // If you need this
    // Add other methods like createUserWithEmailAndPassword, etc. here if needed
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js"; // Make sure the path matches your app import

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDuG2wei3Pe_lMCLEu-f-uRZN4IGMUu42A",
    authDomain: "dae-demo-57835.firebaseapp.com",
    projectId: "dae-demo-57835",
    storageBucket: "dae-demo-57835.firebasestorage.app",
    messagingSenderId: "389435743325",
    appId: "1:389435743325:web:c163279c0bc20db9a641b4"
};

// Initialize Firebase (do this once)
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference (do this once)
const auth = getAuth(app);

// --- Set up the Auth State Listener (runs when script loads and on state changes) ---
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in.
        console.log("Auth State Changed: User is signed in:", user.uid);
        // Update your UI to show logged-in content
        // For example, hide login forms, show a welcome message, etc.
        // You can access user.email, user.displayName, user.photoURL, etc.
    } else {
        // User is signed out.
        console.log("Auth State Changed: User is signed out.");
        // Update your UI to show logged-out content
        // For example, show login forms, hide protected content, etc.
    }
});

// --- Define functions for specific user actions (called by button clicks, form submissions, etc.) ---

// Example: Function to handle email/password sign-in
function handleEmailSignIn(email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in successfully
            const user = userCredential.user;
            console.log("Email Sign In successful:", user.email);
            // onAuthStateChanged will also fire shortly after this
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Email Sign In error:", errorCode, errorMessage);
            // Display an error message to the user
        });
}

// Example: Function to handle custom token sign-in (assuming you get the token from your backend)
function handleCustomTokenSignIn(customToken) {
     signInWithCustomToken(auth, customToken)
        .then((userCredential) => {
            // Signed in successfully with custom token
            const user = userCredential.user;
            console.log("Custom Token Sign In successful:", user.uid);
            // onAuthStateChanged will also fire shortly after this
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Custom Token Sign In error:", errorCode, errorMessage);
            // Display an error message to the user
        });
}


// Example: Function to handle sign-out
function handleSignOut() {
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log("Sign Out successful.");
        // onAuthStateChanged will also fire shortly after this
    }).catch((error) => {
        // An error happened.
        console.error("Sign Out error:", error);
        // Display an error message to the user
    });
}