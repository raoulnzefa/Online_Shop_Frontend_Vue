
let login = require('./components/auth/login.vue').default;

// Employee Component
let storeemployee = require('./components/employee/create').default;
let employee = require('./components/employee/index').default;
let editemployee = require('./components/employee/edit').default;

// Contract Component
let storecontract = require('./components/contract/create').default;
let contract = require('./components/contract/index').default;
let editcontract = require('./components/contract/edit').default;
let viewcontract = require('./components/contract/view').default;



export const routes = [
    { path: '/', component: login, name: '/' },

    // Employee Routes
    { path: '/store-employee', component: storeemployee, name: 'store-employee' },
    { path: '/employee', component: employee, name: 'employee' },
    { path: '/edit-employee/:id', component: editemployee, name: 'edit-employee' },

    // Contract Routes
    { path: '/store-contract', component: storecontract, name: 'store-contract' },
    { path: '/contract', component: contract, name: 'contract' },
    { path: '/edit-contract/:id', component: editcontract, name: 'edit-contract' },
    { path: '/view-contract/:id', component: viewcontract, name: 'view-contract' },



]