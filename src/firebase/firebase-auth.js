import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
// eslint-disable-next-line import/named
import { auth } from './firebase-config.js';

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function newRegister(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

// eslint-disable-next-line max-len
// export const newUser = async (email, password) => createUserWithEmailAndPassword(auth, email, password)
//   .then(async (userCredential) => {
//     const user = userCredential.user;
//     await updateProfile(user, { displayName: nickname });
//   });

// export const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

// export const googleLogin = () => {
//   const provider = new GoogleAuthProvider();
//   return signInWithPopup(auth, provider);
// };

// export const logOut = () => signOut(auth);
