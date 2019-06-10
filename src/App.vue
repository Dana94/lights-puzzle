<template>
  <div id="app">
    <v-container>
      <v-layout align-center column>
        <v-flex xs12>
          <rules></rules>
        </v-flex>
      </v-layout>
      <v-layout align-center column>
        <v-flex xs12>
          <board></board>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <div class="stats">
          <div class>Moves: {{moves}}</div>
          <v-btn class="reset" @click="reset">Reset</v-btn>
        </div>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Board from "./components/Board.vue";
import Rules from "./components/Rules.vue";

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
    },
    reset() {
      this.$store.dispatch("reset");
    }
  },
  computed: {
    // ...mapGetters(["gameWon"]),
    gridOn() {
      console.log("gridon", "x: ", this.x, "y:", this.y);
      if (this.x || this.y) {
        console.log(
          this.x,
          this.y,
          this.$store.getters.isOn({ row: this.x, col: this.y })
        );
        return this.$store.getters.isOn({ row: this.x, col: this.y });
      } else {
        return false;
      }
    },
    moves() {
      return this.$store.getters.moves;
    }
  },
  created() {
    this.$store.dispatch("initBoard");
  },
  components: {
    Board,
    Rules
  }
};
</script>

<style lang="scss">
@import "./assets/base.scss";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;

  .stats {
    width: 320px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    .reset {
      background-color: #551155;
      color: white;
    }
  }
}
</style>
