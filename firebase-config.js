// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHDrGhzGifqrbGknTk5KKH-drZz8MdLI0",
  authDomain: "asteroid-game-8338b.firebaseapp.com",
  projectId: "asteroid-game-8338b",
  storageBucket: "asteroid-game-8338b.firebasestorage.app",
  messagingSenderId: "633877731719",
  appId: "1:633877731719:web:5883d922c542b086d89b22",
  measurementId: "G-ZYB3B23284"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 