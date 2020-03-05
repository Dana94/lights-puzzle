<template>
  <v-layout align-center column>
    <div>
      <h1 class="mb-2">You solved level {{ level }} in {{ moves }} moves!</h1>
      <p class="title">What do you want to do next?</p>
      <div>
        <v-btn class="end" @click="end">Try Another Level</v-btn>
        <v-btn class="reset" @click="reset">Play Again</v-btn>
      </div>
    </div>
  </v-layout>
</template>

<script>
export default {
  name: "EndGame",
  methods: {
    end() {
      this.$store.dispatch("endGame");
    },
    reset() {
      this.$store.dispatch("reset");
    }
  },
  computed: {
    moves() {
      return this.$store.getters.getMoves;
    },
    level() {
      return this.$store.getters.getLevel;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";

.reset {
  background-color: $purple !important;
  color: $white !important;
}

.end {
  background-color: $green !important;
  color: $white !important;
}
</style>
