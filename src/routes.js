
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

// Customer Component
let storecustomer = require('./components/customer/create').default;
let customer = require('./components/customer/index').default;
let editcustomer = require('./components/customer/edit').default;

// Supplier Component
let storesupplier = require('./components/supplier/create').default;
let supplier = require('./components/supplier/index').default;
let editsupplier = require('./components/supplier/edit').default;

// Product Component
let storeproduct = require('./components/product/create').default;
let product = require('./components/product/index').default;
let editproduct = require('./components/product/edit').default;


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

    // Customer Routes
    { path: '/store-customer', component: storecustomer, name: 'store-customer' },
    { path: '/customer', component: customer, name: 'customer' },
    { path: '/edit-customer/:id', component: editcustomer, name: 'edit-customer' },

    // Supplier Routes
    { path: '/store-supplier', component: storesupplier, name: 'store-supplier' },
    { path: '/supplier', component: supplier, name: 'supplier' },
    { path: '/edit-supplier/:id', component: editsupplier, name: 'edit-supplier' },

    // Product Routes
    { path: '/store-product', component: storeproduct, name: 'store-product' },
    { path: '/product', component: product, name: 'product' },
    { path: '/edit-product/:id', component: editproduct, name: 'edit-product' },



]