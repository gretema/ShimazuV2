import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import dashProducts from './dashProducts';
import Coupons from './coupons';
import CustomerProducts from './cusProducts';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    cart: {
      carts: [],
      total: '',
      final_total: '',
    },
    messages: [],
  },
  mutations: {
    LOADING(state, status) {
      state.isLoading = status;
    },
    CART(state, payload) {
      state.cart.carts = payload.carts;
      state.cart.total = payload.total;
      state.cart.final_total = payload.final_total;
    },
    MESSAGE(state, { message, status }) {
      const timestamp = Math.floor(new Date() / 1000);
      state.messages.push({
        message,
        status,
        timestamp,
      });
    },
    REMOVEMESSAGE(state, num) {
      state.messages.splice(num, 1);
    },
  },
  actions: {
    updateLoading(context, status) {
      context.commit('LOADING', status);
    },
    getCart(context) {
      context.commit('LOADING', true);
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      axios.get(url).then((response) => {
        if (response.data.data.carts) {
          context.commit('CART', response.data.data);
        }
        context.commit('LOADING', false);
      });
    },
    removeCart(context, id) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`;
      context.commit('LOADING', true);
      axios.delete(url).then(() => {
        context.commit('LOADING', false);
        context.dispatch('getCart');
      });
    },
    addtoCart(context, { id, qty }) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      context.commit('LOADING', true);
      const item = {
        product_id: id,
        qty,
      };
      axios.post(url, { data: item }).then(() => {
        context.commit('LOADING', false);
        context.dispatch('getCart');
      });
    },
    updateMessage(context, { message, status }) {
      context.commit('MESSAGE', { message, status });
      const timestamp = Math.floor(new Date() / 1000);
      context.dispatch('removeMessageWithTiming', timestamp);
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
      context.commit('REMOVEMESSAGE', num);
    },
  },
  modules: {
    dashProducts,
    Coupons,
    CustomerProducts,
  },
});
