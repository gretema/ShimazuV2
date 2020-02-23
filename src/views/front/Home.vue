<template>
  <div class="home">
    <Header @clickCate="slidetoCard" />
    <section class="section my-md-10">
      <!-- (標語) 在 md 以上隱藏 -->
      <div class="row justify-content-center d-md-none no-gutters my-5">
        <div class="col-8">
          <h2 class="h5 my-5 text-center text-title">
            為什麼——
            <br />選擇日本和牛？
          </h2>
        </div>
      </div>
      <div class="bg-intro pt-5 pt-md-0">
        <div class="container">
          <div class="row">
            <!--圖片-->
            <div class="col-md-6 section-image-block">
              <div
                class="bg-cover h-100 section-image"
                :style="{
                  backgroundImage: `url(${require('../../assets/images/meat6.jpg')})`
                }"
              ></div>
            </div>
            <!--垂直文字區-->
            <div class="col-md-6 vertical-content d-flex justify-content-end">
              <p class="writing-md-vertical text-light p-3">
                日本和牛被譽為世界上最高價的牛肉，每一隻都經過嚴正的管理、細心養育。
                每隻和牛在出生時便有證明書以證明其血統。自出生後，和牛便以牛奶、草及含蛋白質的飼料飼養；一些牧場更會聘請專人為牛隻按摩及灌飲啤酒，令肉質更鮮嫩。
              </p>
              <!-- (標語) 在 md 以上會顯示 -->
              <h2 class="writing-md-vertical d-none d-md-block section-image-block text-title">
                為什麼——
                <br />
                <span class="mt-5">選擇日本和牛？</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section my-md-10">
      <!-- (標語) 在 md 以上隱藏 -->
      <div class="row justify-content-center d-md-none no-gutters my-5">
        <div class="col-8">
          <h2 class="h5 my-5 text-center text-title">
            為什麼——
            <br />一定要吃肉？
          </h2>
        </div>
      </div>
      <div class="bg-intro pt-5 pt-md-0">
        <div class="container">
          <div class="row flex-row-reverse">
            <!--圖片-->
            <div class="col-md-6 section-image-block">
              <div
                class="bg-cover h-100 section-image"
                :style="{
                  backgroundImage: `url(${require('../../assets/images/meat8.jpg')})`
                }"
              ></div>
            </div>
            <!--垂直文字區-->
            <div class="col-md-6 vertical-content d-flex justify-content-end">
              <p class="writing-md-vertical text-light p-3">
                隨著現代人營養過剩及「吃肉致癌說」的興起，人們吃肉的天性被壓抑，食肉對健康的積極意義，正在被人們忽視和淡忘。
                然而當我們肉類攝取不足時，人體的體能、情緒、精神狀態等都會受到一定影響。
                更不要提當生活壓力過大時，一口咬下鮮嫩多汁的上等牛肉，那是多麼地舒壓啊！
              </p>
              <!-- (標語) 在 md 以上會顯示 -->
              <h2 class="writing-md-vertical d-none d-md-block section-image-block text-title">
                為什麼——
                <br />
                <span class="mt-5">一定要吃肉？</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="my-5 my-md-9">
      <div class="container d-flex justify-content-center">
        <h2 class="h4 my-5 text-center text-title d-md-none">
          想吃肉——
          <br />是不需要理由的。
        </h2>
        <div class="d-flex flex-wrap flex-column justify-content-center">
          <h2 class="d-none d-md-block writing-md-vertical text-title">
            想吃肉——
            <br />
            <span class="mt-5">是不需要理由的。</span>
          </h2>
        </div>
      </div>
    </section>

    <!--Item Card-->
    <div id="productCardSection"></div>
    <div class="container my-5 my-7"
     v-show="this.searchText">
      <div class="row">
        <!--卡片元件-->
        <ProductCard
          v-for="item in filterData"
          :key="item.id"
          :this-card="item"
          @openAddModal="addtoCartModal"
        ></ProductCard>
      </div>
    </div>

    <!-- Gotop button -->
    <button class="gotop-btn" id="gotopBtn" @click="gotop">
      <i class="fas fa-arrow-up gotop-arrow"></i>
    </button>
    <!--優惠券 Modal-->
    <div
      class="modal fade"
      id="couponModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header border-0">
            <h5 class="modal-title" id="exampleModalLabel">最新優惠</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body p-0">
            <div
              class="bg-activity bg-cover d-flex align-items-center justify-content-center"
            >
              <p class="activity-text-box text-bg text-center p-3">
                歡慶鼠年！
                <br />即日起至
                <span class="font-weight-bolder">2020.2.28</span>，
                <br />結帳輸入優惠碼
                <span class="text-danger h4 font-weight-bolder">yearofrat</span>，
                <br />即享所有品項半價優惠！
              </p>
            </div>
          </div>
          <div class="modal-footer border-0 p-2">
            <button type="button" class="btn btn-primary" data-dismiss="modal">朕知道了</button>
          </div>
        </div>
      </div>
    </div>

    <!-- 成功加入購物車 Modal -->
    <div class="modal fade" id="addtoCartModal" tabindex="-1" role="dialog"
     aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
          <div class="modal-body">
            成功加入購物車！
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import $ from 'jquery';
import Header from '../../components/Header.vue';
import ProductCard from '../../components/ProductCard.vue';

export default {
  name: 'home',
  components: {
    Header,
    ProductCard,
  },
  computed: {
    filterData() {
      const vm = this;
      if (vm.searchText) {
        return vm.products.filter(item => item.category
          .toLowerCase()
          .includes(vm.searchText.toLowerCase()));
      }
      return vm.products;
    },
    products() {
      return this.$store.state.CustomerProducts.products;
    },
    searchText() {
      return this.$store.state.CustomerProducts.searchText;
    },
  },
  methods: {
    getProducts(page = 1) {
      this.$store.dispatch('getCusProducts', page);
    },
    showCouponModal() {
      window.setTimeout(() => {
        $('#couponModal').modal('show');
      }, 1700);
    },
    slidetoCard() {
      $('html, body').animate(
        {
          scrollTop: $('#productCardSection').offset().top,
        },
        1500,
      );
    },
    addtoCartModal() {
      window.setTimeout(() => {
        $('#addtoCartModal').modal('show');
      }, 2500);
      window.setTimeout(() => {
        $('#addtoCartModal').modal('hide');
      }, 4000);
    },
    gotop() {
      $('html, body').animate({ scrollTop: 0 }, 1500);
    },
  },
  created() {
    this.getProducts();
    // 偵測頁面往下滑超過 400px 就讓 Gotop 按鈕出現
    // eslint-disable-next-line func-names
    $(window).scroll(function () {
      if ($(this).scrollTop() > 400) {
        $('#gotopBtn').fadeIn();
      } else {
        $('#gotopBtn').fadeOut();
      }
    });
  },
  mounted() {
    this.showCouponModal();
  },
};
</script>
