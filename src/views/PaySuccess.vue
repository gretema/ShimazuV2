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
          <router-link
            to="/products"
            class="btn btn-block btn-lg btn-primary text-white rounded-0 py-3"
            >繼續逛逛</router-link
          >
        </div>
      </div>
      <div class="my-5 row justify-content-center bg-light">
        <form class="col-md-10">
          <table class="table">
            <thead>
              <th>品名</th>
              <th width="150">數量</th>
              <th width="150" class="text-right">單價</th>
            </thead>
            <tbody>
              <tr v-for="item in order.products" :key="item.id">
                <td class="align-middle">{{ item.product.title }}</td>
                <td class="align-middle">
                  {{ item.qty }} {{ item.product.unit }}
                </td>
                <td class="align-middle text-right">
                  {{ item.final_total | currency }}
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="2" class="text-right">總計</td>
                <td class="text-right">{{ order.total | currency }}</td>
              </tr>
            </tfoot>
          </table>
          <table class="table">
            <tbody>
              <tr>
                <th width="100">Email</th>
                <td>{{ order.user.email }}</td>
              </tr>
              <tr>
                <th>姓名</th>
                <td>{{ order.user.name }}</td>
              </tr>
              <tr>
                <th>電話</th>
                <td>{{ order.user.tel }}</td>
              </tr>
              <tr>
                <th>地址</th>
                <td>{{ order.user.address }}</td>
              </tr>
              <tr>
                <th width="120">付款狀態</th>
                <td>
                  <span v-if="!order.is_paid">尚未付款</span>
                  <span v-else class="text-success">付款完成</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="text-right" v-if="order.is_paid === false">
            <button class="btn btn-danger">確認付款去</button>
          </div>
        </form>
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
      orderId: "",
      order: {
        user: {}
      }
    };
  },
  computed: {},
  methods: {
    getThisOrder() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order/${vm.orderId}`;
      this.$store.commit("LOADING", true);
      this.$http.get(api).then(response => {
        vm.$store.commit("LOADING", false);
        vm.order = response.data.order;
      });
    }
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getThisOrder();
  }
};
</script>
