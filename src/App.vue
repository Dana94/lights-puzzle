<template>
  <div id="app">
    <board></board>
  </div>
</template>

<script>
import Board from './components/Board.vue'


export default {
  name: "app",
  data() {
    return {
      x: "",
      y: ""
    };
  },
  methods: {
    activate(row_x, col_y) {
      this.x = row_x;
      this.y = col_y;
    }
  },
  computed: {
    // ...mapGetters(["gameWon"]),
    gridOn() {
      console.log("gridon", "x: ", this.x, "y:", this.y);
      if (this.x || this.y) {
        console.log(this.x, this.y, this.$store.getters.isOn({ row: this.x, col: this.y }))
        return this.$store.getters.isOn({ row: this.x, col: this.y });
      } else {
        return false;
      }
    }
  },
  created() {
    this.$store.dispatch("initBoard");
  },
  components: {
    Board
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;


}
</style>
