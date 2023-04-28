
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBIkFOj0dGbIc1pyyfPFgkw95Ejy0fdY5M",
  authDomain: "coderhouse-39625.firebaseapp.com",
  projectId: "coderhouse-39625",
  storageBucket: "coderhouse-39625.appspot.com",
  messagingSenderId: "763462871098",
  appId: "1:763462871098:web:bfd694806a0c0967abad03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);