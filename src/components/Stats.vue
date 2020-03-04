<template>
  <div class="stats">
    <div class="title align-self-center ma-3">Moves: {{ moves }}</div>
    <v-btn class="end" @click="end">End Game</v-btn>
    <v-btn class="reset" @click="reset">Reset</v-btn>
  </div>
</template>

<script>
export default {
  name: "stats",
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
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";

.stats {
      position: absolute;
      right: -9rem;
      top: 0;
      display: flex;
      flex-direction: column;

      .reset {
        background-color: $purple;
        color: $white;
      }

      .end {
        background-color: $blue;
        color: $white;
      }
    }
</style>
