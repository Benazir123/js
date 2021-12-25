import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

createApp(App).use(router).mount("#app");

// Vue.config.productionTip = false
 
// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')