import { createRouter, createWebHistory } from 'vue-router'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import TaskList from '../pages/TaskList.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: TaskList  // Remplacement de Home par TaskList
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
  