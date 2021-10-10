<template>
  <div ref="FAG" :style="`background-image: url(${require('../textures/background.jpg')}); width:500px;height:896px`">

  </div>
</template>

<script>
import { Engine, Render, Runner, Composite, Events } from 'matter-js';
import common from '../mixins/flipperAnimationGeneratorCommon';
import recorder from '../mixins/flipperAnimationGeneratorRecorder';
import playback from '../mixins/flipperAnimationGeneratorPlayback';

export default {
  name: 'flipper_animation_generator',
  mixins: [common, recorder, playback],
  props: {
    width: {
      type: Number,
      default: 500
    },
    height: {
      type: Number,
      default: 1769
    },
    value: {
      type: Object,
      default: Object
    }
  },
  data () {
    return {};
  },
  methods: {
    initGenerator: function () {
      this.engine = Engine.create();

      this.render = Render.create({
        element: this.$refs.FAG,
        engine: this.engine,
        options: {
          width: this.cxWidth,
          height: this.displayHeight,
          showVelocity: false,
          wireframes: false,
          hasBounds: true,
          background: 'transparent'
        }
      });

      this.value.path ? this.playbackMode() : this.randomMode();

      Render.run(this.render);

      let runner = Runner.create();

      Runner.run(runner, this.engine);

      this.value.path ? this.playbackEvents() : this.randomEvents();

    },
    randomMode () {
      this.initMaxStar();
      this.iniRecorderData();

      this.ball = this.createMainBall(this.mainCategory);

      Composite.add(this.engine.world, [this.createGridBackground(), ...this.initPin(), ...this.initStarZone(), ...this.initStar(), this.ball, ...this.createWall()]);

      while (this.maxStarNum['4'] + this.maxStarNum['5'] > 0) {
        Composite.add(this.engine.world, [...this.initStar()]);
      }
    },
    randomEvents () {
      Events.on(this.engine, 'collisionStart', e => this.collisionChecking(e));
      Events.on(this.engine, 'collisionEnd', (e) => this.collisionRemoveDetect(e));
      Events.on(this.render, 'beforeRender', () => this.setBounds());
      Events.on(this.render, 'afterRender', (e) => this.recorder(e));
      this.setFirstForce(400);
    },
    playbackMode () {
      this.ball = this.createMainBall(this.mainCategory, true);
      Composite.add(this.engine.world, [...this.iniFixPin(this.value.pin), ...this.iniFixStarZone(this.value.starZone), ...this.iniFixStar(this.value.star), this.ball]);
    },
    playbackEvents () {
      Events.on(this.engine, 'beforeUpdate', (e) => this.setBallPosition(e));
    },
    reload () {
      this.clear();
      this.iniRecorderData();
      this.iniPaybackData();
      this.initGenerator();
    }
  },
  mounted () {
    this.initGenerator();
  },
  watch: {
    value () {
      this.reload();
    }
  },
};
</script>
