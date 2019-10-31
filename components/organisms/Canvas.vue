<template>
  <div id="canvas_wrapper" v-bind:style="{height: canvasHeight + 'px'}">
    <canvas id="canvas" width="1500" height="500"></canvas>
  </div>
</template>

<script>
export default {
  props: ["canvas"],
  data() {
    return {
      windowWidth: null,
      canvasHeight: 0
    };
  },
  methods: {
    handleResize: function() {
      this.windowWidth = window.innerWidth;
      this.canvasHeight = document.getElementById("canvas").clientWidth / 3;
    },
    draw: function() {
      var canvas = document.getElementById("canvas");
      var ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.beginPath();
      ctx.rect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = this.canvas.backgroundColor;
      ctx.fill();

      ctx.beginPath();
      ctx.fillStyle = this.canvas.fontColor;
      ctx.font = this.canvas.fontSize * 5 + "px " + this.canvas.fontFamily;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(
        this.canvas.text,
        canvas.width * (this.canvas.positionX / 100),
        canvas.height * (this.canvas.positionY / 105)
      );
      ctx.fill();
    }
  },
  mounted() {
    this.handleResize();
    this.draw();
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy: function() {
    window.removeEventListener("resize", this.handleResize);
  },
  watch: {
    canvas: {
      handler: function() {
        this.draw();
      },
      deep: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/sass/font-family.scss";

#canvas_wrapper {
  width: 100%;
  border: 1px solid black;
  position: relative;
  overflow: hidden;
}
#canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>