import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import ChatRoom from '@/components/ChatRoom'
import SiteMap from '@/components/SiteMap'
import LogIn from '@/components/LogIn'
import SignUp from '@/components/SignUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SiteMap',
      component: SiteMap
    },
    {
      path: '/chatroom',
      name: 'ChatRoom',
      component: ChatRoom
    },
    {
      path: '/login',
      name: 'LogIn',
      component: LogIn
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    }
  ]
})
