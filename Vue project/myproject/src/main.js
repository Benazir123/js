import { createApp } from "vue";
import App from "./App.vue";
import router from './router'
import axios from 'axios'
// import VueAxios from 'vue-axios'

// Vue.use(VueAxios, axios)

//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';

createApp(App).use(router).use(axios).mount("#app");
