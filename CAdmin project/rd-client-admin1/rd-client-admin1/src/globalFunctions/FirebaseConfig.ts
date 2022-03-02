import store from '@/store';
import firebase from 'firebase/app';
import 'firebase/database'; // for authentication
import Helper from './Helper';

let connection: firebase.app.App;
const db = {
  connectFirebase: connectFirebase(),
  disconnectFirebase: () => {
    try {
      connection.delete();
    } catch (error) {
      console.log('disconnectFirebase Error', error);
    }
  },
  getFirebaseDB: () => {
    try {
      if (firebase.apps.length === 0) {
        connectFirebase();
      }
      return connection.database();
    } catch (error) {
      connectFirebase();
      return connection.database();
    }
  },
};

function connectFirebase() {
  try {
    var firebaseConfig: any;
    firebaseConfig = Helper.getFirebaseData();
    if (firebaseConfig.apiKey) {
      connection = firebase.initializeApp(firebaseConfig);
    }
  } catch (error) {
    if (firebaseConfig && firebaseConfig.apiKey) {
      console.log('connectFirebase Error', error);
      connection.delete();
    }
  }
}
export default db;
