<template>
  <div id="app">
    <div class="grid">
      <!-- <div @click="activate(0,0)" :class="{ off: !gridOn, on: gridOn }"></div>
      <div @click="activate()"></div>
      <div @click="activate()"></div>

      <div @click="activate()"></div>
      <div @click="activate()"></div>
      <div @click="activate()"></div>

      <div @click="activate()"></div>
      <div @click="activate()"></div>
      <div @click="activate()"></div>
      <p>{{ gameWon }}</p> -->
      <div v-for="row in board" :key="row.id">
          <div v-for="col in row" :key="col.id">

          </div>

      </div>

    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "app",
  data() {
    return {};
  },
  methods: {
    activate(x, y) {
      // this.board[x][y] = this.board[x][y] === 1 ? 0 : 1;
      this.isOn = this.board[0][0] == 1 ? true : false;
      // console.log('off ', this.board[0][0] === 0);
      // console.log('on ', this.board[0][0] === 1);
    }
  },
  computed: {
    ...mapGetters(["gameWon"]),
    gridOn() {
      console.log(this.$store.getters.isOn({ x: 0, y: 0 }));
    },
    board() {
      this.$store.getters.createBoard;
    }
  },
  created() {

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

  // .grid {
  //   display: grid;
  //   grid-template-rows: 100px 100px 100px;
  //   grid-template-columns: 100px 100px 100px;

  //   div {
  //     border: 1px solid;

  //     &.off {
  //       background-color: green;
  //     }
  //     &.on {
  //       background-color: #27f527;
  //     }
  //   }
  // }
}
</style>
