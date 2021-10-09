<template>
  <div id="app">
      <flipper_animation_generator :is-check-mode="false" ref="fag" @completed="completed"/>
      <input value="bu" @click="$refs.fag.reload()"/>
    <br>
    <textarea ref="textarea"/>
  </div>
</template>

<script>

import flipper_animation_generator from './components/flipperAnimationGenerator';
export default {
  name: 'App',
  components: {
    flipper_animation_generator
  },
  methods: {
    completed (e) {
      this.$refs.textarea.value ='';
      this.$refs.textarea.value = JSON.stringify(e);
      console.log(e);
    }
  },
}
</script>

