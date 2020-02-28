<template>
  <div class="board">
    <row v-for="(row, x) in board" :key="x" :row="row" :index_x="x" :level="level"></row>
    <modal :showModal="showModal" @closeModal="showModal = false"/>
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
      showModal: false
    };
  },
  watch: {
    checkBoard() {
      if (this.$store.getters.gameWon({ check: this.checkBoard })) {
        setTimeout(() => {
          this.showModal = true;
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

