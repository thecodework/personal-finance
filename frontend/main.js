import Vue from 'vue'
import Category from './Components/Categories.vue';
import Account from './components/Accounts.vue'

new Vue({
    el: '#mainContainer',
    mounted() {
        console.log('mounted')
    },
    components: { Category , Account}

})

// new Vue({
//     el: '#addAccount',
//     mounted() {
//         console.log('mounted')
//     },
//     components: { Account }

// })