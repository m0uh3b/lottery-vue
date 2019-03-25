/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import web3 from './web3'

console.log(web3.version)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
