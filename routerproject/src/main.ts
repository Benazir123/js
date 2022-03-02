import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import SmartTable from 'vuejs-smart-table'
// import * as _vue from 'vue';
// import VTable from "vuejs-smart-table"

// .use(VTable)
import gAuthPlugin from 'vue3-google-oauth2';
const gauthClientId = "1088670528535-mfm1nbil4fgn3fmd7pvl10vf252br8n8.apps.googleusercontent.com"

createApp(App).use(router).use(SmartTable).use(gAuthPlugin, { clientId: gauthClientId, scope: 'email', prompt: 'consent', fetch_basic_profile: false }).mount("#app");

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
