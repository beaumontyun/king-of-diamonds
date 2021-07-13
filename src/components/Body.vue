<template>
  <div>
    <h3>Get ready to press the button!</h3>
    <BigOButton @click="playerButtonPress"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
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
    methods: {
      ...mapActions(["playerButtonPress"])
    }
}
</script>

<style>
    
</style>
