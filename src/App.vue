<template>
  <div id="app">
      <flipper_animation_generator :is-check-mode="false" ref="fag" @completed="completed" v-model="json"/>
      <input value="Random New Result" type="button" @click="reloadRandom"/>
      <input value="Playback Json" type="button" @click="playback" style="margin-left: 10px"/>
    <br>
    <H2 style="margin-bottom: 0">Data Json</H2><br>
    <textarea ref="json" style="width: 500px; height: 600px"/>
  </div>
</template>

<script>

import flipper_animation_generator from './components/flipperAnimationGenerator';
export default {
  name: 'App',
  components: {
    flipper_animation_generator
  },
  data () {
    return {
      json: {}
    };
  },
  methods: {
    playback(){
      this.json = JSON.parse(this.$refs.json.value);
    },
    reloadRandom(){
      this.$refs.json.value ='';
      this.json = {};
      this.$refs.fag.reload();
    },
    completed (e) {
      this.$refs.json.value = JSON.stringify(e);
    }
  },
}
</script>

