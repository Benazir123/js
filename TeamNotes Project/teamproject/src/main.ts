import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();

import './css/tailwind.css'
import gAuthPlugin from 'vue3-google-oauth2';
const gauthClientId = "1088670528535-mfm1nbil4fgn3fmd7pvl10vf252br8n8.apps.googleusercontent.com"


library.add(fas);
library.add(fab);
library.add(far);
createApp(App).use(store).component("font-awesome-icon", FontAwesomeIcon).use(router).use(gAuthPlugin, { clientId: gauthClientId, scope: 'email', prompt: 'consent', fetch_basic_profile: false }).mount("#app");



import firebase from 'firebase'
// import * as firebase from "firebase";      
const firebaseConfig = {
    apiKey: "AIzaSyCU80XvP36ulT89ymxru5-gfnCO9O_A_yo",
    authDomain: "vue-firebase-84d53.firebaseapp.com",
    projectId: "vue-firebase-84d53",
    storageBucket: "vue-firebase-84d53.appspot.com",
    messagingSenderId: "318687648527",
    appId: "1:318687648527:web:a5208034e7d207d34f7c7a",
    measurementId: "G-MVX2JFJJXB"
  };

  firebase.initializeApp(firebaseConfig);

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
