import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCm8IyzGT7jhmwzDqeXw82FA5cZyzPy7uI",
  authDomain: "bdaulanative.firebaseapp.com",
  projectId: "bdaulanative",
  storageBucket: "bdaulanative.firebasestorage.app",
  messagingSenderId: "908600537054",
  appId: "1:908600537054:web:fb01d6696831e58753774f",
  measurementId: "G-K7XXLQ7VXD"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
//const analytics = getAnalytics(app);