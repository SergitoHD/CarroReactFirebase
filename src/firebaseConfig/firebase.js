import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAMqvhNiuolwf5r8Id392X0VC9P6ntdUbQ",
  authDomain: "carrito-6194b.firebaseapp.com",
  projectId: "carrito-6194b",
  storageBucket: "carrito-6194b.appspot.com",
  messagingSenderId: "792360312689",
  appId: "1:792360312689:web:ac22ad8125403f2d97a0d0",
  measurementId: "G-JESF19EQZP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
