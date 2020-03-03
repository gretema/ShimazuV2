<template>
  <div>
    <div class="container mb-md-10 py-md-4" v-if="singleProduct.title">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-transparent px-0 mb-0">
          <li class="breadcrumb-item">
            <router-link to="/" class="text-primary-light">首頁</router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link to="/products" class="text-primary-light"
              >肉品</router-link
            >
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ singleProduct.title }}
          </li>
        </ol>
      </nav>
      <div class="row">
        <!--圖片區-->
        <div class="col-md-7 mb-md-5 px-0">
          <h2 class="h3 text-center bg-accent text-white p-2 d-md-none mb-0">
            {{ singleProduct.title }}
          </h2>
          <div
            class="bg-cover"
            :style="[
              { backgroundImage: `url(${singleProduct.imageUrl})` },
              { height: '380px' }
            ]"
          ></div>
        </div>
        <!--購買區-->
        <div class="col-md-5 p-3 bg-white buy-area">
          <h2 class="d-none d-md-block">{{ singleProduct.title }}</h2>
          <p class="d-none d-md-block">{{ singleProduct.description }}</p>
          <div
            class="mb-2 mb-md-0 d-flex align-items-end justify-content-center
            justify-content-md-start"
          >
            <del class="text-muted mr-3"
              >原價 {{ singleProduct.origin_price | currency }}</del
            >
            <div class="h4 mb-0">
              <span class="text-danger">特價</span>
              <span class="text-danger">
                {{ singleProduct.price | currency }}</span
              >
            </div>
          </div>
          <hr class="d-none d-md-block" />
          <div class="input-group mb-3">
            <select class="form-control mr-1" v-model="singleProduct.num">
              <option :value="num" v-for="num in 10" :key="num"
                >{{ num }} {{ singleProduct.unit }}</option
              >
            </select>
            <button
              type="submit"
              class="btn btn-primary"
              id="button-addCart"
              @click="addtoCart(singleProduct.id, singleProduct.num)"
            >
              加入購物車
            </button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-7 text-white">
          <h3 class="h4 feature-title">產品特色</h3>
          <p class="mb-md-8 feature-text">{{ singleProduct.content }}</p>
          <h3 class="h4 feature-title">天然放牧</h3>
          <div class="cattles-picbox my-2"></div>
          <p class="mb-md-8 feature-text">
            不同於人工室內餵養，讓牛隻有充足的空間活動與成長，
            擁有全天然的生長環境。
          </p>
          <h3 class="h4 feature-title">和牛認證</h3>
          <div class="wagyu-admit-picbox my-2"></div>
          <p class="text-center"><small>(圖：日本食肉格付協會)</small></p>
          <p class="mb-md-8 feature-text">只有純正的日本產和牛，才能獲得日本食肉格付協會認證，使用和牛統一標誌。
            本店所販售之和牛均擁有該標章，從出生證明、血統紀錄到屠宰販售的相關資料，都能追溯確認。
          </p>
          <div class="notice">
            <h3 class="h4 feature-title">購買須知</h3>
            <h4 class="notice-title"><i class="far fa-hand-point-down"></i> 保存期限</h4>
            <p class="notice-text">冷凍 -18℃ 可保存 300 天，詳情請見商品標示。</p>
            <h4 class="notice-title"><i class="far fa-hand-point-down"></i> 解凍方式</h4>
            <p class="notice-text">
              請先將預備要料理之牛肉在未拆封前，置於冰箱冷藏室自然解凍。<br>
              ＊如未食用完畢之解凍牛肉，請使用保鮮袋或保鮮盒放置於冷藏室，最長可保存不超過 24 小時。<br>
              ＊勿將產品反覆回溫、冷凍以免影響品質，產品開封後請一次食用完畢，以免因儲存不當而影響品質。<br>
            </p>
            <h4 class="notice-title"><i class="far fa-hand-point-down"></i> 注意事項</h4>
            <p class="notice-text">
              1. 圖片僅供參考，商品內容物以實際收到商品為主。<br>
              2. 商品若於送達時即有損壞，請拍照存證並立即與我們聯繫。
            </p>
            <h4 class="notice-title"><i class="far fa-hand-point-down"></i> 退換貨須知</h4>
            <p class="notice-text">
              基於食品安全衛生考量，生鮮易腐敗商品依法已排除適用七天鑑賞期，恕無法退換貨。<br>
              當您收到商品後，請立即確認商品品項及數量是否正確，若收到商品與訂單內容不符，或商品本身有瑕疵
              （舉凡：運送途中損壞、商品解凍），請您立即拍照存證，並請於收到商品後一天內，
              備妥您的訂單編號或訂購人相關資料，與我們聯繫，我們會立即為您處理退換貨事宜。<br>
              <small>
                ※退換貨處理期間，請留存發票並保持商品整體完整，需要冷凍保存之商品務必置於冷凍庫保存，
                若商品已拆封，或是因消費者對商品的不當處理及保存方式錯誤而造成商品損壞變質，
                則本公司將有保留退換貨的權利。
              </small>
            </p>
          </div>

        </div>
        <div class="col-md-5 mt-5 mt-md-0" style="padding: 0 0;">
          <div class="list-group">
            <li class="list-group-item h4 text-center bg-primary text-white"
            style="margin-bottom: 0;">
              熱銷商品
            </li>
            <a href="#" @click="openRecomProduct(item.id)"
            class="list-group-item list-group-item-action d-flex justify-content-between"
            v-for="(item, key) in recommendProducts" :key="key">
              <span class="align-self-center">
                {{ item.title }} {{ item.price | currency }}
              </span>
              <div :style="{backgroundImage: `url(${item.imageUrl})`}"
              class="recom-item-pic bg-cover d-inline-block"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- Gotop button -->
    <button class="gotop-btn" id="gotopBtn" @click="gotop">
      <i class="fas fa-arrow-up gotop-arrow"></i>
    </button>
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

export default {
  data() {
    return {
      id: '',
      singleProduct: {
        num: 1,
      },
    };
  },
  computed: {
    allProducts() {
      return this.$store.state.CustomerProducts.products;
    },
    recommendProducts() {
      function getRandom(x) {
        return Math.floor(Math.random() * x);
      }
      let recommendObjList = [];
      let n = 0;
      const tempary = [];
      for (let i = 0; i < 3; i += 1) {
        n = getRandom(this.allProducts.length);
        tempary.push(n);
      }
      // 用 filter 把臨時的亂數陣列中不重複的數字抓出來
      const result = tempary.filter((item, index, ary) => ary.indexOf(item) === index);
      // 如果臨時亂數陣列的值不滿 3 個，就用已經在陣列裡的其中一個值 +1 作為要放入陣列的第三個值
      if (result.length < 3) {
        const num = result[1];
        const addnum = num + 1;
        if (result[0] !== addnum && result[1] !== addnum) {
          result.push(addnum);
        }
      }
      recommendObjList = [this.allProducts[result[0]],
        this.allProducts[result[1]],
        this.allProducts[result[2]]];
      return recommendObjList;
    },
  },
  methods: {
    getSingleProduct() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${vm.id}`;

      vm.$store.commit('LOADING', true);
      vm.$http.get(api).then((response) => {
        vm.$store.commit('LOADING', false);
        vm.singleProduct = response.data.product;
        vm.singleProduct.num = 1;
      });
    },
    getCart() {
      this.$store.dispatch('getCart');
    },
    removeItem(id) {
      this.$store.dispatch('removeCart', id);
    },
    addtoCart(id, qty = 1) {
      this.$store.dispatch('addtoCart', { id, qty });
      this.addtoCartModal();
    },
    getProducts(page = 1) {
      this.$store.dispatch('getCusProducts', page);
    },
    openRecomProduct(recomId) {
      this.id = recomId;
      this.$router.push(`/products/${this.id}`);
      this.getSingleProduct();
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
    this.id = this.$route.params.productId;
    this.getSingleProduct();
    this.getCart();
    this.getProducts();

    // 偵測頁面往下滑超過 400px 就讓 Gotop 按鈕出現
    function showBtnCondition() {
      if ($(this).scrollTop() > 400) {
        $('#gotopBtn').fadeIn();
      } else {
        $('#gotopBtn').fadeOut();
      }
    }
    $(window).scroll(showBtnCondition);
  },
};
</script>

<style lang="scss" scoped>
.breadcrumb {
  @media (min-width: 576px) {
    margin-left: -15px !important;
  }
}
.breadcrumb-item {
  font-size: 15px;
}
.breadcrumb-item.active {
  color: #f7f3f3;
}
.breadcrumb-item + .breadcrumb-item::before {
  color: #f7f3f3;
}
</style>
