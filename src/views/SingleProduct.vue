<template>
  <div>
    <Navbar />
    <div class="container mb-10 py-4">
      <div class="row">
        <div class="col-md-7 mb-5">
          <h2 class="h3 text-center bg-accent text-white p-2 d-md-none">
            {{ singleProduct.title }}
          </h2>
          <div
            class="bg-cover"
            :style="[
              { backgroundImage: `url(${singleProduct.imageUrl})` },
              { height: '380px' }
            ]"
          ></div>
          <h3 class="h4 py-3 text-white">產品特色</h3>
          <p class="text-white">{{ singleProduct.content }}</p>
        </div>
        <div class="col-md-5 p-3 bg-white buy-area">
          <h2 class="d-none d-md-block">{{ singleProduct.title }}</h2>
          <p class="d-none d-md-block">{{ singleProduct.description }}</p>
          <div
            class="mb-2 mb-md-0 d-flex align-items-end justify-content-center justify-content-md-start"
          >
            <del class="text-muted mr-3"
              >原價 {{ singleProduct.origin_price | currency }}</del
            >
            <div class="h4 mb-0">
              <span class="text-danger">特價</span>
              <span class="text-danger">
                {{ singleProduct.price | currency }}</span
              >
            </div>
          </div>
          <hr class="d-none d-md-block" />
          <div class="input-group mb-3">
            <select class="form-control mr-1" v-model="singleProduct.num">
              <option :value="num" v-for="num in 10" :key="num"
                >{{ num }} {{ singleProduct.unit }}</option
              >
            </select>
            <button
              type="submit"
              class="btn btn-primary"
              id="button-addCart"
              @click="addtoCart(singleProduct.id, singleProduct.num)"
            >
              加入購物車
            </button>
          </div>
        </div>
      </div>
    </div>
    <Subscribe />
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Subscribe from "../components/Subscribe.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Navbar,
    Subscribe,
    Footer
  },
  data() {
    return {
      id: "",
      singleProduct: {}
    };
  },

  methods: {
    getSingleProduct() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${vm.id}`;

      this.$store.commit("LOADING", true);
      this.$http.get(api).then(response => {
        vm.$store.commit("LOADING", false);
        vm.singleProduct = response.data.product;
      });
    },
    getCart() {
      this.$store.dispatch("getCart");
    },
    removeItem(id) {
      this.$store.dispatch("removeCart", id);
    },
    addtoCart(id, qty = 1) {
      this.$store.dispatch("addtoCart", { id, qty });
    }
  },
  created() {
    this.id = this.$route.params.productId;
    this.getSingleProduct();
    this.getCart();
  }
};
</script>

<style lang="scss" scoped>
.buy-area {
  height: 380px;
  @media (max-width: 576px) {
    height: auto;
  }
}
</style>
