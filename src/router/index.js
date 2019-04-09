import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/Index'   //首页
import charm from '@/components/charm/charm'  //魅力泸沽湖
import charmlist from '@/components/charm/charmlist'  //魅力泸沽湖
import charmVR from '@/components/charm/charmVR'

import latestInformation from '@/components/latestInformation/latestInformation'  //泸沽湖资讯
import newslaste from '@/components/latestInformation/newslaste'
import soptdeysmic from '@/components/latestInformation/spotdeysmic'
import picturenews from '@/components/latestInformation/picturenews'
import konwnperson from '@/components/latestInformation/konwnperson'
import newsdetail from '@/components/latestInformation/newsdetail'

import tourism from '@/components/tourism/tourism'  //旅游攻略
import tourism_s from '@/components/tourism/tourism_s'  //旅游攻略二级页面
import eating from '@/components/tourism/eating'  //吃 一级页面
import eating_s from '@/components/tourism/eating_s'  //吃 二级页面
import shopping from '@/components/tourism/shopping'  //购物 一级页面
import shopping_s from '@/components/tourism/shopping_s'  //购物 二级页面
import line_s from '@/components/tourism/line_s'  //线路 二级页面
import travel_s from '@/components/tourism/travel_s'  //旅游 二级页面
import walk_s from '@/components/tourism/walk_s'  //旅游 二级页面
import living from '@/components/tourism/living'  //住 一级页面
import living_s from '@/components/tourism/living_s'  //住 二级页面

import scenic from '@/components/scenicIntroduction/scenic'  //景区介绍页面
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
      path: '/charmlist',   //魅力泸沽湖
      name: 'charmlist',
      component: charmlist
    },
    {
      path: '/charmVR',
      name: 'charmVR',
      component: charmVR
    },
    {
      path:'/latestInformation',  //泸沽湖资讯
      name:'latestInformation',
      component:latestInformation,
      redirect: '/newszixun',
      children:[
        {
          path:'/newszixun',
          component:newslaste
        },
        {
          path:'/soptdeysmic',
          component:soptdeysmic
        },
        {
          path:'/picturenews',
          component:picturenews
        },
        {
          path:'/konwnperson',
          component:konwnperson
        },
        {
          path:'/newsdetail',
          component:newsdetail
        }
      ]
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
      path: '/eating',
      name: 'eating',
      component: eating
    },
    {
      path: '/eating_s',
      name: 'eating_s',
      component: eating_s
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: shopping
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
      path: '/walk_s',
      name: 'walk_s',
      component: walk_s
    },
    {
      path: '/living',
      name: 'living',
      component: living
    },
    {
      path: '/living_s',
      name: 'living_s',
      component: living_s
    },
    {
      path: '/scenic',  //景区介绍
      name: 'scenic',
      component: scenic
    },
    {
      path: '/scenic_s',  //景区介绍二级页面
      name: 'scenic_s',
      component: scenic_s
    }

  ]
})
