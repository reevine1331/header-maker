export const state = () => ({
  canvas: {
    text: "",
    fontSize: "16",
    fontFamily: "Noto Serif JP",
    fontColor: "#000000",
    backgroundColor: "#FFFFFF",
    positionX: 50,
    positionY: 50,
  }
})

export const mutations = {
  setValue(state, obj) {
    state.canvas[obj.key] = obj.value;
  }
}

export const getters = {
  get(state) {
    return state.canvas
  }
}
