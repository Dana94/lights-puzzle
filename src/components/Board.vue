<template>
  <div class="board">
    <row v-for="(row, x) in board" :key="x" :row="row" :index_x="x" :level="level" :ref="rowRef"></row>
    {{won}}
  </div>
</template>

<script>
import Row from "./Row.vue";
import { eventBus } from "../main";

export default {
  props: ['level', 'board'],
  data() {
    return {
      checkBoard: false,
      gameWon: false
    };
  },
  computed: {
    won() {
      if (this.$store.getters.gameWon({ check: this.checkBoard })) {
        setTimeout(() => {
          alert("You won! Woohoo!");
          this.$store.dispatch("reset");
        }, 500);
      }
    },
    rowRef () {
      return `row_${0}`;
    }
  },
  components: {
    Row
  },
  created() {
    console.log('board', this.$refs);
    // check if game is done
    eventBus.$on("checkBoard", event => {
      this.checkBoard = !this.checkBoard;
    });
  }
};
</script>

<style lang="scss" scoped>
p {
  display: none;
  &.show {
    display: block;
  }
}
</style>

