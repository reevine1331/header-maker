<template>
  <div class="header">
    <div class="header_title" @click="transDashboard">自作ヘッダーを作るアプリ</div>
    <div class="header_title" @click="transLogin" v-if="!$store.state.auth.authUser">ログイン</div>
    <div class="header_title" @click="transLogout" v-else>ログアウト</div>
  </div>
</template>

<script>
import Button from "~/components/atoms/Button";

export default {
  components: {
    Button
  },
  methods: {
    transCreate: function() {
      this.$router.push({ path: "/create" });
    },
    transDashboard: function() {
      this.$router.push({ path: "/" });
    },
    transLogin: function() {
      this.$router.push({ path: "/login" });
    },
    transLogout: function() {
      this.$store.dispatch("auth/logout");
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/sass/color.scss";

.header {
  width: 100%;
  height: 60px;
  padding: 0px 24px;
  background-color: $primary;
  box-sizing: border-box;
  opacity: 0.8;
  position: fixed;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &_title {
    color: white;
    user-select: none;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>