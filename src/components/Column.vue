<template>
  <div class="column" :class="{on: active, off: !active}" @click="changeStatus">
    [{{index_x}}, {{index_y}}]
  </div>
</template>

<script>
export default {
  props: ["index_y", "index_x"],
  data() {
    return {

    };
  },
  methods: {
    changeStatus() {}
  },
  computed: {
    active() {}
  },
  created() {

  }
};
</script>

<style lang="scss" scoped>
.column {
  border: 1px solid;
  &.on {
    background-color: greenyellow;
  }
  &.off {
    background-color: green;
  }
}
</style>
