<template>
  <div id="app">
    <v-container v-if="!levelSelected">
      <v-layout align-center column>
        <Home />
      </v-layout>
    </v-container>
    <v-container v-else>
      <v-layout align-center column>
        <v-flex xs12>
          <Rules />
        </v-flex>
      </v-layout>
      <v-layout align-center column>
        <v-flex xs12>
          <Board />
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
import Home from './components/Home.vue';

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
    gridOn() {
      if (this.x || this.y) {
        return this.$store.getters.isOn({ row: this.x, col: this.y });
      } else {
        return false;
      }
    },
    moves() {
      return this.$store.getters.moves;
    },
    levelSelected () {
      return this.$store.getters.getLevel !== 0;
    }
  },
  created() {
    this.$store.dispatch("initBoard");
  },
  components: {
    Board,
    Rules,
    Home
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
