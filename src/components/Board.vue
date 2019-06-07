<template>
  <div class="board">
    <row v-for="(row, x) in board" :key="x" :row="row" :index_x="x"></row>
    <p :class="{show: won}">You won!</p>
  </div>
</template>

<script>
import Row from "./Row.vue";
import { eventBus } from "../main";

export default {
  data() {
    return {
      check: false,
      gameWon: false
    };
  },
  computed: {
    board() {
      return this.$store.getters.createBoard;
    },
    won() {
      return this.$store.getters.gameWon({
        check: this.check
      });
    }
  },
  components: {
    Row
  },
  created() {
    eventBus.$on("checkBoard", event => {
      this.check = !this.check;
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

