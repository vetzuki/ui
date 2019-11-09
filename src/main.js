import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { domain, clientID, audience } from "../auth_config.json"
import Auth0Plugin from './authPlugin'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

Vue.use(Auth0Plugin, {
  domain,
  clientID,
  audience,
  onRedirectCallback: (appState) => {
    router.push(
      appState && appState.targetUrl ? appState.targetUrl
      : window.location.pathname
    )
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
