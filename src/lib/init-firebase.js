// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const key = process.env.REACT_APP_FIREBASE_KEY;
const firebaseConfig = {
  apiKey: `${key}`,
  authDomain: "learn-firebase-29d0b.firebaseapp.com",
  projectId: "learn-firebase-29d0b",
  storageBucket: "learn-firebase-29d0b.appspot.com",
  messagingSenderId: "445828180358",
  appId: "1:445828180358:web:f93b5f8bcac67acd802407",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Inıtialize Firestore
export const db = getFirestore(app);
