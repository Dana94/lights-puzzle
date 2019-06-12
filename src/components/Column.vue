<template>
  <div
    class="column"
    :id="'grid-'+index_x+'-'+index_y"
    :class="{on: active, off: !active}"
    @keydown.enter="changeStatus"
    @click="changeStatus"
    @keydown.up="focusUp"
    v-focus="focused"
    tabindex="0"
  ></div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { eventBus } from "../main";
import store from "../store/store";

export default {
  props: ["index_y", "index_x"],
  data() {
    return {
      // Change value whenever a square is clicked to endure the computed property will run
      // to check if it's active
      check: false,
      focused: false
    };
  },
  methods: {
    changeStatus() {
      this.check = !this.check;

      eventBus.$emit("clicked", { row: this.index_x, col: this.index_y });

      this.$store.dispatch("increaseCount");

      this.$store.dispatch("activate", {
        row: this.index_x,
        col: this.index_y
      });
    },
    focusUp() {
      this.check = !this.check;
      this.$store.dispatch("focusUp", {
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
    focusOn() {
      this.focused = this.$store.getters.isInFocus({
          row: this.index_x,
          col: this.index_y,
          check: this.check
        });
    }
  },
  created() {
    eventBus.$on("clicked", coordinates => {
      this.check = !this.check;
      if (
        (coordinates.row - 1 == this.index_x &&
          coordinates.col == this.index_y) ||
        (coordinates.row + 1 == this.index_x &&
          coordinates.col == this.index_y) ||
        (coordinates.row == this.index_x &&
          coordinates.col - 1 == this.index_y) ||
        (coordinates.row == this.index_x && coordinates.col + 1 == this.index_y)
      ) {
        this.$store.dispatch("activate", {
          row: this.index_x,
          col: this.index_y,
          check: this.check
        });
        eventBus.$emit("checkBoard");
      }
    });
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
