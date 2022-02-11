import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import store from "./store";
import SmartTable from 'vuejs-smart-table'
// import * as _vue from 'vue';
// import VTable from  'vuejs-smart-table'

// use(VTable)

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"


createApp(App).use(router).use(SmartTable).mount("#app");
