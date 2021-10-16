# flipper_animation_generator

## install
```sh
npm install @bell-rabbit/flipper-animation-generator@1.1.0
```

## Usage
```javascript
import flipperAnimationGenerator from '@bell-rabbit/flipper-animation-generator';

export default {
  name: 'App',
  components: {
    FlipperAnimationGenerator
  }
}
```

```html
<template>
    <flipper-animation-generator ref="fag" @completed="completed" v-model="json" @completed-playback="completedPlayback"/>
</template>
```

## Sample
```html
<template>
  <div>
    <flipper-animation-generator ref="fag"
                                 :value="flipperJSON"
                                 @completed="completed"
                                 @completed-playback="completedPlayback"
    ></flipper-animation-generator>

    <input value="Random New Result" type="button" @click="reloadRandom"/>
    <input value="Playback Json" type="button" @click="playback" style="margin-left: 10px"/>
    <br />
    <textarea ref="json" style="width: 500px; height: 600px"/>
  </div>
</template>

<script>
import flipperAnimationGenerator from '@bell-rabbit/flipper-animation-generator';

export default {
  name: 'Home',
  components: {
    flipperAnimationGenerator
  },
  data () {
    return {
      flipperJSON: {},
    };
  },
  methods: {
    reloadRandom () {
      this.flipperJSON = {};
      this.$refs.fag.reload();
    },
    completed(e){
      this.$refs.json.value = JSON.stringify(e);
      alert('completed');
    },
    completedPlayback(){
      alert('completed Playback');
    },
    playback(){
      this.flipperJSON = JSON.parse(this.$refs.json.value);
    },
  }
};
</script>
```

## Component Attribute
| Attribute Name      | Type     | Default Value | Description                                                                                                                                               |
|---------------------|----------|---------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| value               | object   | {}            | {} => generate new path, else playback mode                                                                                                               |
| width               | Number   | 500           |                                                                                                                                                           |
| height              | Number   | 896           |                                                                                                                                                           |
| isCheckMode         | Boolean  | false         | show all <img src="/src/textures/pin.png" width="50" />, <img src="/textures/star_4.png" width="50" />, and <img src="/textures/star_5.png" width="50" /> |
| rndStarPin          | Number   | 15            | Max 100, probability for create <img src="/textures/star_4.png" width="50" /> and <img src="/textures/star_5.png" width="50" />                           |
| rndStar5            | Number   | 30            | Max 100, probability for create <img src="/textures/star_5.png" width="50" />                                                                             |
| maxStar             | Number   | 5             | Max 42, Number of the <img src="/textures/star_4.png" width="50" /> and <img src="/textures/star_5.png" width="50" /> total                               |
| rndPin              | Number   | 60            | Max 100, probability for create <img src="/src/textures/pin.png" width="50" />                                                                            |
| @completed          | function | ---           | Argument 1: the path json                                                                                                                                 |
| @completed-playback | function | ---           | no arguments                                                                                                                                              |
