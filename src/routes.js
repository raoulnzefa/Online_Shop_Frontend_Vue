
let login = require('./components/auth/login.vue').default;

// Employee Component
let storeemployee = require('./components/employee/create.vue').default;


export const routes = [
    { path: '/', component: login, name: '/' },

    { path: '/store-employee', component: storeemployee, name: 'store-employee' }

]