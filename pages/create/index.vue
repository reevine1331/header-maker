<template>
  <div class="create">
    <div class="create_header">
      <Button v-bind:button="buttonOutput" v-on:click="outputCanvas" />
      <Button v-bind:button="buttonSave" v-on:click="saveCanvas" />
    </div>
    <div class="create_content">
      <Canvas :canvas="canvas" />
      <Controller :canvas="canvas" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "~/plugins/firebase";

import Canvas from "~/components/organisms/Canvas";
import Controller from "~/components/organisms/Controller";

import Textfield from "~/components/atoms/Textfield";
import Select from "~/components/atoms/Select";
import Color from "~/components/atoms/Color";
import Number from "~/components/atoms/Number";

import Button from "~/components/atoms/Button";

export default {
  components: {
    Canvas,
    Controller,
    Textfield,
    Select,
    Color,
    Number,
    Button
  },
  computed: mapGetters({
    canvas: "canvas/get"
  }),
  data() {
    return {
      buttonOutput: {
        label: "出力",
        color: 1,
        size: 16
      },
      buttonSave: {
        label: "保存",
        color: 3,
        size: 16
      }
    };
  },
  methods: {
    outputCanvas: function() {
      var canvas = document.getElementById("canvas");
      let link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = this.canvas.text + ".png";
      link.click();
    },
    saveCanvas: function() {
      firebase
        .firestore()
        .collection("canvas")
        .add({
          ...this.canvas
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.create {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 4%;
  &_content {
    display: flex;
  }
  &_header {
    margin: 32px 0px;
    display: flex;
    justify-content: flex-end;
    button {
      margin-left: 20px;
    }
  }
}
</style>