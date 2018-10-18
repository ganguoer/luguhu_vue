// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import '../static/css/common.css'
Vue.config.productionTip = false

// 配置请求并挂载 ，全局使用 this.axios
import Axios from 'axios';
// axios.defaults.baseURL = 'https://api.example.com';
// Axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// Axios.defaults.headers.post['Content-Type'] = "application/json";
Axios.defaults.headers["Content-Type"] = "application/json";
// Axios.defaults.headers["X-Requested-With"] = "XMLHttpRequest";

Vue.prototype.axios = Axios;

// 引入项目的全部接口文件 , 全局使用 this.config
import config from '../static/js/config'
Vue.prototype.config = config;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
