import HelloWorld from '../components/HelloWorld.vue'
import Login from '../components/Login.vue'

export const routes = [
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
]