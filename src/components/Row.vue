<template>
  <div
    class="row"
    :class="{
      rowLevel1: level === 1,
      rowLevel2: level === 2,
      rowLevel3: level === 3
    }"
  >
    <column
      v-for="(col, j) in row"
      :key="j"
      :index_y="j"
      :index_x="index_x"
    ></column>
  </div>
</template>

<script>
import Column from "./Column.vue";
export default {
  props: ["row", "index_x", "level"],
  components: {
    Column
  }
};
</script>

<style lang="scss" scoped>
.row {
  display: grid;
  grid-template-rows: 100px;
  margin-bottom: 10px;
  grid-gap: 10px;

  &.rowLevel1 {
    grid-template-columns: repeat(3, 100px);
  }
  &.rowLevel2 {
    grid-template-columns: repeat(5, 100px);
  }
  &.rowLevel3 {
    grid-template-columns: repeat(7, 100px);
  }
}
</style>
