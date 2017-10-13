import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Manager from '@/pages/manager'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/manager',
      name: 'manager',
      component: Manager
    }
  ]
})
