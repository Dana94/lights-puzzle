<template>
  <v-layout align-center column>
    <div>
      <h1 class="display-1 mb-3">Choose a Level</h1>
      <v-btn class="level1" @click="level = 1">Level 1</v-btn>
      <v-btn class="level2" @click="level = 2">Level 2</v-btn>
      <v-btn class="level3" @click="level = 3">Level 3</v-btn>
    </div>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      level: 0
    };
  },
  watch: {
    level() {
      this.$store.dispatch("setLevel", this.level);
    }
  }
};
</script>

<style lang="scss">
@import "../assets/base.scss";

.level1 {
  background-color: $green !important;
  color: $white !important;
}
.level2 {
  background-color: $blue !important;
  color: $white !important;
}
.level3 {
  background-color: $purple !important;
  color: $white !important;
}
</style>
