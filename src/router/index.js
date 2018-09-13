import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/Index'
import charm from '@/components/charm/charm'  //魅力泸沽湖
import charmVR from '@/components/charm/charmVR'

import tourism from '@/components/tourism/tourism'  //旅游攻略

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/charm',
      name: 'charm',
      component: charm
    },
    {
      path: '/charmVR',
      name: 'charmVR',
      component: charmVR
    },
    {
      path: '/tourism',
      name: 'tourism',
      component: tourism
    },
    // {
    //   path: '/footer',
    //   name: 'footer',
    //   component: footer
    // }
  ]
})
