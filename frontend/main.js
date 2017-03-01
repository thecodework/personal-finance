import Vue from 'vue'
import Category from './Components/Categories.vue'
import Account from './Components/Accounts.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)



 // const routes=[
 //     {path : '/' , component : Category},
 //     {path : '/category',component : Category},
 //     {path : '/account', component : Account}
 // ]

 const router = new VueRouter({
    mode : 'history' ,
    routes : [
        {path : '/' , component : Category},
        //{path : '/category',component : Category},
        {path : '/account', component : Account}
    ]

})

new Vue({
    el: '#mainContainer',
    router,
    mounted() {
        console.log('mounted')
    }
    
  //  components: { Category, Account }
})