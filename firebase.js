import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDZrqMpmhTucMUNcjtCRRiMzqP2z753OpU",
    authDomain: "twiiter-f0418.firebaseapp.com",
    projectId: "twiiter-f0418",
    storageBucket: "twiiter-f0418.appspot.com",
    messagingSenderId: "133770125168",
    appId: "1:133770125168:web:bf9a7c12fc12cb750eb9b5",
    measurementId: "G-03TG8MG9X7"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };