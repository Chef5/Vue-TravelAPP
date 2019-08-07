import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home/home')
    },
    {
      path: '/city',
      name: 'city',
      component: () => import('@/views/city/city')
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('@/views/detail/detail')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
