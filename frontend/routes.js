import Welcome from './Components/Welcome.vue'
import Category from './Components/Categories.vue'
import Account from './Components/Accounts.vue'
import Expense from './Components/Expense.vue'
import Dashboard from './Components/Dashboard.vue'
import Login from './Components/Login.vue'
import Register from './Components/Register.vue'
export default [{
    path: '/',
    components: Welcome
}, {
    path: '/login',
    component: Login
}, {
    path: '/register',
    component: Register
}, {
    path: '/dashborad',
    component: Dashboard
}, {
    path: '/expense',
    component: Expense
}, {
    path: '/account',
    component: Account
}, {
    path: '/category',
    component: Category
}]