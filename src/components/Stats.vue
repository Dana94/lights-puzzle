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
