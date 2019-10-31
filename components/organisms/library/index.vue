<template>
  <div class="library">
    <div class="library_title">みんなのヘッダー</div>
    <contents />
  </div>
</template>

<script>
import contents from "~/components/organisms/library/contents";
export default {
  components: {
    contents
  }
};
</script>

<style lang="scss" scoped>
.library {
  width: 100%;
  height: 400px;
  border: 1px solid black;
  &_title {
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    margin: 24px;
  }
}
</style>