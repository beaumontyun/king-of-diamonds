<template>
  <div>
    <h3>Get ready to press the button!</h3>
  </div>
  <BigOButton />
</template>

<script>
import BigOButton from './BigOButton'

export default {
    name: 'Body',
    props: {
      gameInActive: Boolean,
      gameActive: Boolean,
    },
    components: {
        BigOButton
    },
}
</script>

<style>
    
</style>
