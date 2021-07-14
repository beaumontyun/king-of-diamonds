<template>
  <div>
    <BigOButton @click.once="playerButtonPress" />
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
  },
  methods: {
    ...mapActions(["playerButtonPress"]),
  },
};
</script>

<style>
</style>
