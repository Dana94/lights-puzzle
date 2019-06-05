<template>
  <div class="board">
    <row v-for="(row, x) in board" :key="x" :row="row" :index_x="x"></row>
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

</style>

