<template>
  <div>
    <h3 v-if="clickAlert">Get ready to press the button!</h3>
    <h3 v-else>Press Now!</h3>
    
    <BigOButton @click="playerButtonPress" />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import BigOButton from "./BigOButton";

export default {
  name: "Body",
  props: {
    gameInActive: Boolean,
    gameActive: Boolean,
  },
  components: {
    BigOButton,
  },
  computed: {
    ...mapState(["clickAlert", "randomNumber", "counter"])
  },
  methods: {
    ...mapActions(["playerButtonPress"]),
  },
};
</script>

<style>
</style>
