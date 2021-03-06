import Vue from 'vue'
import App from './App.vue'
import router from './router'

require('./style/main.scss').default

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
