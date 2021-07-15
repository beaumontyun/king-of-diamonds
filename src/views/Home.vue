<template>
  <div class="home">
    <div class="header-container">
      <Header
        @change-game-button="changeGameButton"
        :gameInActive="gameInActive"
        :gameActive="gameActive"
      />
    </div>
    <div class="body-container">
      <Body v-if="gameActive" />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Body from "../components/Body";

export default {
  name: "Home",
  components: {
    Header,
    Body,
  },
  data() {
    return {
      gameInActive: true,
      gameActive: false,
    };
  },
  methods: {
    changeGameButton() {
      this.gameInActive = !this.gameInActive;
      this.gameActive = !this.gameActive;
    },
  },
};
</script>

<style scoped>
.home {
  align-content: center;
}

.header-container {
  height: 10rem;
}

.body-container {
  margin-top: 5rem;
}
</style>
