<template>
  <div class="row">
    <div
      :class="[
        { 'col-md-6': thisPage == 'productCard' },
        { 'col-md-4': thisPage == 'homeCard' }
      ]"
      v-for="item in filterData"
      :key="item.id"
    >
      <div class="item-card mb-4">
        <!-- item-image -->
        <div
          class="item-image bg-cover"
          :style="{ backgroundImage: `url(${item.imageUrl})` }"
        >
          <div class="item-tag">{{ item.category }}</div>
          <div class="item-icon text-primary" @click="loveIt(item)">
            <i class="heart-border" :class="heartStyle"></i>
          </div>
        </div>
        <!-- item-info -->
        <div
          class="row no-gutters item-info text-light d-flex justify-content-center"
        >
          <div class="col item-name p-3">{{ item.title }}</div>
          <div class="col item-price text-strong p-3">
            <strong>NT {{ item.price | currency }}</strong>
          </div>
        </div>
        <!-- item-cart -->

        <button
          v-if="thisPage == 'homeCard'"
          class="btn btn-block btn-primary item-cart"
          @click="addtoCart(item.id)"
        >
          加入購物車
        </button>
        <button
          v-else
          class="btn btn-block btn-primary item-cart"
          @click="openSingleProduct(item.id)"
        >
          查看更多
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      thisPage: "",
      loveItem: ""
    };
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
    searchText() {
      return this.$store.state.CustomerProducts.searchText;
    },
    products() {
      return this.$store.state.CustomerProducts.products;
    },
    heartStyle() {
      let collectedNames = this.$store.state.CustomerProducts.collectedNames;
      return collectedNames.indexOf(this.loveItem) == -1
        ? "far fa-heart"
        : "fas fa-heart";
    }
  },
  methods: {
    addtoCart(id, qty = 1) {
      this.$store.dispatch("addtoCart", { id, qty });
    },
    // 取得單一產品頁
    openSingleProduct(id) {
      this.$router.push(`/products/${id}`);
    },
    loveIt(item) {
      this.$store.commit("COLLECTED", item);
      this.loveItem = item.title;
    }
  },
  mounted() {
    let path = this.$route.path;
    if (path == "/") {
      this.thisPage = "homeCard";
    } else {
      this.thisPage = "productCard";
    }
  }
};
</script>
