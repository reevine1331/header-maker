<template>
  <div class="controller">
    <div class="controller_row">
      <div class="controller_component">
        <div class="controller_title">テキスト</div>
        <Textfield v-model="canvas.text" keyName="text" @change="changeValue" />
      </div>
      <div class="controller_component">
        <div class="controller_title">フォントサイズ</div>
        <Select
          v-model="canvas.fontSize"
          keyName="fontSize"
          :list="font_size_list"
          @change="changeValue"
        />
      </div>
      <div class="controller_component">
        <div class="controller_title">フォント</div>
        <Select
          v-model="canvas.fontFamily"
          keyName="fontFamily"
          :list="font_family_list"
          @change="changeValue"
        />
      </div>
    </div>
    <div class="controller_row">
      <div class="controller_component">
        <div class="controller_title">フォントカラー</div>
        <Color v-model="canvas.fontColor" keyName="fontColor" @change="changeValue" />
      </div>
      <div class="controller_component">
        <div class="controller_title">背景カラー</div>
        <Color v-model="canvas.backgroundColor" keyName="backgroundColor" @change="changeValue" />
      </div>
      <div class="controller_component">
        <div class="controller_title">文字位置</div>
        <div class="controller_double">
          <div class="controller_double_component">
            <div class="controller_double_component_label">x</div>
            <Number v-model="canvas.positionX" keyName="positionX" @change="changeValue" />
          </div>
          <div class="controller_double_component">
            <div class="controller_double_component_label">y</div>
            <Number v-model="canvas.positionY" keyName="positionY" @change="changeValue" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Textfield from "~/components/atoms/Textfield";
import Select from "~/components/atoms/Select";
import Color from "~/components/atoms/Color";
import Number from "~/components/atoms/Number";

import font_size_list from "~/plugins/font_size";
import font_family_list from "~/plugins/font_family";

export default {
  mixins: [font_size_list, font_family_list],
  components: {
    Textfield,
    Select,
    Color,
    Number
  },
  props: ["canvas"],
  methods: {
    changeValue: function(obj) {
      this.$store.commit("canvas/setValue", obj);
    }
  }
};
</script>

<style lang="scss" scoped>
.controller {
  width: 80%;
  margin: 0px 32px;
  display: flex;
  &_row {
    margin: 0px 20px;
    width: 100%;
    display: inline-block;
  }
  &_component {
    margin-bottom: 40px;
    box-sizing: border-box;
  }
  &_title {
    margin-bottom: 4px;
  }
  &_double {
    display: flex;
  }
  &_double_component {
    display: flex;
    margin-right: 16px;
  }
  &_double_component_label {
    padding: 8px 0px;
    margin-right: 16px;
  }
}
</style>