// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMCu4UnRsR0mugmU9POio7HoQE1NuzRLI",
  authDomain: "gb-04072022.firebaseapp.com",
  projectId: "gb-04072022",
  storageBucket: "gb-04072022.appspot.com",
  messagingSenderId: "514894522505",
  appId: "1:514894522505:web:0f3737ed5346201e673e58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const signUp = async (email, pass) => 
await createUserWithEmailAndPassword (auth, email, pass);

export const logIn = async (email, pass) => 
await signInWithEmailAndPassword (auth, email, pass);

export const logOut = async () => 
await logOut(auth);