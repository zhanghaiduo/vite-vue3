import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home.vue'

const routesModules = import.meta.globEager('../views/**/*.js')
const modules = []
Object.keys(routesModules).forEach((key) => {
  modules.push(...routesModules[key].default)
})
console.log('modules: ', modules)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  ...modules
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router
