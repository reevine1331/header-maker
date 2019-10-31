<template>
  <div class="dashboard">
    <div class="dashboard_header">
      <div class="dashboard_wrapper">
        <div class="title">自作ヘッダーを作るアプリ</div>
        <Button v-bind:button="button" v-on:click="transCreate" />
      </div>
    </div>
    <library />
  </div>
</template>

<script>
import firebase from "~/plugins/firebase";

import Button from "~/components/atoms/Button";
import library from "~/components/organisms/library";

export default {
  components: {
    Button,
    library
  },
  data() {
    return {
      button: {
        label: "作る",
        color: 1,
        size: 16
      }
    };
  },
  methods: {
    transCreate: function() {
      this.$router.push({path: '/create'})
    }
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  height: 100%;
  overflow: auto;
  &_header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
    .title {
      text-align: center;
      text-indent: 4px;
      font-size: 32px;
      user-select: none;
      letter-spacing: 8px;
      margin: 32px;
    }
  }
  &_wrapper {
    text-align: center;
  }
}
</style>