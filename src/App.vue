<template>
  <div id="app">
    <div class="grid">
      <div v-for="(row, x) in board" :key="row.id" class="row">
        <div v-for="(col, y) in board" :key="col.id" class="col" @click="activate(x,y)"></div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";

export default {
  name: "app",
  data() {
    return {};
  },
  methods: {
    activate(x, y) {
      // this.board[x][y] = this.board[x][y] === 1 ? 0 : 1;
      //this.isOn = this.board[0][0] == 1 ? true : false;
      // console.log('off ', this.board[0][0] === 0);
      // console.log('on ', this.board[0][0] === 1);
      console.log(x,y);
    }
  },
  computed: {
    // ...mapGetters(["gameWon"]),
    // gridOn() {
    //   console.log(this.$store.getters.isOn({ x: 0, y: 0 }));
    // },
    board() {
      return this.$store.getters.createBoard;
    }
  },
  created() {
    this.$store.dispatch("initBoard");
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
    div.row {
      border: 1px solid;
      display: grid;
      grid-template-rows: 100px;
      grid-template-columns: 100px 100px 100px;

      div.col {
        border: 1px solid;
      }

      // &.off {
      //   background-color: green;
      // }
      // &.on {
      //   background-color: #27f527;
      // }
    }
  }
}
</style>
