import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

import dashProducts from "./dashProducts";
import Coupons from "./coupons";
import CustomerProducts from "./cusProducts";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    cart: {
      carts: []
    }
  },
  mutations: {
    LOADING(state, status) {
      state.isLoading = status;
    },
    CART(state, payload) {
      state.cart = payload;
    }
  },
  actions: {
    updateLoading(context, status) {
      context.commit("LOADING", status);
    },
    getCart(context) {
      context.commit("LOADING", true);
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      axios.get(url).then(response => {
        if (response.data.data.carts) {
          context.commit("CART", response.data.data);
        }
        context.commit("LOADING", false);
        console.log("取得購物車", response.data.data);
      });
    },
    removeCart(context, id) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`;
      context.commit("LOADING", true);
      axios.delete(url).then(response => {
        context.commit("LOADING", false);
        context.dispatch("getCart");
        console.log("刪除購物車項目", response);
      });
    },
    addtoCart(context, { id, qty }) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      context.commit("LOADING", true);
      const item = {
        product_id: id,
        qty
      };
      axios.post(url, { data: item }).then(response => {
        context.commit("LOADING", false);
        context.dispatch("getCart");
        console.log("加入購物車:", response);
      });
    }
  },
  modules: {
    dashProducts,
    Coupons,
    CustomerProducts
  }
});
