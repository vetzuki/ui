import Vue from 'vue'
import Router from 'vue-router'
import NewUser from '@/views/NewUser.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'NewUser',
      component: NewUser,
    },
  ]
})
/*

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
*/

export default router