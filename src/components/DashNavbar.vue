<template>
  <div>
    <nav class="navbar navbar-dark fixed-top bg-dark flex-nowrap p-2 shadow">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">後台管理系統</a>

      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="#" @click.prevent="signout">登出</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    signout() {
      const api = `${process.env.VUE_APP_APIPATH}/logout`;
      const vm = this;
      this.$http.post(api).then(response => {
        if (response.data.success) {
          vm.$router.push("/");
        }
      });
    }
  }
};
</script>
