import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'login',
  },
  {
    path: '/perfil',
    name: 'perfil',
    component: () => import(/* webpackChunkName: "profile" */ '@/modules/profile/adapters/views/ProfileUser.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
