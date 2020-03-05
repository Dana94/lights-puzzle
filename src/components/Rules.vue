<template>
  <v-layout align-center column>
    <v-flex xs12>
      <v-expansion-panel>
        <v-expansion-panel-content>
          <template v-slot:actions>
            <v-icon></v-icon>
          </template>
          <template v-slot:header>
            <div class="title center">How to Win</div>
          </template>
          <v-card>
            <v-card-text>
              Get all the squares to light up! Clicking on one square will turn
              it on/off as well as any square sharing a side with it.
              <br />
              Good luck. :)
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-flex>
  </v-layout>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";

.v-expansion-panel__container {
  width: 320px;
  line-height: 1.5rem;

  &:focus {
    outline: 2px solid $black;
  }
}
.v-expansion-panel {
  margin-bottom: 1.5rem;
}

.center {
  display: flex;
  justify-content: center;
}
</style>
