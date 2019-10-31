<template>
  <div class="login">
    <div class="login_wrapper">
      <div class="login_title">
        <div class="label">ログイン</div>
      </div>
      <div class="login_content">
        <div class="login_content_label" @click="login('google')">Google</div>
        <div class="login_content_label">Twitter</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    login(plaform) {
      this.$store.dispatch("auth/login", plaform);
    }
  }
};
</script>


<style lang="scss" scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  &_wrapper {
    width: 100%;
  }
  .login_title {
    text-align: center;
    .label {
      font-size: 16px;
    }
  }
  &_content {
    width: 100%;
    padding: 16px 36%;
    display: flex;
    justify-content: space-between;
  }
  &_content_label {
    text-decoration: underline;
    user-select: none;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>