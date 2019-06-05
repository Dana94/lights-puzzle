<template>
  <div class="board">
    <row v-for="row in board" :key="row.id" row="row"></row>
  </div>
</template>

<script>
import Row from './Row.vue'

export default {
  computed: {
    board() {
      return this.$store.getters.createBoard;
    }
  },
  components: {
    Row
  }
};
</script>

<style lang="scss" scoped>
.board {
   
  }
</style>

