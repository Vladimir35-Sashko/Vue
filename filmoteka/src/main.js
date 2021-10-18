import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './sass/main.scss'
import _ from 'lodash'
Vue.prototype._ = _

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
