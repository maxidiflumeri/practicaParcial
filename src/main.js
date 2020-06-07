import Vue from 'vue'
import App from './App.vue'

import './bootstrap'
import './httpClient'
import './forms'
import './filters'
import store from './store'
import router from './routes'


Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
