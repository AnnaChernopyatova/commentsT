import Vue from 'vue'
import VueRouter from 'vue-router'
import { createHashHistory } from 'vue-router'
import App from '../App'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: App
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
