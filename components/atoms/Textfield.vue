<template>
  <input type="text" v-model="textValue" />
</template>

<script>
export default {
  props: ["value", "keyName"],
  computed: {
    textValue: {
      get() {
        return this.value;
      },
      set(val) {
        let obj = {
          value: val,
          key: this.keyName
        }
        this.$emit("change", obj);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/sass/form.scss";

input[type="text"] {
  @include form;
}
</style>