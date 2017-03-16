import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
// Import F7
import Framework7 from 'framework7'
// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue'
// Import F7 iOS Theme Styles
// import Framework7Theme from 'framework7/dist/css/framework7.ios.min.css'
// import Framework7ThemeColors from 'framework7/dist/css/framework7.ios.colors.min.css'
/* OR for Material Theme: */
import Framework7Theme from 'framework7/dist/css/framework7.material.min.css'
import Framework7ThemeColors from 'framework7/dist/css/framework7.material.colors.min.css'
import 'framework7-icons/css/framework7-icons.css'
// import 'semantic-ui-css/semantic.css'
// import 'semantic-ui-css/semantic.js'
Vue.use(VueRouter)
Vue.use(Framework7Vue)
// const router = new VueRouter({
//     mode: 'history',
//     routes: Routes
// })
new Vue({
    el: '#mainContainer',
    template: '<App/>',
    // router,
    framework7: {
        root: '#mainContainer',
        /* Uncomment to enable Material theme: */
        material: true,
        routes: Routes,
        animateNavBackIcon: true,
        pushState: true,
        pushStateSeparator: '',
        // swipePanel: 'left',
        onPageInit: function() {
            //console.log('hi')
        }
    },
    mounted() {},
    components: { App }
})