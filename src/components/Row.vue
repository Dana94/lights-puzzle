<template>
  <div class="row">
    <column v-for="(col, j) in row" :key="j" :index_y="j" :index_x="index_x"></column>
  </div>
</template>

<script>
import Column from "./Column.vue";
export default {
  props: ["row", "index_x"],
  components: {
    Column
  }
};
</script>

<style lang="scss" scoped>
.row {
  display: grid;
  grid-template-rows: 100px;
  grid-template-columns: 100px 100px 100px;
  margin-bottom: 10px;
  grid-gap: 10px;
}
</style>
