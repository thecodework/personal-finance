import Tabs from './Components/Tabs.vue'
import Welcome from './Components/Welcome.vue'
import Category from './Components/Categories.vue'
import Account from './Components/Accounts.vue'
import Expense from './Components/Expense.vue'
import Dashboard from './Components/Dashboard.vue'
import Login from './Components/Login.vue'
import Register from './Components/Register.vue'
export default [{
    path: '/',
    components: Tabs,
    tabs: [{
        path: '/account/',
        tab: 'tab1',
        component: Account
    }, {
        path: '/expense/',
        tab: 'tab2',
        component: Expense
    },{
        path: '/category/',
        tab: 'tab3',
        component: Category
    }]
}, {
    path: '/login',
    component: Login
}, {
    path: '/register',
    component: Register
}, {
    path: '/dashborad',
    component: Dashboard
}]