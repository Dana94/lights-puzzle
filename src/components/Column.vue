<template>
  <div
    class="column"
    :class="{ on: active, off: !active }"
    @keydown.enter="changeStatus"
    @click="changeStatus"
    :tabindex="index_x === 0 && index_y === 0 ? 0 : -1"
    @keydown.up="setFocus(index_x - 1, index_y)"
    @keydown.down="setFocus(index_x + 1, index_y)"
    @keydown.left="setFocus(index_x, index_y - 1)"
    @keydown.right="setFocus(index_x, index_y + 1)"
    @focus="setFocus(index_x, index_y)"
  ></div>
</template>
<script>
// @focus="setFocus(index_x, index_y)"
// :focus="focus.x === index_x && focus.y === index_y"
import { mapGetters, mapActions } from "vuex";
import { eventBus } from "../main";
import store from "../store/store";

export default {
  props: ["index_y", "index_x"],
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
    },
    setFocus (focusX, focusY) {
      this.$store.dispatch('setFocus', {
        x: focusX,
        y: focusY
      });
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
    focus() {
      return this.$store.getters.getFocus;
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
  &:focus {
    outline: none;
    border: 5px solid pink;
  }
}
</style>
