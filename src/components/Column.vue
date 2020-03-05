<template>
  <div
    class="column"
    :ref="colRef"
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
import { mapGetters, mapActions } from "vuex";
import { eventBus } from "../main";
import store from "../store/store";

export default {
  props: ["index_y", "index_x"],
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
      eventBus.$emit('changeFocus');
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
    },
    colRef () {
      return `col_${this.index_x}_${this.index_y}`;
    }
  },
  mounted () {
    // change focus depending on state's focus coordinates
    eventBus.$on("changeFocus", event => {
      const focusElem = `col_${this.focus.x}_${this.focus.y}`;
      if (!!this.$refs[focusElem] && this.focus.x === this.index_x && this.focus.y === this.index_y) {
        this.$refs[focusElem].focus();
      }
    });
  }
};
</script>

<style lang="scss">
@import "../assets/base.scss";

.column {
  border-radius: 25px;
  &.on {
    background-color: $lightGreen;
  }
  &.off {
    background-color: $green;
  }
  &:focus {
    outline: none;
    border: 5px solid $pink;
  }
}
</style>
