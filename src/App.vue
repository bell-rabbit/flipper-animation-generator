<template>
  <div id="app">
      <flipper_animation_generator :is-check-mode="false" ref="fag"/>
      <input value="bu" @click="$refs.fag.reload()"/>
  </div>
</template>

<script>

import flipper_animation_generator from './components/flipperAnimationGenerator';
export default {
  name: 'App',
  components: {
    flipper_animation_generator
  }
}
</script>

