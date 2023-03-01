// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDAad2dGeuraqq4MiaxhvdwzXzoxdfsxBU",
  authDomain: "coffee-deliver.firebaseapp.com",
  projectId: "coffee-deliver",
  storageBucket: "coffee-deliver.appspot.com",
  messagingSenderId: "571727603275",
  appId: "1:571727603275:web:087a28e7b1377457148fce",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
