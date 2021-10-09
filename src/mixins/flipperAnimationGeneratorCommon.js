import { Bodies, Body, World, Bounds, Engine, Render } from 'matter-js';

export default {
  props: {
    isCheckMode: {
      type: Boolean,
      default: true
    },
  },
  data () {
    return {
      maxStarNum: { '4': 0, '5': 0 },
      cxWidth: 500,
      cxHeight: 1769,
      displayHeight: 896,
      mainCategory: 0x0001,
      detectCategory: 0x0002,
      ballStar: 3,
      ball: null,
      engine: null,
      render: null,
      bounds: { x: 0, y: 0 },
      moveAmount: 4
    };
  },
  methods: {
    /**
     * @param {number} max
     * @returns {number}
     */
    getRandomInt (max) {
      return Math.floor(Math.random() * max);
    },
    /**
     * @param {number} category
     * @returns {Body}
     */
    createMainBall (category) {
      let x = this.getRandomInt(500);
      this.ballStar = 3;

      let body = Bodies.circle(x, 0, 23, {
        density: 20,
        restitution: 0.50,
        isStatic: false,
        frictionAir: 0.01,
        collisionFilter: {
          category: category
        }
      }, 20);

      this.setBallStar(body, this.ballStar);

      return body;
    },
    initMaxStar () {
      let num = 0;

      for (let i = 0; i < 10; i++) {
        num = this.getRandomInt(5);
        if (num > 3) {
          break;
        }
      }
      this.maxStarNum = { '4': num, '5': 5 - num };
    },
    /**
     * @returns {Body}
     */
    createGridBackground () {
      let body = Bodies.rectangle(this.cxWidth / 2, this.cxHeight / 2, this.cxWidth * 2, this.cxHeight * 2, {
        isStatic: true,
        isSensor: true,

      });

      if (this.isCheckMode) {
        body.render.fillStyle = '#569cd8';
      } else {
        body.render.fillStyle = 'transparent';
      }

      // if (!this.isCheckMode) {
      //   body.render.sprite.texture = require('../textures/background.png');
      //   body.render.sprite.xScale = 0.7;
      //   body.render.sprite.yScale = 0.7;
      // }

      return body;
    },
    /**
     * @param {number} x
     * @param {number} y
     * @param {'start_4'| 'start_5'} label
     * @returns {Body}
     */
    createStar (x, y, label) {
      let color = { 'start_4': '#f5d259', 'start_5': '#f55a3c' };

      let body = Bodies.rectangle(x, y, 28, 28, {
        isStatic: true, isSensor: true, label: label
      });

      if (this.isCheckMode) {
        body.render.strokeStyle = color[label];
        body.render.fillStyle = 'transparent';
        body.render.lineWidth = 1;
      } else {
        switch (label) {
          case 'start_4':
            body.render.sprite.texture = require('../textures/star_4.png');
            break;
          case 'start_5':
            body.render.sprite.texture = require('../textures/star_5.png');
            break;
        }
        body.render.sprite.xScale = 0.7;
        body.render.sprite.yScale = 0.7;
      }

      return body;
    },
    /**
     * @returns {Body[]}
     */
    createWall () {
      const wallLeft = Bodies.rectangle(0, 0, 3, this.cxHeight * 2, { isStatic: true });
      const wallRight = Bodies.rectangle(this.cxWidth, 0, 3, this.cxHeight * 2, { isStatic: true });

      return [wallLeft, wallRight];
    },
    /**
     * @param {number} category
     * @param {number} x
     * @param {number} y
     * @param {boolean} isZone
     * @returns {Body}
     */
    createDetect (category, x, y, isZone) {
      let body = Bodies.circle(x, y, isZone ? 80 : 40, {
        isStatic: true, isSensor: true, label: 'detect',
        collisionFilter: {
          category: category
        }
      });

      if (this.isCheckMode) {
        body.render.strokeStyle = '#7a25ed';
        body.render.fillStyle = 'transparent';
        body.render.lineWidth = 1;
      } else {
        body.render.lineWidth = 0;
        body.render.fillStyle = 'transparent';
      }

      return body;
    },
    /**
     * @param {number} x
     * @param {number} y
     * @returns {Body}
     */
    createStar5 (x, y) {
      return this.createStar(x, y, 'start_5');
    },
    /**
     * @param {number} x
     * @param {number} y
     * @returns {Body}
     */
    createStar4 (x, y) {
      return this.createStar(x, y, 'start_4');
    },
    /**
     * @param {number} x
     * @param {number} y
     * @returns {undefined|Body}
     */
    createRandomStar (x, y) {
      let n = this.getRandomInt(100);
      if (n < 30) {
        if (!this.isCheckMode && this.maxStarNum['5'] <= 0) return undefined;

        this.maxStarNum['5']--;
        return this.createStar5(x, y);
      } else {
        if (!this.isCheckMode && this.maxStarNum['4'] <= 0) return undefined;

        this.maxStarNum['4']--;
        return this.createStar4(x, y);
      }
    },
    /**
     *
     * @param {number} y
     * @param {number} index
     * @param {boolean} [isZone]
     * @returns {Body[]}
     */
    createStarList (y, index, isZone = false) {
      let xList = [
        [84, 217, 350],
        [150, 283, 416]];

      let pinList = [];

      for (let i = 0; i < xList[index % 2].length; i++) {
        let x = xList[index % 2][i];

        if (this.isCheckMode || this.getRandomInt(100) < 15) {
          let star = this.createRandomStar(x, y);

          if (star) {
            pinList.push(star);
            pinList.push(this.createDetect(this.detectCategory, x, y, isZone));
          }
        }
      }
      return pinList;
    },
    createPin (category, x, y) {
      let body = Bodies.fromVertices(x, y,
        [{ x: 0, y: 11 }, { x: 11, y: 0 }, { x: 0, y: -11 }, { x: -11, y: 0 }],
        {
          // isSensor: true,
          isStatic: true,
          label: 'pin',
          collisionFilter: {
            category: category
          }
        });

      if (this.isCheckMode) {
        body.render.strokeStyle = '#00224f';
        body.render.fillStyle = 'transparent';
        body.render.lineWidth = 1;
      } else {
        body.render.sprite.texture = require('../textures/pin.png');
        body.render.sprite.xScale = 0.7;
        body.render.sprite.yScale = 0.7;

      }

      return body;
    },
    createPinList (y, index) {
      let xList = [
        [81, 214, 350, 483],
        [14, 148, 284, 416]];

      let pinList = [];

      for (let i = 0; i < xList[index % 2].length; i++) {
        if (this.isCheckMode || this.getRandomInt(100) > 40) {
          pinList.push(this.createPin(this.mainCategory, xList[index % 2][i], y));
        }
      }

      return pinList;
    },
    initPin () {
      let pins = [];

      let minY = 490, maxRow = 12, height = 76;
      for (let i = 0; i <= maxRow; i++) {
        pins = [...pins, ...this.createPinList(minY + i * height, i)];
      }

      return pins;
    },
    /**
     * @returns {Body[]}
     */
    initStar () {
      let stars = [];

      let minY = 748, maxRow = 9, height = 76;
      for (let i = 0; i <= maxRow; i++) {
        stars = [...stars, ...this.createStarList(minY + i * height, i)];
      }
      return stars;
    },
    /**
     * @returns {Body[]}
     */
    initStarZone () {
      let stars = [];

      let minY = 1509, maxRow = 3, height = 76;
      for (let i = 0; i <= maxRow; i++) {
        stars = [...stars, ...this.createStarList(minY + i * height, i, true)];
      }
      return stars;
    },
    /**
     * @param {Body} ball
     * @param {number} number
     */
    setBallStar (ball, number) {

      if (this.isCheckMode) {
        switch (number) {
          case 3:
            ball.render.fillStyle = '#FFFFFF49';
            break;
          case 4:
            ball.render.fillStyle = '#f5d259';
            break;
          case 5:
            ball.render.fillStyle = '#f55a3c';
            break;
        }
      } else {
        switch (number) {
          case 3:
            ball.render.sprite.texture = require('../textures/ball_3.png');
            break;
          case 4:
            ball.render.sprite.texture = require('../textures/ball_4.png');
            break;
          case 5:
            ball.render.sprite.texture = '';
            ball.render.fillStyle = '#f55a3c';
            break;
        }
        ball.render.sprite.xScale = 0.7;
        ball.render.sprite.yScale = 0.7;
      }
    },
    collisionChecking (e) {
      e.pairs.forEach(a => {
        if (a.bodyA.label === 'pin') {
          setTimeout(() => {
            World.remove(this.engine.world, a.bodyA);
          }, 100);
        } else if (a.bodyB.label === 'pin') {
          setTimeout(() => {
            World.remove(this.engine.world, a.bodyB);
          }, 100);
        } else if (a.bodyA.label === 'detect' || a.bodyB.label === 'detect') {
          this.ball.frictionAir = 0.2;
          this.moveAmount = 1;
        } else if (a.bodyA.label === 'start_4' || a.bodyB.label === 'start_4') {
          World.remove(this.engine.world, (a.bodyA.label === 'start_4') ? a.bodyA : a.bodyB);

          if (this.ballStar < 4) {
            this.setBallStar(this.ball, 4);
            this.ballStar = 4;
          } else if (this.ballStar === 4) {
            this.setBallStar(this.ball, 5);
            this.ballStar = 5;
          }
        } else if (a.bodyA.label === 'start_5' || a.bodyB.label === 'start_5') {
          World.remove(this.engine.world, (a.bodyA.label === 'start_5') ? a.bodyA : a.bodyB);

          if (this.ballStar < 5) this.setBallStar(this.ball, 5);
          this.ballStar = 5;
        }
      });
    },
    collisionRemoveDetect (e) {
      e.pairs.forEach(a => {
        if (a.bodyA.label === 'detect' || a.bodyB.label === 'detect') {
          this.ball.frictionAir = 0.01;
          this.moveAmount = 4;
        }
      });
    },
    setBounds () {

      if (this.render.bounds.max.y < this.cxHeight) {
        Bounds.translate(this.render.bounds, { x: 0, y: this.moveAmount });
      }

      // console.log(this.render.bounds.max.y);

      // moveTheBounds({x:0,y:moveAmount})
      // Bounds.translate(this.render.bounds, {x:0,y:10});
      // console.log(this.engine);
      // this.render.bounds.min.x = 2000;
      // this.render.bounds.min.y = this.bounds.y;
      // this.bounds.y += 10;
      //
      // Bounds.translate(this.render.bounds, { x: 500, y :500 });
      // // console.log(e);
    },
    /**
     * @param {number} timeout
     */
    setFirstForce (timeout) {
      setTimeout(() => {
        let isPositive = this.getRandomInt(2);
        console.log(isPositive);

        Body.applyForce(this.ball, this.ball.position, { x: [-1, 1][isPositive] * this.getRandomInt(250), y: 10 });
      }, timeout);
    },
    clear () {
      // World.clear(this.engine.world);
      // Engine.clear(this.engine);
      World.clear(this.engine.world);
      Engine.clear(this.engine);
      Render.stop(this.render);
      // Runner.stop(runner);
      this.render.canvas.remove();
      this.render.canvas = null;
      this.render.context = null;
      this.render.textures = {};
    }
  }
};
