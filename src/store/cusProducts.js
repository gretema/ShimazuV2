import axios from "axios";

export default {
  state: {
    categories: [],
    products: [],
    pagination: {},
    searchText: "",
    status: {
      loadingItem: ""
    } // 迷你版讀取效果
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
    LOADINGITEM(state, id) {
      state.status.loadingItem = id;
    }
    // SINGLEPRODUCT(state, { product, num }) {
    //   state.singleProduct = product;
    // },
    // BUYNUM(state, num) {
    //   state.singleProduct.num = num; // 從單一商品頁傳入選購數量
    // }
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
    // getSingleProduct(context, id) {
    //   const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`;
    //   // 開啟 loading
    //   context.commit("LOADINGITEM", id);
    //   axios.get(api).then(response => {
    //     // 清空 loading 暫存的 id
    //     context.commit("LOADINGITEM", "");
    //     context.commit("SINGLEPRODUCT", response.data.product);
    //   });
    // }
  }
};
