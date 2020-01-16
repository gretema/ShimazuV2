<template>
  <div id="app">
    <loading :active.sync="isLoading"></loading>

    <router-view />
  </div>
</template>

<style lang="scss">
@import "./assets/all";
</style>

<script>
export default {
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    }
  }
};
</script>
