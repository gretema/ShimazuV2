import Vue from "vue";
import axios from "axios"; // 主要的 AJAX 套件
import VueAxios from "vue-axios"; // 將它轉為 Vue 的套件
import "bootstrap";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import {
  ValidationObserver,
  ValidationProvider,
  extend,
  localize
} from "vee-validate";
// 將驗證條件引入
import * as rules from "vee-validate/dist/rules";
// 引入中文化的文件
import tw from "vee-validate/dist/locale/zh_TW.json";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import currencyFilter from "./filters/currencyFilter.js";
import dateFilter from "./filters/date.js";

Vue.config.productionTip = false;

Vue.use(VueAxios, axios); // 執行 axios
Vue.component("Loading", Loading); // 全域啟用 vue-loading-overlay
// 註冊 vee-validate 全域元件
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
localize("zh_TW", tw);

Vue.filter("currency", currencyFilter); // 全域啟用 Filter
Vue.filter("date", dateFilter);

// 將所有驗證條件加入 extend
Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule], // copies rule configuration
    message: tw[rule] // assign message
  });
});

axios.defaults.withCredentials = true;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_APIPATH}/api/user/check`;
    axios.post(api).then(response => {
      if (response.data.success) {
        next(); // 登入成功：前往指定路徑
      } else {
        next({
          path: "/signin" // 登入失敗：導向登入頁
        });
      }
    });
  } else {
    next();
  }
});
