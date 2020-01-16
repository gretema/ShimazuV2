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
    },
    messages: []
  },
  mutations: {
    LOADING(state, status) {
      state.isLoading = status;
    },
    CART(state, payload) {
      state.cart = payload;
    },
    MESSAGE(state, { message, status }) {
      const timestamp = Math.floor(new Date() / 1000);
      state.messages.push({
        message,
        status,
        timestamp
      });
    },
    REMOVEMESSAGE(state, num) {
      state.messages.splice(num, 1);
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
    },
    updateMessage(context, { message, status }) {
      context.commit("MESSAGE", { message, status });
      context.dispatch("removeMessageWithTiming", context.state.timestamp);
    },
    removeMessageWithTiming(context, timestamp) {
      setTimeout(() => {
        context.state.messages.forEach((item, i) => {
          if (item.timestamp === timestamp) {
            context.state.messages.splice(i, 1);
          }
        });
      }, 5000);
    },
    removeMessage(context, num) {
      context.dispatch("REMOVEMESSAGE", num);
    }
  },
  modules: {
    dashProducts,
    Coupons,
    CustomerProducts
  }
});
