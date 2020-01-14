<template>
  <div id="app">
    <Navbar />
    <Header />
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
import Header from "./components/Header.vue";
import Subscribe from "./components/Subscribe.vue";
import Footer from "./components/Footer.vue";
import CartRemoveModal from "./components/CartRemoveModal.vue";

export default {
  components: {
    Navbar,
    Header,
    Subscribe,
    Footer,
    CartRemoveModal
  },
  created() {
    //console.log(process.env.VUE_APP_APIPATH);
  }
};
</script>
