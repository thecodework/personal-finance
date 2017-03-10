import Vue from 'vue'
import Category from './Components/Categories.vue'
import Account from './Components/Accounts.vue'
import Expense from './Components/Expense.vue'
import Dashboard from './Components/Dashboard.vue'
import VueRouter from 'vue-router'
import jquery from 'jquery'
window.jQuery = jquery
var $ = jquery
window.$ = jquery
import 'semantic-ui-css/semantic.css'
import 'semantic-ui-css/semantic.js'
Vue.use(VueRouter)


 const router = new VueRouter({
    mode : 'history' ,
    routes : [
        {path: '/', component: Dashboard},
        {path : '/expense' , component : Expense},
        {path : '/account', component : Account},
        {path : '/category', component : Category}
    ]
})

new Vue({
    el: '#mainContainer',
   router,
    mounted() {
    }
//   / components: { Category, Account }
})