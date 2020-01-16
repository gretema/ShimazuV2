<template>
  <div id="app">
    <loading :active.sync="isLoading"></loading>
    <Navbar />
    <router-view />
    <Subscribe />
    <Footer />
  </div>
</template>

<style lang="scss">
@import "./assets/all";
</style>

<script>
import Navbar from "./components/Navbar.vue";
import Subscribe from "./components/Subscribe.vue";
import Footer from "./components/Footer.vue";
import CartRemoveModal from "./components/CartRemoveModal.vue";

export default {
  components: {
    Navbar,
    Subscribe,
    Footer,
    CartRemoveModal
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    }
  }
};
</script>
