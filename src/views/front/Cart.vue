<template>
  <div>
    <Alert />
    <div class="container my-md-5">
      <div class="row">
        <div class="col-md-8">
          <div class="form-row py-4 mb-0 mx-0 bg-primary">
            <div class="col-md-6">
              <h2 class="h4 pl-3 text-md-left text-center text-light">您的購物車</h2>
            </div>
            <div
              class="col-md-6 d-flex align-items-center justify-content-center
              justify-content-md-end pr-md-3 px-3 px-md-0"
            >
              <!-- 步驟軸用 w-100 把 block 佔滿，並用 flex 排列 -->
              <div class="process-steps d-flex justify-content-between w-md-100 w-75">
                <div class="process-circle active"></div>
                <div class="process-circle"></div>
                <div class="process-circle"></div>
              </div>
            </div>
          </div>

          <!--表格會在行動版破版，所以不用-->
          <div class="bg-light p-3">
            <div
              class="py-3 d-flex flex-column flex-md-row"
              v-for="(item, index) in cart.carts"
              :key="item.id"
            >
              <!-- 圖與 form 水平排列 -->
              <div class="d-flex flex-md-grow-1 mr-md-3">
                <!-- to grow to fill available space -->
                <div
                  class="bg-cover my-4 mr-4 flex-grow-1 flex-md-grow-0 d-none d-md-block"
                  :style="[
                    { backgroundImage: `url(${item.product.imageUrl})` },
                    { height: '110px' },
                    { minWidth: '110px' }
                  ]"
                ></div>
                <div
                  class="d-flex flex-column flex-md-row align-items-md-center
                  justify-content-center justify-content-md-between flex-grow-1"
                >
                  <!-- 品項 -->
                  <div class="mr-md-4">
                    <span class="h5 cartitem-font-size">
                      {{ item.product.title }}
                    </span>
                    <br />
                    <span class="cartitem-font-size">
                      {{ item.product.price | currency }}
                    </span>
                  </div>
                  <!-- 數量 -->
                  <div class="ml-md-auto" style="width: 120px;">
                    <div class="input-group input-group-sm mb-3" style="width: 100px;">
                      <div class="input-group-prepend">
                        <button
                          class="btn btn-outline-secondary"
                          type="button"
                          id="button-addon1"
                          @click="reduceQty(index)"
                        >-</button>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder
                        aria-label="Example text with button addon"
                        aria-describedby="button-addon1"
                        v-model="item.qty"
                      />
                      <div class="input-group-append">
                        <button
                          class="btn btn-outline-secondary"
                          type="button"
                          id="button-addon2"
                          @click="addQty(index)"
                        >+</button>
                      </div>
                    </div>
                  </div>
                </div>
                <!--手機版價格和刪除-->
                <div class="d-md-none ml-auto align-items-center justify-content-end">
                  <span class="h5 mr-md-3 mb-0 cartitem-font-size">
                    {{ item.product.price*item.qty | currency }}
                  </span>
                  <a
                    href="#"
                    class="btn cartitem-font-size"
                    @click.prevent="openDelModal(item)"
                  >
                    <i class="fa fa-trash" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
              <!--桌機版價格和刪除-->
              <div
                class="d-none d-md-flex align-items-center justify-content-end
                justify-content-md-start py-3 cart-border"
              >
                <span class="h5 mr-md-3 mb-0">{{ item.product.price*item.qty | currency }}</span>
                <a href="#" class="btn" @click.prevent="openDelModal(item)">
                  <i class="fa fa-trash" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-6 mb-md-0">
          <div class="text-light bg-accent p-3">
            <h1 class="h4 text-center py-3 bg-primary-lighter bg-md-primary">訂單摘要</h1>
            <hr class="border-white mt-0" />
            <div class="d-flex justify-content-between mb-2">
              <span>小計</span>
              <span>{{ cart.total | currency }}</span>
            </div>
            <div class="d-flex justify-content-between mb-3">
              <span>運費</span>
              <span>免運費</span>
            </div>
            <div class="input-group mb-3 input-group-sm">
              <input type="text" class="form-control" v-model="coupon_code" placeholder="請輸入優惠碼" />
              <div class="input-group-append">
                <button class="btn btn-primary" type="button" @click="addCoupon">套用</button>
              </div>
            </div>
            <div class="d-flex justify-content-between">
              <span class="h5">總計</span>
              <span class="h5">{{ cart.final_total | currency }}</span>
            </div>
          </div>
          <!-- 結帳按鈕 -->
          <router-link
            to="cart/customerinfo"
            class="btn btn-block btn-lg btn-primary rounded-0 text-white mx-md-0 py-3"
          >下一步</router-link>
        </div>
      </div>
    </div>
    <!--刪除購物車商品 Modal-->
    <div class="modal fade" id="delProductModal" tabindex="-1" role="dialog"
     aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
          <div class="modal-header bg-danger">
            <h5 class="modal-title text-light" >刪除商品</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否自購物車刪除商品(刪除後將無法恢復)？
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-danger" @click="removeCart">確認刪除</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import Alert from '../../components/AlertMessage.vue';

export default {
  components: {
    Alert,
  },
  data() {
    return {
      coupon_code: '',
      tempProduct: {},
    };
  },
  methods: {
    getCart() {
      this.$store.dispatch('getCart');
    },
    openDelModal(item) {
      // 將所點選的產品資料帶入
      this.tempProduct = item;
      // 開啟刪除產品 modal
      $('#delProductModal').modal('show');
    },
    removeCart() {
      this.$store.dispatch('removeCart', this.tempProduct.id);
      $('#delProductModal').modal('hide');
    },
    addCoupon() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`;
      const coupon = {
        code: vm.coupon_code,
      };
      vm.$store.commit('LOADING', true);
      vm.$http.post(url, { data: coupon }).then((response) => {
        vm.getCart();
        vm.$store.commit('LOADING', false);
        if (!response.data.success) {
          const { message } = response.data;
          const status = 'danger';
          vm.$store.dispatch('updateMessage', { message, status });
        }
      });
    },
    reduceQty(index) {
      this.$store.commit('REDUCEQTY', index);
    },
    addQty(index) {
      this.$store.commit('ADDQTY', index);
    },
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },
  created() {
    this.getCart();
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/components/_cart";
</style>
