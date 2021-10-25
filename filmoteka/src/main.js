import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import store from './vuex/store'
import './sass/main.scss'
import _ from 'lodash'
Vue.prototype._ = _

Vue.config.productionTip = false

new Vue({
  // router,

  render: h => h(App),
  store
}).$mount('#app')
