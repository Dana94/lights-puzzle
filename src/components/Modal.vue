<template>
<v-overlay :value="overlay">
      <v-btn
        icon
        @click="overlay = false"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>

      <v-dialog v-model="dialog" max-width="290" persistent>
        <v-card>
          <v-card-title class="headline flex justify-center">You won!</v-card-title>

          <!-- <v-card-text>What now?</v-card-text> -->

          <v-card-actions class="flex justify-space-around">
            <v-btn class="end" @click="end">End Game</v-btn>
            <v-btn class="reset" @click="reset">Reset</v-btn>
            <!-- <v-btn color="green darken-1" flat="flat" @click="dialog = false">
              Disagree
            </v-btn>

            <v-btn color="green darken-1" flat="flat" @click="dialog = false">
              Agree
            </v-btn> -->
          </v-card-actions>
        </v-card>
      </v-dialog>

    </v-overlay>
</template>

<script>
export default {
  name: "modal",
  props: ['dialog'],
  data() {
    return {
      overlay: true
    }
  },
  methods: {
    end() {
      this.$store.dispatch("endGame");
    },
    reset() {
      this.$store.dispatch("reset");
      this.$emit('reset');
    }
  },
};
</script>

<style lang="scss">
@import '../assets/base.scss';

.v-dialog__content {
  height: auto !important;
}
</style>
