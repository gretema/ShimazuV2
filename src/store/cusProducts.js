import axios from "axios";

export default {
  state: {
    categories: [],
    products: [],
    pagination: {},
    searchText: "",
    collected: JSON.parse(localStorage.getItem("collectedItems")) || [],
    collectedNames: []
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
    },
    SEARCHTEXT(state, payload) {
      state.searchText = payload;
    },
    COLLECTED(state, product) {
      if (state.collectedNames.indexOf(product.title) == -1) {
        // 商品不存在則加入陣列
        state.collected.push(product);
      } else {
        // 存在則將商品移除
        state.collected.splice(state.collected.indexOf(product.title), 1);
      }
      // 儲存至 localStorage
      localStorage.setItem("collectedItems", JSON.stringify(state.collected));
    },
    COLLECTEDNAMES(state) {
      state.collected.map(item => state.collectedNames.push(item.title));
    },
    DISCOLLECTED(state, product) {
      state.collected.splice(state.collected.indexOf(product), 1);
      localStorage.setItem("collectedItems", JSON.stringify(state.collected));
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
    },
    getText(context, text) {
      context.commit("SEARCHTEXT", text);
    }
  }
};
