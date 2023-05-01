import { createContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signOut, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAvtpZ3GrqJtCFWwV886jYRf-auKgJw9JQ",
    authDomain: "cse4234-5234.firebaseapp.com",
    projectId: "cse4234-5234",
    storageBucket: "cse4234-5234.appspot.com",
    messagingSenderId: "480566440924",
    appId: "1:480566440924:web:208a368908c9c019109519",
    measurementId: "G-EFB9BVWLL3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithEmail = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((user_credential) => console.log('SIGNED IN EMAIL'))
    .catch((err) =>console.log(err));
}

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((user_credential) => console.log('SIGNED IN GOOGLE'))
    .catch((err) =>console.log(err));;
}

export const signOutUser = () => {
    signOut(auth)
    .then(() => console.log('SIGN OUT'))
    .catch((err) => console.log(err));
}

export const UserContext = createContext(null);
export const UserIDContext = createContext(null);