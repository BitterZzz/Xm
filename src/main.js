import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import utils from './utils'
import LyTab from 'ly-tab'


Vue.config.productionTip = false;
Vue.use(utils);
Vue.use(LyTab);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
