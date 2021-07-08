import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

// import VueNoty from 'vuejs-noty'
// Vue.use(VueNoty)


Vue.use(VueRouter)

import {routes} from './routes'

const router = new VueRouter({
  routes,
  mode: "history"
})

// Import Notification Class
import Notification from "@/assets/Notification"
window.Notification = Notification

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)

}).$mount('#app')
