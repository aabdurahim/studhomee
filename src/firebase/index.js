import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB3BjQHsKcpWj9JyZerPwT7VXWoHL2KZiM",
  authDomain: "studhome-bfe69.firebaseapp.com",
  projectId: "studhome-bfe69",
  storageBucket: "studhome-bfe69.appspot.com",
  messagingSenderId: "637328458090",
  appId: "1:637328458090:web:3f869c9311566fe7892513"
};

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export { auth }
