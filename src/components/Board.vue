<template>
  <v-layout align-center column>
    <v-flex xs12 class="board-container">
      <div class="board">
        <row
          v-for="(row, x) in board"
          :key="x"
          :row="row"
          :index_x="x"
          :level="level"
        ></row>
        <stats />
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import Row from "./Row.vue";
import Stats from "./Stats.vue";
import { eventBus } from "../main";

export default {
  props: ["level", "board"],
  data() {
    return {
      checkBoard: false
    };
  },
  watch: {
    checkBoard() {
      if (this.$store.getters.gameWon({ check: this.checkBoard })) {
        setTimeout(() => {
          this.$store.dispatch("setGameProgress", { gameWon: true });
        }, 500);
      }
    }
  },
  components: {
    Row,
    Stats
  },
  created() {
    // check if game is done
    eventBus.$on("checkBoard", event => {
      this.checkBoard = !this.checkBoard;
    });
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";

p {
  display: none;
  &.show {
    display: block;
  }
}

.board-container {
  position: relative;
}
</style>
