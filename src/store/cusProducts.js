import axios from 'axios';

export default {
  state: {
    categories: [],
    products: [],
    pagination: {},
    searchText: '',
    collected: JSON.parse(localStorage.getItem('collectedItems')) || [],
    loveItemIdList: [],
  },
  mutations: {
    CATEGORIES(state, payload) {
      const categories = new Set();
      payload.forEach((item) => {
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
    COLLECTED(state, lovedItem) {
      state.loveItemIdList.push(lovedItem.id);
      state.collected.push(lovedItem);
      // 儲存至 localStorage
      localStorage.setItem('collectedItems', JSON.stringify(state.collected));
    },
    DISCOLLECTED(state, lovedItemId) {
      const index = state.loveItemIdList.indexOf(lovedItemId);
      state.loveItemIdList.splice(index, 1);
      state.collected.splice(index, 1);
      localStorage.setItem('collectedItems', JSON.stringify(state.collected));
    },
  },
  actions: {
    getCusProducts(context, page) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products?page=${page}`;
      context.commit('LOADING', true);
      axios.get(api).then((response) => {
        context.commit('LOADING', false);
        context.commit('ALLPRODUCTS', response.data.products);
        context.commit('CATEGORIES', response.data.products);
        context.commit('ALLPROPAGINATION', response.data.pagination);
      });
    },
    getText(context, text) {
      context.commit('SEARCHTEXT', text);
    },
  },
};
