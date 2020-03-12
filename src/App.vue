<template>
  <div id="app">
    <v-container v-if="!levelSelected && !isGameWon">
      <Home />
    </v-container>
    <v-container v-else-if="isGameWon">
      <EndGame />
    </v-container>
    <v-container v-else>
      <Rules />
      <Board :level="level" :board="board" />
    </v-container>
  </div>
</template>

<script>
import Board from "./components/Board.vue";
import Rules from "./components/Rules.vue";
import Home from "./components/Home.vue";
import EndGame from "./components/EndGame.vue";

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
    },
    isGameWon() {
      return this.$store.getters.isGameWon;
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
    Home,
    EndGame
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

  // for some reason the stats component button styles aren't displaying when declared in the Stats.vue file
  // that's why they are here instead
  @media(min-width: 768px) {
    .stats {
      position: absolute;
      right: -9rem;
      top: 0;
      display: flex;
      flex-direction: column;
    }
  }
    .reset {
      background-color: $purple;
      color: $white;
    }

    .end {
      background-color: $blue;
      color: $white;
    }
}
</style>
