<template>
  <div>
    <!-- Banner -->
    <header
      class="bg-cover d-flex justify-content-center align-items-center"
      :style="[
        {
          backgroundImage:
            'url(' + require('../assets/images/product-banner.jpg') + ')'
        },
        { height: '496px' }
      ]"
    >
      <div class="container">
        <h2 class="h5 p-3 text-center text-title text-dark text-bg d-md-none">
          想吃肉——<br />是不需要理由的。
        </h2>
        <h2
          class="h3 p-3 ml-auto d-none d-md-block writing-md-vertical text-title text-dark text-bg"
        >
          想吃肉——<br />
          是不需要理由的。
        </h2>
      </div>
    </header>
    <!--產品頁主體-->
    <div class="container my-6">
      <div class="row">
        <!--選單-->
        <div class="col-md-3">
          <div
            class="list-group text-center h5 custom-list-group"
            id="myList"
            role="tablist"
          >
            <li class="list-group-item bg-accent text-light">商品類別</li>
            <a
              class="list-group-item list-group-item-action active"
              data-toggle="list"
              href="#all-product"
              role="tab"
              >所有肉品 (12)</a
            >
            <a
              class="list-group-item list-group-item-action"
              data-toggle="list"
              href="#selected"
              role="tab"
              >本日精選 (3)</a
            >
            <a
              class="list-group-item list-group-item-action"
              data-toggle="list"
              href="#recommand"
              role="tab"
              >人氣推薦 (9)</a
            >
          </div>
        </div>
        <!--產品-->
        <div class="col-md-9 mt-5 mt-md-0">
          <div class="tab-content">
            <div class="tab-pane active" id="all-product" role="tabpanel">
              <div class="row">
                <div class="col-md-6">
                  <div class="item-card mb-4">
                    <!-- item-image -->
                    <div
                      class="item-image bg-cover"
                      style="background-image: url(./images/meat1.jpg);"
                    >
                      <div class="item-tag">本日精選</div>
                      <div class="item-icon text-primary">
                        <i class="far fa-heart heart-border"></i>
                        <i class="fas fa-heart heart-full d-none"></i>
                      </div>
                    </div>
                    <!-- item-info -->
                    <div
                      class="row no-gutters item-info text-light d-flex justify-content-center"
                    >
                      <div class="col item-name p-3">薩摩丁骨牛排</div>
                      <div class="col item-price text-strong p-3">
                        <strong>NT$ 2,900</strong>
                      </div>
                    </div>
                    <!-- item-cart -->
                    <a href="#" class="btn btn-block btn-primary item-cart"
                      >加入購物車</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane" id="selected" role="tabpanel">
              <div class="row">
                <div class="col-md-6">
                  <div class="item-card mb-4">
                    <!-- item-image -->
                    <div
                      class="item-image bg-cover"
                      style="background-image: url(./images/meat1.jpg);"
                    >
                      <div class="item-tag">本日精選</div>
                      <div class="item-icon text-primary">
                        <i class="far fa-heart heart-border"></i>
                        <i class="fas fa-heart heart-full d-none"></i>
                      </div>
                    </div>
                    <!-- item-info -->
                    <div
                      class="row no-gutters item-info text-light d-flex justify-content-center"
                    >
                      <div class="col item-name p-3">薩摩丁骨牛排</div>
                      <div class="col item-price text-strong p-3">
                        <strong>NT$ 2,900</strong>
                      </div>
                    </div>
                    <!-- item-cart -->
                    <a href="#" class="btn btn-block btn-primary item-cart"
                      >加入購物車</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 分頁 -->
          <Pagination
            :childPaginations="pagination"
            @changeCurrPage="getProducts"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import Pagination from "../components/Pagination.vue";

export default {
  components: {
    Pagination: Pagination, // 前為標籤名，後為引入的元件名
    searchText: ""
  },
  data() {
    return {};
  },
  computed: {
    filterData() {
      const vm = this;
      if (vm.searchText) {
        return vm.products.filter(item => {
          const data = item.category
            .toLowerCase()
            .includes(vm.searchText.toLowerCase());
          return data;
        });
      }
      return this.products;
    },
    pagination() {
      return this.$store.state.CustomerProducts.pagination;
    },
    cart() {
      return this.$store.state.cart;
    },
    products() {
      return this.$store.state.CustomerProducts.products;
    },
    categories() {
      return this.$store.state.CustomerProducts.categories;
    }
  },
  methods: {
    getProducts(page = 1) {
      this.$store.dispatch("getCusProducts", page);
    },
    getCart() {
      this.$store.dispatch("getCart");
    },
    // 取得單一產品頁還沒寫
    addtoCart(id, qty = 1) {
      this.$store.dispatch("addtoCart", { id, qty });
    },
    removeItem(id) {
      this.$store.dispatch("removeCart", id);
    }
  },
  created() {
    this.getProducts();
    this.getCart();
  }
};
</script>
