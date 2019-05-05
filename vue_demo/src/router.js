import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      component: () => import(/* webpackChunkName: "Login" */ '@/views/Login.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "Login" */ '@/views/Login.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import(/* webpackChunkName: "Home" */ '@/views/Home.vue')
    },
    {
      path: '/MyCharts',
      name: 'mycharts',
      component: () => import(/* webpackChunkName: "MyCharts" */ '@/views/MyCharts.vue')
    }
  ]
})
