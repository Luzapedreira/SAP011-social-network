import { initializeApp } from 'firebase/app';

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
