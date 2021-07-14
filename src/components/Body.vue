<template>
  <div>
    <BigOButton :disabled="isDisabled" @click="playerButtonPress" />
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
    ...mapState(["clickAlert"]),
    isDisabled: function() {
      return !this.clickAlert
    }
  },
  methods: {
    ...mapActions(["playerButtonPress"]),
  },
};
</script>

<style>
</style>
