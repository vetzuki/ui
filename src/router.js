import Vue from 'vue'
import Router from 'vue-router'
import NewUser from '@/views/NewUser.vue'
import Settings from '@/views/Settings.vue'
import Candidates from '@/views/Candidates.vue'
import NewScreening from '@/views/NewScreening.vue'
import Signup from '@/views/Signup.vue'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'NewUser',
      component: NewUser,
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings,
    },
    {
      path: '/candidates',
      name: 'Candidates',
      component: Candidates,
    },
    {
      path: '/screening',
      name: 'NewScreening',
      component: NewScreening,
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup,
    }
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