<template>
  <div ref="FAG" :style="`background-image: url(${require('../textures/background.jpg')}); width:500px;height:896px`">

  </div>
</template>

<script>
import { Engine, Render, Runner, Composite, Events } from 'matter-js';
import common from '../mixins/flipperAnimationGeneratorCommon';
import recorder from '../mixins/flipperAnimationGeneratorRecorder';

export default {
  name: 'flipper_animation_generator',
  mixins: [common, recorder],
  props: {
    width: {
      type: Number,
      default: 500
    },
    height: {
      type: Number,
      default: 1769
    }
  },
  data () {
    return {};
  },
  methods: {
    initGenerator () {
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

      this.initMaxStar();
      this.IniRecorderData()

      this.ball = this.createMainBall(this.mainCategory);

      Composite.add(this.engine.world, [this.createGridBackground(), ...this.initPin(), ...this.initStarZone(), ...this.initStar(), this.ball, ...this.createWall()]);

      while (this.maxStarNum['4'] + this.maxStarNum['5'] > 0) {
        Composite.add(this.engine.world, [...this.initStar()]);
      }

      Render.run(this.render);

      let runner = Runner.create();

      Runner.run(runner, this.engine);

      Events.on(this.engine, 'collisionStart', e => this.collisionChecking(e));

      Events.on(this.engine, 'collisionEnd', (e) => this.collisionRemoveDetect(e));
      Events.on(this.render, 'beforeRender', () => this.setBounds());
      Events.on(this.render, 'afterRender', (e) => this.recorder(e));
      this.setFirstForce(400);
    },
    reload () {
      this.clear();
      this.IniRecorderData();
      this.initGenerator();
    }
  },
  mounted () {
    this.initGenerator();
  }
};
</script>
