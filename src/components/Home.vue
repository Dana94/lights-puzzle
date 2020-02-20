<template>
  <div>
    <h1 class="display-1 mb-3">Choose a Level</h1>
    <v-btn class="level1" @click="level = 1">Level 1</v-btn>
    <v-btn class="level2" @click="level = 2">Level 2</v-btn>
    <v-btn class="level3" @click="level = 3">Level 3</v-btn>
  </div>
</template>

<script>
export default {
  data () {
    return {
      level: 0
    }
  },
  watch: {
    level () {
      this.$store.dispatch('setLevel', this.level);
    }
  }
}
</script>

<style lang="scss">
.level1 {
  background-color: #1b3344 !important;
  color: white !important;
}
.level2 {
  background-color: #115511 !important;
  color: white !important;
}
.level3 {
  background-color: #662866 !important;
  color: white !important;
}
</style>
