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
          <Board :level="level" />
          <div class="stats">
            <div class="title align-self-center">Moves: {{moves}}</div>
            <div>
              <v-btn class="end" @click="end">End Game</v-btn>
              <v-btn class="reset" @click="reset">Reset</v-btn>
            </div>
          </div>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
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
    end () {
      this.$store.dispatch('setLevel', 0);
    },
    reset() {
      this.$store.dispatch("reset");
    }
  },
  computed: {
    gridOn () {
      if (this.x || this.y) {
        return this.$store.getters.isOn({ row: this.x, col: this.y });
      } else {
        return false;
      }
    },
    moves () {
      return this.$store.getters.moves;
    },
    level () {
      return this.$store.getters.getLevel;
    },
    levelSelected () {
      return this.level !== 0;
    },
  },
  watch: {
    level () {
      this.$store.dispatch("initBoard");
    }
  },
  created() {
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
    display: flex;
    justify-content: space-between;

    .reset {
      background-color: #551155;
      color: white;
    }

    .end {
      background-color: #1b3344;
      color: white;
    }
  }
}
</style>
