<template>
  <div>
    <Header />
    <nuxt />
  </div>
</template>

<script>
import Header from "~/components/molecules/Header";

export default {
  components: {
    Header
  }
};
</script>

<style lang="scss">
@import "~/assets/sass/font-family.scss";

* {
  font-family: "Noto Serif JP", serif;
  box-sizing: border-box;
}

html {
  height: 100%;
}

body {
  margin: 0 !important;
  width: 100%;
  height: 100%;
  z-index: 0;
}

@media screen and (max-width: 499px) {
  .title {
    font-size: 28px !important;
  }

  .create_content {
    display: block !important;
  }

  .controller {
    display: inline-block !important;
    margin: 0 !important;
    width: 100% !important;
  }

  input[type="text"] {
    text-align: center !important;
  }

  .create {
    padding: 16% 8% !important;
  }

  #canvas_wrapper {
    margin-bottom: 24px !important;
  }

  .controller_row {
    margin: 0 !important;
  }
}
</style>