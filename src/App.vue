<template>
  <div id="app">
    <div class="grid">
      <div @click="activate(0,0)" :class="{ off: !isOn, on: isOn }"></div>
      <div @click="activate()"></div>
      <div @click="activate()"></div>

      <div @click="activate()"></div>
      <div @click="activate()"></div>
      <div @click="activate()"></div>

      <div @click="activate()"></div>
      <div @click="activate()"></div>
      <div @click="activate()"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      board: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
    };
  },
  methods: {
    activate(x,y) {
      // this.board[x][y] = this.board[x][y] === 1 ? 0 : 1;
      this.isOn = this.board[0][0] == 1 ? true : false;
      // console.log('off ', this.board[0][0] === 0);
      // console.log('on ', this.board[0][0] === 1);
    }
  },
  computed: {
    isOn() {
      return this.board[0][0] === 1;
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;

  .grid {
    display: grid;
    grid-template-rows: 100px 100px 100px;
    grid-template-columns: 100px 100px 100px;

    div {
      border: 1px solid;

      &.off {
        background-color: green;
      }
      &.on {
        background-color: #27f527;
      }
    }
  }
}
</style>
