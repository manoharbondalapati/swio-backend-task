// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGEg-TQ1pFwPt5N7zNSFXr3d5x3k179sQ",
  authDomain: "payments-796ab.firebaseapp.com",
  projectId: "payments-796ab",
  storageBucket: "payments-796ab.appspot.com",
  messagingSenderId: "669584773251",
  appId: "1:669584773251:web:358e07c1539dc86d86cbb6",
  databaseURL:"https://payments-796ab-default-rtdb.asia-southeast1.firebasedatabase.app/",
  measurementId: "G-TYZ8Q85TZN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getDatabase(app);