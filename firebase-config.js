import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAGfUnonODTqoFn0Iimf2UTeFE-dj2lb-g",
  authDomain: "beast-chat-66bda.firebaseapp.com",
  projectId: "beast-chat-66bda",
  storageBucket: "beast-chat-66bda.appspot.com",
  messagingSenderId: "771220849014",
  appId: "1:771220849014:web:afcb5ecef408d9be0e3a57",
  measurementId: "G-6TME0W8S84",
  databaseURL: "https://beast-chat-66bda-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();