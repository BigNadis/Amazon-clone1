import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB3OF2NdeFX9jbievg9Kfr5zcvVX5kVP1w",
    authDomain: "clone-e0eec.firebaseapp.com",
    projectId: "clone-e0eec",
    storageBucket: "clone-e0eec.appspot.com",
    messagingSenderId: "748990340931",
    appId: "1:748990340931:web:e9bacb9e7232e13ecbd9f6",
    measurementId: "G-R5TVXTJTF1"
  }
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp); 
  
export { auth, db };