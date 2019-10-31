<template>
  <button
    v-bind:style="{fontSize: button.size + 'px'}"
    v-bind:class="[
    button.color === 1 ? 'primary' : '',
    button.color === 2 ? 'secondary' : '',
    button.color === 3 ? 'tertiary' : '',
    ]"
    v-on:click="click"
  >{{ button.label }}</button>
</template>

<script>
export default {
  props: ["button"],
  methods: {
    click: function() {
      this.$emit("click");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/sass/color.scss";

button {
  padding: 4px 28px;
  border: none;
  border-radius: 4px;
  color: white;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
}

.primary {
  background-color: $primary;
}

.secondary {
  background-color: $secondary;
}

.tertiary {
  background-color: $tertiary;
}
</style>