import Vue from 'vue'
import Example from './Components/Example.vue';

new Vue({
    el: '#mainContainer',
    mounted() {
        console.log('mounted')
    },
    components: { Example }
})