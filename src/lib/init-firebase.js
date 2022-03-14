// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const key = process.env.REACT_APP_FIREBASE_KEY;
const appid = process.env.REACT_APP_FIREBASE_APPID;
const authdomain = process.env.REACT_APP_FIREBASE_AUTHDOMAIN;
// const projectid = process.env.REACT_APP_FIREBASE_PROJECTID;
const storagebucket = process.env.REACT_APP_FIREBASE_STORAGEBUCKET;
const messagingsenderid = process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID;
const firebaseConfig = {
  apiKey: `${key}`,
  authDomain: `${authdomain}`,
  projectId: "learn-firebase-29d0b",
  storageBucket: `${storagebucket}`,
  messagingSenderId: `${messagingsenderid}`,
  appId: `${appid}`,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Inıtialize Firestore
export const db = getFirestore(app);
