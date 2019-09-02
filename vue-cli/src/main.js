import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 脚手架引入方式---此处样式和组件分离开来  详细见官网
import './element'
import './style/index.scss'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
