import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// index.htmlであたかじめ用意している#appのdivを、App.vueの内容でまるまる置き換える
new Vue({
  render: h => h(App),
}).$mount('#app')
