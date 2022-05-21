/* eslint-disable */
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSOoVnA33TCTaEg15NdiiQnuXrmc4Q3ls",
  authDomain: "todolta.firebaseapp.com",
  projectId: "todolta",
  storageBucket: "todolta.appspot.com",
  messagingSenderId: "540832732862",
  appId: "1:540832732862:web:f991d5b54ea81a241d30ef",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
