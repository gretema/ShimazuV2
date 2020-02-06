<template>
  <div>
    <!-- 訂閱郵件 -->
    <section class="py-5 bg-primary-light">
      <div class="container">
        <div class="row d-flex justify-content-between">
          <!-- 左側 -->
          <div
            class="col-md-6 d-flex align-items-center justify-content-center
            justify-content-md-start mb-4 mb-md-0"
          >
            <img
              src="../assets/images/iconfinder_Food_C225_2427885.svg"
              height="40"
            />
            <span
              class="h4 text-white mb-0 mx-3 subscribe-text"
              style="letter-spacing: 2px;"
              >訂閱你我的鮮嫩郵件</span
            >
          </div>
          <!-- 右側 -->
          <div class="col-md-6 p-md-0">
            <div class="input-group ml-auto subscribe-size">
              <div class="input-group-prepend">
                <span
                  class="input-group-text bg-primary text-light border-0 pl-4"
                  id="basic-addon"
                  style="font-size: 18px; width: 60px;"
                >
                  <i class="fas fa-envelope"></i>
                </span>
              </div>
              <input
                type="email"
                class="form-control custom-form-input p-5"
                aria-label="user's email"
                aria-describedby="button-addon"
              />
              <div class="input-group-append">
                <button
                  class="btn btn-primary p-3"
                  type="submit"
                  id="button-addon"
                  style="font-size: 18px; width: 60px"
                >
                  <i class="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.subscribe-text {
  font-size: 24px !important;
}
// 訂閱 input
.subscribe-size {
  width: 345px;
  @media (min-width: 768px) {
    width: 445px;
  }
}
</style>
