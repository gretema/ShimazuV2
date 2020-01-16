<template>
  <div>
    <DashNavbar />

    <div class="container-fluid mt-8">
      <Alert />
      <div class="row">
        <DashSidebar />

        <main role="main" class="col-md-9 ml-5 px-3">
          <router-view></router-view>
          <!--Products/Orders/Coupon/CustomerOrder-->
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import DashNavbar from "../components/DashNavbar.vue";
import DashSidebar from "../components/DashSidebar.vue";
import Alert from "../components/AlertMessage.vue";
export default {
  components: {
    DashNavbar,
    DashSidebar,
    Alert
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    }
  }
};
</script>

<style lang="scss">
.mt-8 {
  margin-top: 80px;
}
</style>
