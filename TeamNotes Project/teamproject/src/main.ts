import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

createApp(App).use(store).component("font-awesome-icon", FontAwesomeIcon).use(router).mount("#app");

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
