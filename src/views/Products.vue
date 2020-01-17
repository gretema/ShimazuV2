<template>
  <div>
    <Navbar />
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
              class="list-group-item list-group-item-action"
              href="#"
              @click.prevent="getText('')"
              :class="{ active: searchText === '' }"
              >所有商品</a
            >
            <a
              class="list-group-item list-group-item-action"
              href="#"
              v-for="item in categories"
              :key="item"
              :class="{ active: item === searchText }"
              @click.prevent="getText(item)"
              >{{ item }}</a
            >
          </div>
        </div>
        <!--產品-->
        <div class="col-md-9 mt-5 mt-md-0">
          <div class="tab-content">
            <div class="tab-pane active" id="all-product" role="tabpanel">
              <!--卡片元件-->
              <ProductCard />
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
    <Subscribe />
    <Footer />
  </div>
</template>

<script>
import $ from "jquery";
import Pagination from "../components/Pagination.vue";
import Navbar from "../components/Navbar.vue";
import Subscribe from "../components/Subscribe.vue";
import Footer from "../components/Footer.vue";
import ProductCard from "../components/ProductCard.vue";

export default {
  components: {
    Pagination: Pagination, // 前為標籤名，後為引入的元件名
    Navbar,
    Subscribe,
    Footer,
    ProductCard
  },
  data() {
    return {
      //searchText: ""
    };
  },
  computed: {
    // filterData() {
    //   const vm = this;
    //   if (vm.searchText) {
    //     return vm.products.filter(item => {
    //       const data = item.category
    //         .toLowerCase()
    //         .includes(vm.searchText.toLowerCase());
    //       return data;
    //     });
    //   }
    //   return this.products;
    // },
    pagination() {
      return this.$store.state.CustomerProducts.pagination;
    },
    cart() {
      return this.$store.state.cart;
    },
    // products() {
    //   return this.$store.state.CustomerProducts.products;
    // },
    categories() {
      return this.$store.state.CustomerProducts.categories;
    },
    searchText() {
      return this.$store.state.CustomerProducts.searchText;
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
    // addtoCart(id, qty = 1) {
    //   this.$store.dispatch("addtoCart", { id, qty });
    // },
    removeItem(id) {
      this.$store.dispatch("removeCart", id);
    },
    getText(cateText) {
      this.$store.dispatch("getText", cateText);
    }
  },
  created() {
    this.getProducts();
    this.getCart();
    this.getText("");
  }
};
</script>
