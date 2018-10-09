import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import About from '@/views/About'
import Iscroll from '@/views/Iscroll'
import MintUI from '@/views/MintUI'
import Aboutleft from '@/components/About_left'
import Aboutright from '@/components/About_right'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/about',
      name: 'About',
      component: About,
      children: [
        {
          path: 'about_left',
          component: Aboutleft
        },
        {
          path: 'about_right',
          component: Aboutright
        }
      ]
    },
    {
      path: '/iscroll',
      name: 'Iscroll',
      component: Iscroll
    },
    {
      path: '/mintui',
      name: 'MintUI',
      component: MintUI
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
