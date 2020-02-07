<template>
  <div>
    <!--header-->
    <header class="header">
      <div
        class="jumbotron jumbotron-fluid bg-cover d-flex align-items-center"
        :style="[
          {
            backgroundImage: `url(${require('../assets/images/restaurant.jpg')})`
          },
          { height: '496px' }
        ]"
      >
        <div class="container d-flex justify-content-center">
          <h1 class="text-hide">島津家，最頂級的和牛燒肉</h1>
          <h2 class="text-dark text-bg p-3 bannerSlogan">
            一番上品な肉を捧げる。
          </h2>
        </div>
      </div>
      <!-- 毛玻璃 -->
      <div class="container">
        <div
          class="row justify-content-center no-gutters"
          style="margin-top: -100px;"
        >
          <div class="col-md-10">
            <div class="row">
              <a
                href="#"
                class="col frosted-wrap"
                @click.prevent="getText('本日精選'),readytoSlide()"
                :class="{ active: searchText === '本日精選' }"
              >
                <span class="frosted-text text-dark">本日精選</span>
                <div
                  class="frosted-image bg-cover"
                  :style="{
                    backgroundImage: `url(${require('../assets/images/meat1.jpg')})`
                  }"
                ></div>
              </a>
              <a
                href="#"
                class="col frosted-wrap"
                style="border-left: 1px solid #3a3226;"
                @click.prevent="getText('人氣推薦'),readytoSlide()"
                :class="{ active: searchText === '人氣推薦' }"
              >
                <span class="frosted-text text-dark">人氣推薦</span>
                <div
                  class="frosted-image bg-cover"
                  :style="{
                    backgroundImage: `url(${require('../assets/images/meat2.jpg')})`
                  }"
                ></div>
              </a>
              <a
                href="#"
                class="col frosted-wrap"
                style="border-left: 1px solid #3a3226;"
                @click.prevent="getText('新品上市'),readytoSlide()"
                :class="{ active: searchText === '新品上市' }"
              >
                <span class="frosted-text text-dark">新品上市</span>
                <div
                  class="frosted-image bg-cover"
                  :style="{
                    backgroundImage: `url(${require('../assets/images/meat4.jpg')})`
                  }"
                ></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  computed: {
    searchText() {
      return this.$store.state.CustomerProducts.searchText;
    },
  },
  methods: {
    getText(cateText) {
      this.$store.dispatch('getText', cateText);
    },
    readytoSlide() {
      this.$emit('clickCate');
    },
  },
  mounted() {
    this.getText('本日精選');
  },
};
</script>
