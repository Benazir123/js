import  * as firebase from 'firebase/app';
import 'firebase/firestore';
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAJ33pXrboltF0rpklK9ofEnpZt_cpHkA8",
    authDomain: "vue-firebase-crud-app-fb10a.firebaseapp.com",
    projectId: "vue-firebase-crud-app-fb10a",
    storageBucket: "vue-firebase-crud-app-fb10a.appspot.com",
    messagingSenderId: "396232212448",
    appId: "1:396232212448:web:52b3185c170e5256dfb585",
    measurementId: "G-Z61H13E6X2"
  };
  const app = initializeApp(firebaseConfig)


const firebaseApp = firebase.app
export const db = getFirestore(firebaseApp);
// export const db = firebaseApp.firestore()