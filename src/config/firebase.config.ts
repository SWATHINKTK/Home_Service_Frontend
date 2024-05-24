// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "home-service-6fcc7.firebaseapp.com",
    projectId: "home-service-6fcc7",
    storageBucket: "home-service-6fcc7.appspot.com",
    messagingSenderId: "1020053114573",
    appId: "1:1020053114573:web:11c4fb2ea72930cd9c6384",
    measurementId: "G-TTPP8626ZR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
