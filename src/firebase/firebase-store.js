import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    doc,
    updateDoc,
    arrayUnion,
    arrayRemove,
    deleteDoc,
    query,
    orderBy,
  } from 'firebase/firestore';
  import { app, db, auth } from './firebase-config.js';
  

function createPost(text, idUser){
 const docRef = await addDoc(collection(db, "posts"), {
  texto: text,
  uid: idUser
 });
}