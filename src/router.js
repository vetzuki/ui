import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import PublicHome from '@/views/PublicHome.vue'
import Callback from '@/views/Callback.vue'
import Logout from '@/views/Logout.vue'
import About from '@/views/About.vue'
import Contact from '@/views/Contact.vue'
import { longStackSupport } from 'q'
import { isAbsolute } from 'path'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'publicHome',
      component: PublicHome,
    },
    {
      path: '/employer',
      name: 'employerHome',
      component: Home,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/callback',
      name: 'callback',
      component: Callback
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout,
    }
  ]
})

// very basic "setup" of a global guard
router.beforeEach((to, from, next) => {
  // Allow public access without authentication
  if(to.name == 'callback' || to.name === 'publicHome' || to.name === 'about' || to.name === 'contact') {
    next()
  } else if (router.app.$auth.isAuthenticated()) { // if authenticated allow access
    next()
  } else { // trigger auth0 login
    router.app.$auth.login()
  }
})

export default router