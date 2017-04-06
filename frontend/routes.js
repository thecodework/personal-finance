import Tabs from './Components/Tabs.vue'
import Daily from './Components/Daily.vue'
import Weekly from './Components/Weekly.vue'
import Monthly from './Components/Monthly.vue'
import Total from './Components/Total.vue'
import Calendar from './Components/Calendar.vue'
import Accounts from './Components/Accounts.vue'

import Dashboard from './Components/Dashboard.vue'
import Login from './Components/Login.vue'
import Register from './Components/Register.vue'
import about from './Components/about.vue'
export default [{
    path: '/',
    components: Tabs,
    tabs: [{
        path: '/calendar/',
        tabId: 'calendar',
        component: Accounts
    }, {
        path: '/daily/',
        tabId: 'daily',
        component: Daily
    }, {
        path: '/weekly/',
        tabId: 'weekly',
        component: Weekly
    },{
        path: '/monthly/',
        tabId: 'monthly',
        component: Monthly
    },{
        path: '/total/',
        tabId: 'total',
        component: Total
    },{
    path: '/about',
    tabId: 'about',
    component: about
    }]
},

    
 {
    path: '/login',
    component: Login
}, {
    path: '/register',
    component: Register
}, {
    path: '/dashborad',
    component: Dashboard
}]
