<template>
  <div
    class="column"
    :class="{ on: active, off: !active }"
    @keydown.enter="changeStatus"
    @click="changeStatus"
    tabindex="0"
  ></div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { eventBus } from "../main";
import store from "../store/store";

export default {
  props: ["index_y", "index_x", "level"],
  data() {
    return {
    };
  },
  methods: {
    changeStatus() {
      this.$store.dispatch("increaseCount");

      this.$store.dispatch("activate", {
        row: this.index_x,
        col: this.index_y
      });
      eventBus.$emit('checkBoard');
    }
  },
  computed: {
    moves () {
      return this.$store.getters.getMoves;
    },
    active() {
      if (this.moves) {
        return this.$store.getters.isOn({
          row: this.index_x,
          col: this.index_y
        });
      }
    },
  }
};
</script>

<style lang="scss" scoped>
.column {
  border-radius: 25px;
  &.on {
    background-color: #55dd55;
  }
  &.off {
    background-color: #115511;
  }
}
</style>
