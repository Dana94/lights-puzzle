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
      // Change value whenever a square is clicked to ensure the computed property will run
      // to check if it's active
      check: false,
      x: 0,
      y: 0
    };
  },
  methods: {
    changeStatus() {
      this.check = !this.check;

      // eventBus.$emit("clicked", { row: this.index_x, col: this.index_y });
      this.x = this.index_x;
      this.y = this.index_y;

      this.$store.dispatch("increaseCount");

      this.$store.dispatch("activate", {
        row: this.index_x,
        col: this.index_y
      });
    }
  },
  computed: {
    active() {
      return this.$store.getters.isOn({
        row: this.x,
        col: this.y,
        check: this.check
      });
    },
  },
  watch: {
    check() {
      this.check = false;
      // if (this.level === 0) {
      //   console.log("set check back to false");
      //   this.check = false;
      // }
    }
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
