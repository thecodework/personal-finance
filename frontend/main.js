import Vue from 'vue'
import Category from './Components/Categories.vue';

new Vue({
    el: '#mainContainer',
    mounted() {
        console.log('mounted')
    },
    components: { Category }
})