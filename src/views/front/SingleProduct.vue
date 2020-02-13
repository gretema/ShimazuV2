<template>
  <div>
    <div class="container mb-10 py-4">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-transparent pl-1 mb-0">
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
        <div class="col-md-7 mb-5">
          <h2 class="h3 text-center bg-accent text-white p-2 d-md-none">
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
              <option value="0" disabled selected>請選擇數量</option>
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
        <div class="col-md-7">
          <h3 class="h4 text-white">產品特色</h3>
          <p class="text-white">{{ singleProduct.content }}</p>
          <h3 class="h4 text-white">大自然天然放牧</h3>
          <div class="cattles-picbox my-2"></div>
          <p class="text-white">
            不同於人工室內餵養，讓牛隻有充足的空間活動與成長，
            擁有全天然的生長環境。
          </p>
          <h3 class="h4 text-white">日本食肉格付協會認證</h3>
          <div class="wagyu-admit-picbox my-2"></div>
          <small class="text-white">(圖：日本食肉格付協會)</small>
          <p class="text-white">只有純正的日本產和牛，才能使用和牛統一標誌。
            本店所販售之和牛均擁有該標章，從出生證明、血統紀錄到屠宰販售的相關資料，都能追溯確認。
          </p>
          <div class="notice text-white">
            <h3 class="h4">購買須知</h3>
            <h4 class="h5">▼商品成分</h4>
            牛肉
            ＊商品皆以原物料直接切割，圖片僅供參考，每批商品油花可能會有所差異，如可接受再請下單訂購。
            （如有任何疑慮請先與我們連繫確認）
            <h4 class="h5">▼保存期限</h4>
            冷凍-18℃可保存300天，詳情請見商品標示
            <h4 class="h5">▼保存方式</h4>
            請置於冷凍-18℃保存
            <h4 class="h5">▼解凍方式</h4>
            請先將預備要料理之牛肉在未拆封前，置於冰箱冷藏室自然解凍
            ＊如未食用完畢之解凍牛肉，請使用保鮮袋或保鮮盒放置於冷藏室，最長可保存不超過24小時
            ＊勿將產品反覆回溫、冷凍以免影響品質，產品開封後請一次食用完畢，以免因儲存不當而影響品質
            <h4 class="h5">▼注意事項</h4>
            1. 圖片僅供參考，商品內容物以實際收到商品為主。
            2. 商品若於送達時即有損壞，請拍照存證並立即與我們聯繫。
            <h4 class="h5">▼退換貨須知</h4>
            基於食品安全衛生考量，生鮮易腐敗商品依法已排除適用七天鑑賞期，恕無法退換貨。
            當您收到商品後，請立即確認商品品項及數量是否正確，若收到商品與訂單內容不符，或商品本身有瑕疵
            （舉凡：運送途中損壞、商品解凍），請您立即拍照存證，並請於收到商品後一天內，
            備妥您的訂單編號或訂購人相關資料，與我們聯繫，我們會立即為您處理退換貨事宜。
            ※退換貨處理期間，請留存發票並保持商品整體完整，需要冷凍保存之商品務必置於冷凍庫保存，
            若商品已拆封，或是因消費者對商品的不當處理及保存方式錯誤而造成商品損壞變質，
            則本公司將有保留退換貨的權利。
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: '',
      singleProduct: {},
    };
  },

  methods: {
    getSingleProduct() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${vm.id}`;

      vm.$store.commit('LOADING', true);
      vm.$http.get(api).then((response) => {
        vm.$store.commit('LOADING', false);
        vm.singleProduct = response.data.product;
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
    },
  },
  created() {
    this.id = this.$route.params.productId;
    this.getSingleProduct();
    this.getCart();
  },
};
</script>

<style lang="scss" scoped>
$images: '~@/assets/images/';

.breadcrumb-item.active {
  color: #f7f3f3;
}
.breadcrumb-item + .breadcrumb-item::before {
  color: #f7f3f3;
}
.buy-area {
  height: 380px;
  @media (max-width: 576px) {
    height: auto;
  }
}
.cattles-picbox{
  background: url($images+'/cattles-eating-grass.jpg');
  background-size: cover;
  background-position: center center;
  height: 300px;
}
.wagyu-admit-picbox {
  background: url($images+'/wagyu.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 600px;
}
</style>
