import axios from "axios";

export default {
  state: {
    pagination: {},
    coupons: [],
    isNew: false,
    tempCoupon: {
      title: "",
      is_enabled: 0,
      percent: 100,
      due_date: 0,
      code: ""
    },
    due_date: new Date()
  },
  mutations: {
    PAGINATION(state, payload) {
      state.pagination = payload;
    },
    COUPONS(state, payload) {
      state.coupons = payload;
    },
    DUEDATE(state, value) {
      state.due_date = value;
      const timestamp = Math.floor(new Date(state.due_date) / 1000);
      state.tempCoupon.due_date = timestamp;
    },
    EDITCOUPON(state, { isNew, item }) {
      if (isNew) {
        state.tempCoupon = {};
        state.isNew = true;
      } else {
        // 把點選到的優惠券資訊 assign 給 Modal 顯示
        state.tempCoupon = Object.assign({}, item);
        state.isNew = false;
        const dateAndTime = new Date(state.tempCoupon.due_date * 1000)
          .toISOString()
          .split("T");
        state.due_date = dateAndTime[0];
      }
    },
    DELCOUMODAL(state, item) {
      state.tempProduct = item;
    }
  },
  actions: {
    getCoupons(context, page) {
      // 該 API 透過分頁切換而取得優惠券列表
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupons?page=${page}`;
      context.commit("LOADING", true);
      axios.get(api).then(response => {
        context.commit("LOADING", false);
        context.commit("COUPONS", response.data.coupons);
        context.commit("PAGINATION", response.data.pagination);
      });
    },
    openCouModal(context, { isNew, item }) {
      context.commit("EDITCOUPON", { isNew, item });
    },
    updateCoupon(context) {
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon`;
      let httpMethod = "post";
      // 如果是修改優惠券，就改用另一個 API 路徑跟方法
      if (!context.state.isNew) {
        api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${context.state.tempCoupon.id}`;
        httpMethod = "put";
      }
      // http 方法用中括號變數選取
      axios[httpMethod](api, { data: context.state.tempCoupon }).then(
        response => {
          if (response.data.success) {
            context.dispatch("getCoupons");
          } else {
            context.dispatch("getCoupons");
            let message = response.data.message;
            let status = "danger";
            vm.$store.dispatch("updateMessage", { message, status });
          }
        }
      );
    },
    deleteCouModal(context, item) {
      context.commit("DELCOUMODAL", item);
    },
    delCoupon(context) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${context.state.tempCoupon.id}`;
      axios.delete(api).then(response => {
        if (response.data.success) {
          context.dispatch("getCoupons");
        } else {
          context.dispatch("getCoupons");
        }
      });
    }
  }
};
