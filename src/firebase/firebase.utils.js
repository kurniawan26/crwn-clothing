import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJToZG8kxbqUHFe4NSfWOm8_E7Dp8D0OU",
  authDomain: "crwn-db-d396b.firebaseapp.com",
  projectId: "crwn-db-d396b",
  storageBucket: "crwn-db-d396b.appspot.com",
  messagingSenderId: "408861068214",
  appId: "1:408861068214:web:f06fcc1d9826b86f708f17",
  measurementId: "G-2C8K9CBBC0",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const auth = getAuth();
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ params: "select_account" });
export const signInWithGoogle = () => signInWithPopup(auth, provider);
