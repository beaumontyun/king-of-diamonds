<template>
  <!-- Header conttainer - it contracts game start and game reset -->
  <div class="header-container">
    <StartResetButton
      v-if="gameInActive"
      @btn-click="$emit('change-game-button')"
      :buttonText="gameInActive ? 'Start' : 'Restart'"
      :buttonColor="gameInActive ? '#90ee90' : '#FED8B1'"
      @click="
        startCounter();
        setRandomNumber();
      "
    />
    <StartResetButton
      v-else
      @btn-click="$emit('change-game-button')"
      :buttonText="gameInActive ? 'Start' : 'Restart'"
      :buttonColor="gameInActive ? '#90ee90' : '#FED8B1'"
      @click="resetCounter"
    />
  </div>
  <!-- Game status container is used to change instructions to player dynamically -->
  <div class="gameStatusContainer">
    <div class="initialInstruction" v-if="gameInActive">
      <p>Press Start to Begin</p>
    </div>
    <div class="gameStartTimer" v-else-if="gameStartTimer > 0">
      {{ gameStartTimer }}
    </div>
    <div class="gameAlert" v-else-if="clickAlert"><p>Press now!</p></div>
    <div class="loadingAfterGameStarts" v-else><p>Get Ready...</p></div>
  </div>
</template>

<script>
import StartResetButton from "./StartResetButton";
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  components: {
    StartResetButton,
  },
  props: {
    gameInActive: Boolean,
    gameActive: Boolean,
  },
  computed: {
    ...mapState(["gameStartTimer", "clickAlert"]),
  },
  methods: {
    ...mapMutations(["setRandomNumber"]),
    ...mapActions(["startCounter", "resetCounter"]),
  },
  emits: ["change-game-button"],
};
</script>

<style>
.header-container {
  width: 30rem;
  margin: 0 auto;
}
.gameStartTimer {
  font-size: 5rem;
  font: bold;
}
.gameStatusContainer {
  margin-top: 1rem;
  font-size: 2rem;
  font: bold;
}
</style>
