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
    };
  },
  methods: {
    changeStatus() {
      this.check = !this.check;

      // eventBus.$emit("clicked", { row: this.index_x, col: this.index_y });

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
        row: this.index_x,
        col: this.index_y,
        check: this.check
      });
    },
    levelSelected() {
      return this.$store.getters.getLevel !== 0;
    }
  },
  watch: {
    levelSelected() {
      if (this.level === 0) {
        console.log("set check back to false");
        this.check = false;
      }
    }
  },
  created() {
    // eventBus.$on("clicked", coordinates => {
    //   // this.check = !this.check;
    //   // if the square should be activated by the one that was clicked
    //   if (
    //     (coordinates.row - 1 == this.index_x &&
    //       coordinates.col == this.index_y) ||
    //     (coordinates.row + 1 == this.index_x &&
    //       coordinates.col == this.index_y) ||
    //     (coordinates.row == this.index_x &&
    //       coordinates.col - 1 == this.index_y) ||
    //     (coordinates.row == this.index_x && coordinates.col + 1 == this.index_y)
    //   ) {
    //     console.log(this.index_x, this.index_y);
    //     // this.$store.dispatch("activate", {
    //     //   row: this.index_x,
    //     //   col: this.index_y,
    //     //   check: this.check
    //     // });
    //     eventBus.$emit("checkBoard");
    //   }
    // });
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
