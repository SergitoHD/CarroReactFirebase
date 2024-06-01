import { getFirestore } from "firebase/firestore";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDUtOfI-uGLfmjZz3Yn2VM3-jDo5_zDYxs",
  authDomain:
    "[carritoej24-445ca.firebaseapp.com](http://carritoej24-445ca.firebaseapp.com/)",
  projectId: "carritoej24-445ca",
  storageBucket:
    "[carritoej24-445ca.appspot.com](http://carritoej24-445ca.appspot.com/)",
  messagingSenderId: "776860684027",
  appId: "1:776860684027:web:d3a108ea6e0a6584806a5e",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
