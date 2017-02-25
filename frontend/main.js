import Vue from 'vue'
import Category from './Components/Categories.vue'
import Account from './Components/Accounts.vue'

new Vue({
    el: '#mainContainer',
    mounted() {
        console.log('mounted')
    },
    components: { Category, Account }

})