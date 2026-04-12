// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCm-a4gRVoZ2WcrTILplN8impySQiUVDpE",
  authDomain: "netflix-clone-4b77b.firebaseapp.com",
  projectId: "netflix-clone-4b77b",
  storageBucket: "netflix-clone-4b77b.firebasestorage.app",
  messagingSenderId: "752601541397",
  appId: "1:752601541397:web:1c76ac0cc1a4aacb92971c",
  measurementId: "G-1Q1RBRX136"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
