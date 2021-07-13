<template>
  <button 
  class="btn"
  @click="onClick()" 
  :style="{ background: buttonColor }">
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  name: "StartResetButton",
  props: {
    buttonText: String,
    buttonColor: String,
  },
  methods: {
      onClick() {
          this.$emit('btn-click')
      }
  }
};
</script>

<style scoped>
    .btn {
        border-radius: 5px;
        border: 1px solid grey;
        height: 2rem;
        width: 5rem;
        font-weight: bold;
    }
</style>