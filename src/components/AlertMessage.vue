<template>
  <div class="message-alert">
    <div
      class="alert alert-dismissible"
      :class="'alert-' + item.status"
      v-for="(item, i) in messages"
      :key="i"
    >
      {{ item.message }}
      <button
        type="button"
        class="close"
        @click="removeMessage(i)"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // messages: []
    };
  },
  computed: {
    messages() {
      return this.$store.state.messages;
    }
  },
  methods: {
    updateMessage(message, status) {
      this.$store.dispatch("updateMessage", { message, status });
    },
    removeMessage(num) {
      this.$store.dispatch("removeMessage", num);
    },
    removeMessageWithTiming(timestamp) {
      this.$store.dispatch("removeMessageWithTiming", timestamp);
    }
  },
  created() {
    //const vm = this;
    // 自定義名稱 'messsage:push'
    // message: 傳入參數
    // status: 樣式，預設值為 warning
    // 外層用 on 註冊事件，內層要用時使用 $emit 呼叫
    // vm.$bus.$on("message:push", (message, status = "warning") => {
    //   vm.updateMessage(message, status);
    // });
  }
};
</script>

<style lang="scss" scoped>
.message-alert {
  position: fixed;
  max-width: 50%;
  top: 56px;
  right: 20px;
  z-index: 1100;
}
</style>
