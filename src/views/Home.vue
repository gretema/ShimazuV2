<template>
  <div class="home">
    <Navbar />
    <Header />
    <section class="section my-md-10">
      <!-- (標語) 在 md 以上隱藏 -->
      <div class="row justify-content-center d-md-none no-gutters my-5">
        <div class="col-8">
          <h2 class="h4 my-5 text-center text-title">
            為什麼——<br />選擇日本和牛？
          </h2>
        </div>
      </div>
      <div class="bg-accent pt-5 pt-md-0">
        <div class="container">
          <div class="row">
            <!--圖片-->
            <div class="col-md-6 section-image-block">
              <div
                class="bg-cover h-100 section-image"
                :style="{
                  backgroundImage: `url(${require('../assets/images/meat6.jpg')})`
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
              <h2
                class="writing-md-vertical d-none d-md-block section-image-block text-title"
              >
                為什麼——<br />
                選擇日本和牛？
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
          <h2 class="h4 my-5 text-center text-title">
            為什麼——<br />一定要吃肉？
          </h2>
        </div>
      </div>
      <div class="bg-accent pt-5 pt-md-0">
        <div class="container">
          <div class="row flex-row-reverse">
            <!--圖片-->
            <div class="col-md-6 section-image-block">
              <div
                class="bg-cover h-100 section-image"
                :style="{
                  backgroundImage: `url(${require('../assets/images/meat8.jpg')})`
                }"
              ></div>
            </div>
            <!--垂直文字區-->
            <div class="col-md-6 vertical-content d-flex justify-content-end">
              <p class="writing-md-vertical text-light p-3">
                隨著現代人營養過剩及「吃肉致癌說」的興起，人們吃肉的天性被壓抑，食肉對健康的積極意義，正在被人們忽視和淡忘。
                鐵是人體必需的營養元素之一，當食物中攝取的鐵元素不足時，人體的體能、情緒、精神狀態、注意力等都會受到一定影響。
                而牛肉更是富含鐵質的肉類．更不要提當生活壓力過大時，一口咬下鮮嫩多汁的上等牛肉，那是多麼地舒壓啊！
              </p>
              <!-- (標語) 在 md 以上會顯示 -->
              <h2
                class="writing-md-vertical d-none d-md-block section-image-block text-title"
              >
                為什麼——<br />
                一定要吃肉？
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="my-5 my-md-9">
      <div class="container d-flex justify-content-center">
        <h2 class="h3 my-5 text-center text-title d-md-none">
          想吃肉——<br />是不需要理由的。
        </h2>
        <div class="d-flex flex-wrap flex-column justify-content-center">
          <h2 class="d-none d-md-block writing-md-vertical text-title">
            想吃肉——<br />
            是不需要理由的。
          </h2>
        </div>
      </div>
    </section>

    <!--Item Card-->
    <div class="container my-5 my-7">
      <ProductCard />
    </div>

    <Subscribe />
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Header from "../components/Header.vue";
import Subscribe from "../components/Subscribe.vue";
import Footer from "../components/Footer.vue";
import ProductCard from "../components/ProductCard.vue";

export default {
  name: "home",
  components: {
    Header,
    Navbar,
    Subscribe,
    Footer,
    ProductCard
  },
  methods: {
    getProducts(page = 1) {
      this.$store.dispatch("getCusProducts", page);
    }
  },
  created() {
    this.getProducts();
  }
};
</script>
