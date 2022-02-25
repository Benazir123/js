// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAJ33pXrboltF0rpklK9ofEnpZt_cpHkA8",
    authDomain: "vue-firebase-crud-app-fb10a.firebaseapp.com",
    projectId: "vue-firebase-crud-app-fb10a",
    storageBucket: "vue-firebase-crud-app-fb10a.appspot.com",
    messagingSenderId: "396232212448",
    appId: "1:396232212448:web:52b3185c170e5256dfb585",
    measurementId: "G-Z61H13E6X2"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore()
