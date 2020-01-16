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
    PRODUCTS(state, payload) {
      state.products = payload;
    },
    PAGINATION(state, payload) {
      state.pagination = payload;
    }
  },
  actions: {
    getCusProducts(context, page) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products?page=${page}`;
      context.commit("LOADING", true);
      axios.get(api).then(response => {
        context.commit("LOADING", false);
        context.commit("DASHPRODUCTS", response.data.products);
        context.commit("PAGINATION", response.data.pagination);
        console.log(response.data);
      });
    }
  }
};
