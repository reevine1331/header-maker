<template>
  <div class="select_wrapper">
    <select v-model="selectedValue">
      <option v-for="(opt, index) in list" v-bind:key="index">{{ opt }}</option>
    </select>
  </div>
</template>

<script>
export default {
  props: ["value", "keyName", "list"],
  computed: {
    selectedValue: {
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
@import "~/assets/sass/color.scss";

.select_wrapper {
  width: 100%;
  position: relative;
  display: inline-block;
  &:before {
    content: "";
    width: 6px;
    height: 6px;
    border: 0px;
    border-bottom: solid 2px $tertiary;
    border-right: solid 2px $tertiary;
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    top: 50%;
    right: 10px;
    margin-top: -4px;
  }
}

select {
  @include form;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  height: 40px;
  background: transparent;
  position: relative;
  z-index: 1;
  border-radius: 0px;
}
</style>