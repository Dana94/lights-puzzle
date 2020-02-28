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
        <v-flex xs12 class="board-container">
          <Board :level="level" :board="board" />
        </v-flex>
      </v-layout>
      <v-layout row wrap> </v-layout>
    </v-container>
  </div>
</template>

<script>
import Board from "./components/Board.vue";
import Rules from "./components/Rules.vue";
import Home from "./components/Home.vue";

export default {
  name: "app",
  computed: {
    board() {
      if (this.levelSelected) {
        return this.$store.getters.getBoard;
      }
    },
    level() {
      return this.$store.getters.getLevel;
    },
    levelSelected() {
      return this.level !== 0;
    }
  },
  watch: {
    level() {
      if (this.level !== 0) {
        this.$store.dispatch("initBoard");
      }
    }
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
  color: $text;
  margin-top: 60px;
  display: flex;
  justify-content: center;

  .board-container {
    position: relative;

    // for some reason the stats component button styles aren't displaying when declared in the Stats.vue file
    // that's why they are here instead
    .stats {
      position: absolute;
      right: -9rem;
      top: 0;
      display: flex;
      flex-direction: column;

      .reset {
        background-color: $purple;
        color: $white;
      }

      // .end {
      //   background-color: $blue;
      //   color: $white;
      // }
    }
  }
}
</style>
