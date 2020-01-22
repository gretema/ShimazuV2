<template>
  <div>
    <!--Login-->
    <section class="container mt-5 mb-8 px-0 px-md-3">
      <div class="row justify-content-center no-gutters">
        <div class="col-md-6">
          <div class="text-center w-100 bg-primary p-3">
            <h2 class="my-2 text-white">
              會員登入
            </h2>
          </div>
          <ValidationObserver
            class="p-3 p-md-5 pt-md-4 bg-light needs-validation"
            v-slot="{ invalid }"
            tag="form"
            @submit.prevent="signin"
          >
            <ValidationProvider
              name="帳號"
              rules="required | email"
              v-slot="{ failed, errors }"
              tag="div"
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
                  :class="{ 'is-invalid': failed }"
                  v-model="user.username"
                  placeholder="電子郵件"
                  name="account"
                />
              </div>
              <div class="text-danger">
                {{ errors[0] }}
              </div>
            </ValidationProvider>

            <ValidationProvider
              class="form-group"
              name="密碼"
              rules="required"
              v-slot="{ failed, errors }"
              tag="div"
            >
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
                  class="form-control custom-form-input p-5"
                  :class="{ 'is-invalid': failed }"
                  v-model="user.password"
                  placeholder="請輸入密碼"
                  name="password"
                />
              </div>
              <div class="text-danger">
                {{ errors[0] }}
              </div>
            </ValidationProvider>

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
              登入
            </button>
          </ValidationObserver>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
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
