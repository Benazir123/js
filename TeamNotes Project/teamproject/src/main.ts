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
import GAuth from 'vue3-google-oauth2';
const gAuth = { clientId: '1088670528535-mfm1nbil4fgn3fmd7pvl10vf252br8n8.apps.googleusercontent.com', scope: 'email', prompt: 'consent', fetch_basic_profile: false }

library.add(fas);
library.add(fab);
library.add(far);
createApp(App).use(store).component("font-awesome-icon", FontAwesomeIcon).use(router).use(GAuth, gAuth).mount("#app");

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
