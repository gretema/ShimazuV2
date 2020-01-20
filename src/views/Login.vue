<template>
  <div>
    <Navbar />
    <!--Login-->
    <section class="container my-md-6 px-0 px-md-3">
      <div class="row justify-content-center no-gutters">
        <div class="col-md-10">
          <div class="row flex-md-row-reverse no-gutters">
            <!-- 會員登入 (手機板) -->
            <div class="col-md-6 text-center w-100 bg-primary p-5 d-md-none">
              <h1 class="my-2 text-white">
                會員登入
              </h1>
            </div>
            <!-- 連結社群 -->
            <div class="col-md-6 py-md-3 text-center d-flex">
              <div class="bg-md-accent px-md-5 py-md-7 w-100 align-self-center">
                <h2 class="h4 text-light mb-5 d-none d-md-block">
                  —— 連結社群帳號 ——
                </h2>
                <div class="row no-gutters">
                  <div class="col-6 col-md-12 mb-md-4">
                    <button
                      class="btn btn-block btn-lg h-100 bg-light rounded-0"
                    >
                      <img
                        src="../assets/images/facebookLogo.svg"
                        width="105"
                        class="img-fluid"
                      />
                    </button>
                  </div>
                  <div class="col-6 col-md-12 mb-md-4">
                    <button
                      class="btn btn-block btn-lg h-100 bg-light rounded-0 py-2"
                    >
                      <img
                        src="../assets/images/googleLogo.svg"
                        width="95"
                        class="img-fluid"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- 會員登入 (電腦版) + 表格 -->
            <div class="col-md-6 px-0">
              <div class="text-center w-100 bg-primary p-3 d-none d-md-block">
                <h2 class="my-2 text-white">
                  會員登入
                </h2>
              </div>
              <form
                class="p-3 p-md-5 pt-md-4 bg-light needs-validation"
                novalidate
                @submit.prevent="signin"
              >
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span
                      class="input-group-text bg-light border-right-0 pl-4"
                      id="basic-addon"
                      style="font-size: 18px; width: 60px;"
                    >
                      <i class="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    type="email"
                    class="form-control custom-form-input p-5"
                    v-model="user.username"
                    placeholder="帳號 / 電子郵件"
                    required
                  />
                  <div class="invalid-feedback">
                    帳號或電子郵件錯誤
                  </div>
                </div>
                <div class="input-group my-2">
                  <div class="input-group-prepend">
                    <span
                      class="input-group-text bg-light border-right-0 pl-4"
                      id="basic-addon"
                      style="font-size: 18px; width: 60px;"
                    >
                      <i class="fas fa-lock"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    class="form-control custom-form-input p-5 "
                    v-model="user.password"
                    placeholder="請輸入密碼"
                    required
                  />
                  <div class="invalid-feedback">
                    密碼錯誤
                  </div>
                </div>
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="rememberMe"
                  />
                  <label class="custom-control-label" for="rememberMe"
                    >記住我</label
                  >
                </div>
                <button
                  type="submit"
                  class="btn btn-block btn-lg btn-primary text-white my-3 rounded-0"
                >
                  登入帳號
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
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
      user: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    signin() {
      const api = `${process.env.VUE_APP_APIPATH}/admin/signin`;
      const vm = this;
      this.$store.commit("LOADING", true);
      this.$http.post(api, vm.user).then(response => {
        vm.$store.commit("LOADING", false);
        if (response.data.success) {
          vm.$router.push("/admin/products");
        } else {
          let message = response.data.message;
          let status = "danger";
          vm.$store.dispatch("updateMessage", { message, status });
        }
      });
    }
  }
};
</script>
