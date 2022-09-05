import Vue from 'vue'
import VueRouter from 'vue-router'
import AboutView from '../views/aboutView.vue'
import HomeView from '../views/HomeView.vue'
import macanegra from '../views/macanegra.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/macanegra',
    name: 'about',
    component: macanegra
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router



