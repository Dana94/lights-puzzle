<template>
  <sweet-modal hide-close-button blocking ref="modal">
    <h1 class="mb-2">You won!</h1>
    <p>What do you want to do next?</p>
    <v-btn class="end" ref="end" @click="end">Try Another Level</v-btn>
    <v-btn class="reset" ref="reset" @keydown.tab="changeFocus('end')" @keydown.shift.tab="changeFocus('end')" @click="reset">Reset</v-btn>
  </sweet-modal>
</template>

<script>
import { SweetModal } from "sweet-modal-vue";

export default {
  name: "modal",
  props: ["showModal"],
  data() {
    return {};
  },
  methods: {
    end() {
      this.$store.dispatch("endGame");
    },
    reset() {
      this.$store.dispatch("reset");
      this.$emit("closeModal");
    },
    changeFocus(ref) {
      // this.$refs[ref].$el.focus();
      this.$nextTick(() => this.$refs.end.$el.focus())
    }
  },
  watch: {
    showModal() {
      if (this.showModal) {
        this.$refs.modal.open();
        // set focus to first button in modal
        this.$nextTick(() => this.$refs.end.$el.focus())
      } else {
        this.$refs.modal.close();
      }
    }
  },
  components: {
    SweetModal
  }
};
</script>

<style lang="scss">
@import "../assets/base.scss";

.sweet-modal {
  top: 25% !important;

  .reset {
    background-color: $purple !important;
    color: $white;
  }

  .end {
    background-color: $green !important;
    color: $white;
  }
}
</style>
