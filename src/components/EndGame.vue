<template>
  <div>
    <h1 class="mb-2">You solved level {{ level }} in {{ moves }} moves!</h1>
    <p>What do you want to do next?</p>
    <div>
      <v-btn class="end" @click="end">Try Another Level</v-btn>
      <v-btn
        class="reset"
        ref="reset"
        @keydown.tab="changeFocus('end')"
        @click="reset">
        Reset
      </v-btn >
    </div>
  </div>
</template>

<script>
export default {
  name: "EndGame",
  props: [""],
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
      // eventBus.$emit('changeFocus');
      console.log(document.getElementById("end"));
      setTimeout(() => {
        document.getElementById("end").focus();
      }, 5000);
    }
  },
  computed: {
    moves() {
      return this.$store.getters.getMoves;
    },
    level() {
      return this.$store.getters.getLevel;
    }
  },
  watch: {
    showModal() {
      if (this.showModal) {
        this.$refs.modal.open();
        // set focus to first button in modal
        this.$nextTick(() => this.$refs.end.$el.focus());
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

.reset {
  background-color: $purple !important;
  color: $white;
}

.end {
  background-color: $green !important;
  color: $white;
}
</style>
