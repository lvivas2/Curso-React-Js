// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5LwYAnQbbxBNi-QMJQxUYdlTIHqeORFc",
  authDomain: "gyo-ecommerce.firebaseapp.com",
  projectId: "gyo-ecommerce",
  storageBucket: "gyo-ecommerce.appspot.com",
  messagingSenderId: "415401773583",
  appId: "1:415401773583:web:37ca00a2e881ed9cb8317a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db;