// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Antd from 'ant-design-vue'
import store from './store'

import './assets/style.css'
// import './assets/style1.css'
// import './assets/main.css'
// import './assets/bootstrap.min.css'
import 'ant-design-vue/dist/antd.css'

import vuescroll from 'vuescroll/dist/vuescroll-slide';
import 'vuescroll/dist/vuescroll.css';

Vue.use(vuescroll);
// import './assets/style1.css'
Vue.config.productionTip = false
Vue.use(Antd)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
