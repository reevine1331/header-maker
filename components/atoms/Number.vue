<template>
  <input type="number" v-model="numberValue" />
</template>

<script>
export default {
  props: ["value", "keyName"],
  computed: {
    numberValue: {
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

input[type="number"] {
  @include form;
}
</style>