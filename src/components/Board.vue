<template>
  <div class="board">
    <row v-for="(row, x) in board" :key="x" :row="row" :index_x="x" :level="level"></row>
    {{won}}
    <modal :dialog="dialog" @reset="dialog = false"/>
    <stats />
  </div>
</template>

<script>
import Row from "./Row.vue";
import Stats from './Stats.vue';
import Modal from './Modal.vue';
import { eventBus } from "../main";

export default {
  props: ['level', 'board'],
  data() {
    return {
      checkBoard: false,
      gameWon: false,
      dialog: false
    };
  },
  computed: {
    won() {
      if (this.$store.getters.gameWon({ check: this.checkBoard })) {
        setTimeout(() => {
          this.dialog = true;
          // alert("You won! Woohoo!");
          // this.$store.dispatch("reset");
        }, 500);
      }
    }
  },
  components: {
    Row,
    Stats,
    Modal
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
p {
  display: none;
  &.show {
    display: block;
  }
}
</style>

