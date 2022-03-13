// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const key = process.env.REACT_APP_FIREBASE_KEY;
const appid = process.env.REACT_APP_FIREBASE_APPID;
const firebaseConfig = {
  apiKey: `${key}`,
  authDomain: "learn-firebase-29d0b.firebaseapp.com",
  projectId: "learn-firebase-29d0b",
  storageBucket: "learn-firebase-29d0b.appspot.com",
  messagingSenderId: "445828180358",
  appId: `${appid}`,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Inıtialize Firestore
export const db = getFirestore(app);
