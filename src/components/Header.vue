<template>
  <div class="header-container">
    <StartResetButton
      v-if="gameInActive"
      @btn-click="$emit('change-game-button')"
      :buttonText="gameInActive ? 'Start' : 'Restart'"
      :buttonColor="gameInActive ? '#90ee90' : '#FED8B1'"
      @click="startCounter(); setRandomNumber()"
    />
    <StartResetButton
      v-if="gameActive"
      @btn-click="$emit('change-game-button')"
      :buttonText="gameInActive ? 'Start' : 'Restart'"
      :buttonColor="gameInActive ? '#90ee90' : '#FED8B1'"
      @click="resetCounter"
    />
  </div>
  <div class="initialInstruction" v-if="gameInActive">
    {{ initialInstruction }}
  </div>
  <div class="gameStartTimer" v-if="gameActive">{{ gameStartTimer }}</div>
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
    ...mapState(["gameStartTimer", "initialInstruction"]),
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
.initialInstruction {
  margin-top: 1rem;
  font-size: 2rem;
  font: bold;
}
</style>
