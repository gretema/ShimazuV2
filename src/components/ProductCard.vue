<template>
  <div class="row">
    <div class="col-md-6" v-for="item in filterData" :key="item.id">
      <div class="item-card mb-4">
        <!-- item-image -->
        <div
          class="item-image bg-cover"
          :style="{ backgroundImage: `url(${item.imageUrl})` }"
        >
          <div class="item-tag">{{ item.category }}</div>
          <div class="item-icon text-primary">
            <i class="far fa-heart heart-border"></i>
            <i class="fas fa-heart heart-full d-none"></i>
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
          class="btn btn-block btn-primary item-cart"
          @click="addtoCart(item.id)"
        >
          加入購物車
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
    searchText() {
      return this.$store.state.CustomerProducts.searchText;
    },
    products() {
      return this.$store.state.CustomerProducts.products;
    }
  },
  methods: {
    addtoCart(id, qty = 1) {
      this.$store.dispatch("addtoCart", { id, qty });
    }
  }
};
</script>
