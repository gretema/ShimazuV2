<template>
  <div class="home">
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
                style="background-image: url(../src/assets/images/meat6.jpg);"
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
                style="background-image: url(../src/assets/images/meat8.jpg);"
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
      <div class="row">
        <div class="col-md-4">
          <div class="item-card mb-4">
            <!-- item-image -->
            <div
              class="item-image bg-cover"
              style="background-image: url(../assets/images/meat1.jpg);"
            >
              <div class="item-tag">本日精選</div>
              <div class="item-icon text-primary">
                <i class="far fa-heart heart-border"></i>
                <i class="fas fa-heart heart-full d-none"></i>
              </div>
            </div>
            <!-- item-info -->
            <div
              class="row no-gutters item-info text-light d-flex justify-content-center"
            >
              <div class="col item-name p-3">薩摩丁骨牛排</div>
              <div class="col item-price text-strong p-3">
                <strong>NT$ 2,900</strong>
              </div>
            </div>
            <!-- item-cart -->
            <a href="#" class="btn btn-block btn-primary item-cart"
              >加入購物車</a
            >
          </div>
        </div>
        <div class="col-md-4">
          <div class="item-card mb-4">
            <!-- item-image -->
            <div
              class="item-image bg-cover"
              style="background-image: url(../assets/images/meat2.jpg);"
            >
              <div class="item-tag">本日精選</div>
              <div class="item-icon text-primary">
                <i class="far fa-heart heart-border"></i>
                <i class="fas fa-heart heart-full d-none"></i>
              </div>
            </div>
            <!-- item-info -->
            <div
              class="row no-gutters item-info text-light d-flex justify-content-center"
            >
              <div class="col item-name p-3">石垣沙朗牛排</div>
              <div class="col item-price text-strong p-3">
                <strong>NT$ 2,500</strong>
              </div>
            </div>
            <!-- item-cart -->
            <a href="#" class="btn btn-block btn-primary item-cart"
              >加入購物車</a
            >
          </div>
        </div>
        <div class="col-md-4">
          <div class="item-card mb-4">
            <!-- item-image -->
            <div
              class="item-image bg-cover"
              style="background-image: url(../assets/images/meat4.jpg);"
            >
              <div class="item-tag">本日精選</div>
              <div class="item-icon text-primary">
                <i class="far fa-heart heart-border"></i>
                <i class="fas fa-heart heart-full d-none"></i>
              </div>
            </div>
            <!-- item-info -->
            <div
              class="row no-gutters item-info text-light d-flex justify-content-center"
            >
              <div class="col item-name p-3">飛驒牛燒烤片</div>
              <div class="col item-price text-strong p-3">
                <strong>NT$ 1,800</strong>
              </div>
            </div>
            <!-- item-cart -->
            <a href="#" class="btn btn-block btn-primary item-cart"
              >加入購物車</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home"
  // components: {
  //   HelloWorld
  // }
};
</script>
