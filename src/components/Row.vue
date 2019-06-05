<template>
  <div class="row">
    <column v-for="col in row" :key="col.id" column="col"></column>
  </div>
</template>

<script>
import Column from "./Column.vue";
export default {
  props: ["row"],
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
}
</style>
