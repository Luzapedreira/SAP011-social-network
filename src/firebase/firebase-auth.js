import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { auth } from './firebase-config.js';

export function login(email, password){
const auth = getAuth();
return signInWithEmailAndPassword(auth, email, password)
}

export function cadastrar(email, password){
const auth = getAuth();
return createUserWithEmailAndPassword(auth, email, password)
}
