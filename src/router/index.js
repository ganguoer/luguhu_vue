import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/Index'
import charm from '@/components/charm/charm'  //魅力泸沽湖
import charmVR from '@/components/charm/charmVR'

import tourism from '@/components/tourism/tourism'  //旅游攻略
import tourism_s from '@/components/tourism/tourism_s'  //旅游攻略二级页面
import eating_s from '@/components/tourism/eating_s'  //吃 二级页面
import shopping_s from '@/components/tourism/shopping_s'  //购物 二级页面
import line_s from '@/components/tourism/line_s'  //线路 二级页面
import travel_s from '@/components/tourism/travel_s'  //旅游 二级页面

import scenic_s from '@/components/scenicIntroduction/scenic_s'  //景区介绍二级页面


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/charm',   //魅力泸沽湖
      name: 'charm',
      component: charm
    },
    {
      path: '/charmVR',
      name: 'charmVR',
      component: charmVR
    },
    {
      path: '/tourism',  //旅游攻略
      name: 'tourism',
      component: tourism
    },
    {
      path: '/tourism_s',
      name: 'tourism_s',
      component: tourism_s
    },
    {
      path: '/eating_s',
      name: 'eating_s',
      component: eating_s
    },
    {
      path: '/shopping_s',
      name: 'shopping_s',
      component: shopping_s
    },
    {
      path: '/line_s',
      name: 'line_s',
      component: line_s
    },
    {
      path: '/travel_s',
      name: 'travel_s',
      component: travel_s
    },
    {
      path: '/scenic_s',  //景区介绍
      name: 'scenic_s',
      component: scenic_s
    },
    // {
    //   path: '/footer',
    //   name: 'footer',
    //   component: footer
    // }
  ]
})
