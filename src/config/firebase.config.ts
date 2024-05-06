// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDLTop2YKGoLRipXQ-QMi0U_d9F_nTNgU8",
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
