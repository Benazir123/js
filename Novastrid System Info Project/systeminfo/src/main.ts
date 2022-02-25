import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import SmartTable from 'vuejs-smart-table'


import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

createApp(App).use(router).use(SmartTable).mount('#app')
