<template>
  <div>
    <DashNavbar />
    <Alert />
    <div class="container-fluid mt-8">
      <div class="row">
        <DashSidebar />

        <main role="main" class="col-md-9 px-3 ml-0 ml-md-5">
          <router-view></router-view>
          <!--Products/Orders/Coupon/CustomerOrder-->
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import DashNavbar from '../../components/DashNavbar.vue';
import DashSidebar from '../../components/DashSidebar.vue';
import Alert from '../../components/AlertMessage.vue';

export default {
  components: {
    DashNavbar,
    DashSidebar,
    Alert,
  },
};
</script>
