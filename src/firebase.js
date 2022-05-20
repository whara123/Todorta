// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
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

// eslint-disable-next-line no-undef
const auth = getAuth();

export const signupEmail = (email, password) => {
  // eslint-disable-next-line no-undef
  return createUserWithEmailAndPassword(auth, email, password);
};

export const loginEmail = (email, password) => {
  // eslint-disable-next-line no-undef
  return signInWithEmailAndPassword(auth, email, password);
};
