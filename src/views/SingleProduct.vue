<template>
  <div>
    <Navbar />
    <div class="container mb-12 py-4">
      <div class="row" style="height: 400px;">
        <div class="col-md-7 mb-5">
          <div
            class="bg-cover h-100"
            :style="{ backgroundImage: `url(${singleProduct.imageUrl})` }"
          ></div>
          <h3 class="h4 py-3 text-white">產品特色</h3>
          <p class="text-white">{{ singleProduct.content }}</p>
        </div>
        <div class="col-md-5 bg-white py-3">
          <h2>{{ singleProduct.title }}</h2>
          <p>{{ singleProduct.description }}</p>
          <div class="d-flex align-items-end">
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
          <hr />
          <div class="input-group mb-3">
            <select class="form-control mr-1" v-model="singleProduct.num">
              <option :value="num" v-for="num in 10" :key="num"
                >{{ num }} {{ singleProduct.unit }}</option
              >
            </select>
            <button type="submit" class="btn btn-secondary" id="button-addCart">
              加入購物車
            </button>
          </div>
        </div>
      </div>
    </div>

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
    }
  },
  created() {
    this.id = this.$route.params.productId;
    this.getSingleProduct();
  }
};
</script>
