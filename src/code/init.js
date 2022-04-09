import firebaseConfig from './config';
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

/***************************************
 * Firebase
 **************************************/
// Initialiser Firebase
export const instanceFirebase = initializeApp(firebaseConfig);

/***************************************
 * Firebase Authentication
 **************************************/
// Initialiser Firebase Authentication
export const authFirebase = getAuth(instanceFirebase);
export const authGoogle = new GoogleAuthProvider();

// Initialiser l'authentification fédérée Google


/***************************************
 * Firestore
 ***************************************/
// Initialiser Firestore
export const bdFirestore = getFirestore();

