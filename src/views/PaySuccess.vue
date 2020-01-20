<template>
  <div>
    <Navbar />
    <div class="container mb-md-6">
      <div
        class="bg-cover row justify-content-center align-items-center"
        :style="[
          {
            backgroundImage: `url(${require('../assets/images/fortune_cats.jpg')})`
          },
          { height: '496px' }
        ]"
      >
        <div class="col-md-4 p-8 p-md-0">
          <div class="process-steps d-flex justify-content-between ">
            <div class="process-circle completed">
              <i class="fas fa-check"></i>
            </div>
            <div class="process-circle completed">
              <i class="fas fa-check"></i>
            </div>
            <div class="process-circle completed">
              <i class="fas fa-check"></i>
            </div>
          </div>
          <h2
            class="text-center text-primary text-bg p-3 my-5"
            style="font-weight: bolder; letter-spacing: 10px;"
          >
            付款成功
          </h2>
          <router-link
            to="/products"
            class="btn btn-block btn-lg btn-primary text-white rounded-0 d-none d-md-block py-3"
            >繼續逛逛</router-link
          >
        </div>
      </div>
      <!--行動版繼續逛逛-->
      <div class="row d-md-none">
        <div class="col" style="padding: 0 0;">
          <a
            href="./product.html"
            class="btn btn-block btn-lg btn-primary text-white rounded-0 py-3"
            >繼續逛逛</a
          >
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
    return {};
  },
  computed: {},
  methods: {},
  created() {}
};
</script>
