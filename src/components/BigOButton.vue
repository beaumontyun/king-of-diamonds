<template>
  <div class="big-o-button">
    <button class="button-x">
        <img class="gif" src="../assets/200.gif" alt="big button">
    </button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: "BigOButton",
    computed: {
      ...mapState(["buttonPressed"])
    }
};
</script>

<style scoped>
.button-x{
    background: red;
    border-radius: 25px;
    height: 17rem;
    width: 20rem;
    cursor: pointer;
}

.gif {
    border-radius: 25px;
}
</style>