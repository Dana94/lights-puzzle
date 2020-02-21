<template>
  <div class="board">
    <row v-for="(row, x) in board" :key="x" :row="row" :index_x="x" :level="level"></row>
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
      check: false,
      gameWon: false
    };
  },
  computed: {
    won() {
      if (this.$store.getters.gameWon({ check: this.check })) {
        setTimeout(() => {
          alert("You won! Woohoo!");
          this.$store.dispatch("reset");
        }, 500);
      }
    }
  },
  components: {
    Row
  },
  created() {
    // check if game is done
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

