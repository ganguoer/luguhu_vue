import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/Index'
import charm from '@/components/charm/charm'  //魅力泸沽湖
import charmVR from '@/components/charm/charmVR'
import latestInformation from '@/components/latestInformation/latestInformation'
import newslaste from '@/components/latestInformation/newslaste'
import soptdeysmic from '@/components/latestInformation/spotdeysmic'
import picturenews from '@/components/latestInformation/picturenews'
import konwnperson from '@/components/latestInformation/konwnperson'
import newsdetail from '@/components/latestInformation/newsdetail'
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
    {
      path:'/latestInformation',
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
    }
    // {
    //   path: '/footer',
    //   name: 'footer',
    //   component: footer
    // }
  ]
})
