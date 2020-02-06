<template>
  <div
    :class="[
      { 'col-md-6': thisPage == 'productCard' },
      { 'col-md-4': thisPage == 'homeCard' }
    ]"
  >
    <div class="item-card mb-4">
      <!-- item-image -->
      <div
        class="item-image bg-cover"
        :style="{ backgroundImage: `url(${thisCard.imageUrl})` }"
      >
        <div class="item-tag">{{ thisCard.category }}</div>
        <div class="item-icon text-primary" @click="clickHeart">
          <i class="heart-border" :class="heartStyle"></i>
        </div>
      </div>
      <!-- item-info -->
      <div
        class="row no-gutters item-info text-light d-flex justify-content-center"
      >
        <div class="col item-name p-3">{{ thisCard.title }}</div>
        <div class="col item-price text-strong p-3">
          <strong>NT {{ thisCard.price | currency }}</strong>
        </div>
      </div>
      <!-- item-btn -->
      <button
        v-if="thisPage == 'homeCard'"
        class="btn btn-block btn-primary btn-item"
        @click="addtoCart(thisCard.id)"
      >
        加入購物車
      </button>
      <button
        v-else
        class="btn btn-block btn-primary btn-item"
        @click="openSingleProduct(thisCard.id)"
      >
        查看更多
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      thisPage: '',
    };
  },
  props: ['thisCard'],
  computed: {
    searchText() {
      return this.$store.state.CustomerProducts.searchText;
    },
    collected() {
      return this.$store.state.CustomerProducts.collected;
    },
    heartStyle() {
      return this.collected.indexOf(this.thisCard.title) == -1
        ? 'far fa-heart'
        : 'fas fa-heart';
    },
  },
  methods: {
    addtoCart(id, qty = 1) {
      this.$store.dispatch('addtoCart', { id, qty });
    },
    // 取得單一產品頁
    openSingleProduct(id) {
      this.$router.push(`/products/${id}`);
    },
    clickHeart() {
      // 被點擊愛心的商品名稱送到父元件的 method
      this.$emit('change-heart', this.thisCard.title);
    },
  },
  mounted() {
    const { path } = this.$route;
    if (path == '/') {
      this.thisPage = 'homeCard';
    } else {
      this.thisPage = 'productCard';
    }
  },
};
</script>
