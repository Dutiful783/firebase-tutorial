import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD1LLAj-1wtvpxLgDp2MiAvPvm8F9_iOK0",
  authDomain: "fir-tutorial-7f178.firebaseapp.com",
  projectId: "fir-tutorial-7f178",
  storageBucket: "fir-tutorial-7f178.appspot.com",
  messagingSenderId: "103023452140",
  appId: "1:103023452140:web:15c757386a7cecbf08aac9"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);