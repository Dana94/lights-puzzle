<template>
  <div id="app">
    <div class="grid">
      <div v-for="(row, row_x) in board" :key="row_x.id" class="row">
        <div
          v-for="(col, col_y) in board"
          :key="col_y.id"
          class="col"
          @click="activate(row_x,col_y)"
          :class="{off: !gridOn && row_x != x && col_y != y, on: gridOn && row_x == x && col_y == y}"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "app",
  data() {
    return {
      x: "",
      y: ""
    };
  },
  methods: {
    activate(row_x, col_y) {
      this.x = row_x;
      this.y = col_y;
    }
  },
  computed: {
    // ...mapGetters(["gameWon"]),
    gridOn() {
      console.log("gridon", "x: ", this.x, "y:", this.y);
      if (this.x || this.y) {
        console.log(this.x, this.y, this.$store.getters.isOn({ row: this.x, col: this.y }))
        return this.$store.getters.isOn({ row: this.x, col: this.y });
      } else {
        return false;
      }
    },
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

        &.off {
          background-color: green;
        }
        &.on {
          background-color: #27f527;
        }
      }
    }
  }
}
</style>
