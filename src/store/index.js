import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    isLoading: false,
    products: [],
    pagination: {}
  },
  mutations: {
    LOADING(state, status) {
      state.isLoading = status;
    },
    DASHPRODUCTS(state, payload) {
      state.products = payload;
    },
    PAGINATION(state, payload) {
      state.pagination = payload;
    }
  },
  actions: {
    updateLoading(context, status) {
      context.commit("LOADING", status);
    },
    // 後台的產品列表
    getProducts(context, page) {
      // 該 API 透過分頁切換而取得產品列表
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/products?page=${page}`;
      // 開啟 loading
      context.commit("LOADING", true);
      axios.get(api).then(response => {
        // 關閉 loading
        context.commit("LOADING", false);
        // 存到陣列裡
        context.commit("DASHPRODUCTS", response.data.products);
        context.commit("PAGINATION", response.data.pagination);

        console.log(response.data);
      });
    }
  },
  modules: {}
});
