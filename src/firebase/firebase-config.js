import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// eslint-disable-next-line import/no-unresolved
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAV6Ne5cuZqdugVhDFr-amJLB84rDBwdpo',
  authDomain: 'fithub-woman.firebaseapp.com',
  databaseURL: 'https://fithub-woman-default-rtdb.firebaseio.com',
  projectId: 'fithub-woman',
  storageBucket: 'fithub-woman.appspot.com',
  messagingSenderId: '382606711960',
  appId: '1:382606711960:web:6107df72002b098b9e84ed',
  measurementId: 'G-0YP87ZPXKG',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
