import axios from "axios";

export default {
  state: {
    categories: [],
    products: [],
    pagination: {}
  },
  mutations: {
    CATEGORIES(state, payload) {
      const categories = new Set();
      payload.forEach(item => {
        categories.add(item.category);
      });
      state.categories = Array.from(categories);
    },
    ALLPRODUCTS(state, payload) {
      state.products = payload;
    },
    ALLPROPAGINATION(state, payload) {
      state.pagination = payload;
    }
  },
  actions: {
    getCusProducts(context, page) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products?page=${page}`;
      context.commit("LOADING", true);
      axios.get(api).then(response => {
        context.commit("LOADING", false);
        context.commit("ALLPRODUCTS", response.data.products);
        context.commit("CATEGORIES", response.data.products);
        context.commit("ALLPROPAGINATION", response.data.pagination);
        console.log(response.data);
      });
    }
  }
};
