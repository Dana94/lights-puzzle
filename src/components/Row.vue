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
  margin-bottom: 10px;
  grid-gap: 5px;

  &.rowLevel1 {
    grid-template-rows: 100px;
    grid-template-columns: repeat(3, 100px);
  }
  &.rowLevel2 {
    grid-template-rows: 65px;
    grid-template-columns: repeat(5, 65px);
  }
  &.rowLevel3 {
    grid-template-rows: 45px;
    grid-template-columns: repeat(7, 45px);
  }
}

@media (min-width: 768px) {
  .row {
    display: grid;
    margin-bottom: 10px;
    grid-gap: 10px;

    &.rowLevel2 {
      grid-template-rows: 90px;
      grid-template-columns: repeat(5, 90px);
    }
    &.rowLevel3 {
      grid-template-rows: 65px;
      grid-template-columns: repeat(7, 65px);
    }
  }
}
</style>
