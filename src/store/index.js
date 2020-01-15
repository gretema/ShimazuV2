import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import $ from "jquery";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    isLoading: false,
    products: [],
    pagination: {},
    tempProduct: {}, // 在 Modal 中的商品資訊
    isNew: false // 先預設為 false
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
    },
    EDITPRODUCT(state, { isNew, item }) {
      if (isNew) {
        state.tempProduct = {};
        state.isNew = true;
      } else {
        // 把點選到的商品資訊 assign 給 Modal 顯示
        state.tempProduct = Object.assign({}, item);
        state.isNew = false;
      }
      $("#productModal").modal("show");
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
    },
    openModal(context, { isNew, item }) {
      context.commit("EDITPRODUCT", { isNew, item });
    }
  },
  modules: {}
});
