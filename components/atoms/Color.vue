<template>
  <input type="color" v-model="colorValue" />
</template>

<script>
export default {
  props: ["value", "keyName"],
  computed: {
    colorValue: {
      get() {
        return this.value;
      },
      set(val) {
        let obj = {
          value: val,
          key: this.keyName
        };
        this.$emit("change", obj);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/sass/form.scss";

input[type="color"] {
  @include form;
  padding: 0px !important;
  height: 41px !important;
}
</style>