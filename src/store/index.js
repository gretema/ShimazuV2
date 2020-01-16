import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

import dashProducts from "./dashProducts";
import Coupons from "./coupons";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false
  },
  mutations: {
    LOADING(state, status) {
      state.isLoading = status;
    }
  },
  actions: {
    updateLoading(context, status) {
      context.commit("LOADING", status);
    }
  },
  modules: {
    dashProducts,
    Coupons
  }
});
