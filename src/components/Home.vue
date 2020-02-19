<template>
  <div>
    <h1 class="display-1 mb-3">Choose a Level</h1>
    <v-btn class="level1" @click="changeLevel(1)">Level 1</v-btn>
    <v-btn class="level2" @click="changeLevel(2)">Level 2</v-btn>
    <v-btn class="level3" @click="changeLevel(3)">Level 3</v-btn>
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
      // console.log(this.level)
      // this.$emit('levelSelected');
    }
  },
  methods: {
    changeLevel(level) {
      this.level = level;
    }
  }
}
</script>

<style lang="scss">
.level1 {
  background-color: #885888;
  color: white;
}
.level2 {
  background-color: #764076;
  color: white;
}
.level3 {
  background-color: #662866;
  color: white;
}
</style>
