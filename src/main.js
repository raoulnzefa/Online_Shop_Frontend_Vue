import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import axios from 'axios'
Vue.prototype.$axios = axios

axios.defaults.withCredentials = true;


// import VueNoty from 'vuejs-noty'
// Vue.use(VueNoty)



import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(VueSweetalert2);


import pagination from 'laravel-vue-pagination'
Vue.component('pagination', pagination)


import {routes} from './routes'

const router = new VueRouter({
  routes,
  mode: "history"
})

// Import Notification Class
import Notification from "@/assets/Notification"
window.Notification = Notification

// Import fortawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faFileContract, faPlusSquare} from '@fortawesome/free-solid-svg-icons'
library.add(faFileContract, faPlusSquare)
Vue.component('font-awesome-icon', FontAwesomeIcon)




Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)

}).$mount('#app')
