// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";

import axios from "axios"; // 主要的 AJAX 套件
import VueAxios from "vue-axios"; // 將它轉為 Vue 的套件

import App from "./App";
import router from "./router";

Vue.use(VueAxios, axios); // 執行 axios

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
