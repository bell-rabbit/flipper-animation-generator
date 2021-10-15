import { Bodies, Body, World, Bounds, Engine, Render, Events } from 'matter-js';

export default {
  props: {
    isCheckMode: {
      type: Boolean,
      default: false
    },
    rndStarPin: {
      type: Number,
      default: 15
    },
    rndStar5: {
      type: Number,
      default: 30
    },
    maxStar: {
      type: Number,
      default: 5
    },
    rndPin: {
      type: Number,
      default: 60
    }
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
      moveAmount: 4,
      starRepeatCheckTable: {},
      allPinList: [],
      allDetectList: [],
      ballLastY: 0
    };
  },
  methods: {
    checkProps () {
      this.maxStar = this.maxStar > 42 ? 42 : this.maxStar;
      this.rndStarPin = this.maxStar > 42 ? 100 : this.rndStarPin;
      this.rndStarPin = this.rndStar5 <= 0 ? 100 : this.rndStarPin;
      this.rndStarPin = this.rndStar5 >= 100 ? 100 : this.rndStarPin;

    },
    /**
     * @param {number} max
     * @returns {number}
     */
    getRandomInt (max) {
      return Math.floor(Math.random() * max);
    },
    /**
     * @param {number} category
     * @param {boolean} [isStatic]
     * @returns {Body}
     */
    createMainBall (category, isStatic = false) {
      let x = this.getRandomInt(500);

      let body = Bodies.circle(x, 0, 23, {
        density: 20,
        restitution: 0.50,
        isStatic: isStatic,
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
        num = this.getRandomInt(this.maxStar);
        if (num > 3) {
          break;
        }
      }

      if (this.rndStar5 >= 100) num = 0;
      if (this.rndStar5 <= 0) num = this.maxStar;

      this.maxStarNum = { '4': num, '5': this.maxStar - num };
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
      //   body.render.sprite.texture = require('../textures/bg.jpg');
      //   // body.render.sprite.xScale = 0.7;
      //   // body.render.sprite.yScale = 0.7;
      // }

      return body;
    },
    /**
     * @param {number} category
     * @param {number} x
     * @param {number} y
     * @param {'start_4'| 'start_5'} label
     * @returns {Body}
     */
    createStar (category, x, y, label) {
      let color = { 'start_4': '#f5d259', 'start_5': '#f55a3c' };

      let body = Bodies.rectangle(x, y, 28, 28, {
        isStatic: true, label: label,
        isSensor: true,
        collisionFilter: {
          category: category
        }
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
      const wallLeft = Bodies.rectangle(-40, 0, 43, this.cxHeight * 2, { isStatic: true });
      const wallRight = Bodies.rectangle(this.cxWidth + 40, 0, 43, this.cxHeight * 2, { isStatic: true });

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
      return this.createStar(this.mainCategory, x, y, 'start_5');
    },
    /**
     * @param {number} x
     * @param {number} y
     * @returns {Body}
     */
    createStar4 (x, y) {
      return this.createStar(this.mainCategory, x, y, 'start_4');
    },
    /**
     * @param {number} x
     * @param {number} y
     * @param {boolean} isZone
     * @returns {undefined|Body}
     */
    createRandomStar (x, y, isZone) {
      let addStar = (star) => {
        if (isZone) {
          if (this.addStarZoneRecorderData) this.addStarZoneRecorderData({ star: star, x, y });
        } else {
          if (this.addStarRecorderData) this.addStarRecorderData({ star: star, x, y });
        }
      };

      let n = this.getRandomInt(100);
      if (n < this.rndStar5) {
        if (!this.isCheckMode && this.maxStarNum['5'] <= 0) return undefined;
        addStar(5);
        this.maxStarNum['5']--;
        return this.createStar5(x, y);
      } else {
        if (!this.isCheckMode && this.maxStarNum['4'] <= 0) return undefined;
        addStar(4);
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

        if (this.isCheckMode || this.getRandomInt(100) < this.rndStarPin) {
          if (this.starRepeatCheckTable[`${x}:${y}`]) continue;

          let star = this.createRandomStar(x, y, isZone);
          if (star) {
            pinList.push(star);

            let body = this.createDetect(this.detectCategory, x, y, isZone);
            pinList.push(body);

            this.starRepeatCheckTable[`${x}:${y}`] = star;
            this.allDetectList.push(body);
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
        if (this.isCheckMode || this.getRandomInt(100) < this.rndPin) {
          let x = xList[index % 2][i];
          if (this.addIniPinRecorderData) this.addIniPinRecorderData({ x, y });
          let body = this.createPin(this.mainCategory, x, y);
          this.allPinList.push(body);
          pinList.push(body);
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
            ball.render.sprite.texture = require('../textures/ball_5.png');
            this.removeAllPinAndStar(this.engine.world);
            break;
        }
        ball.render.sprite.xScale = 0.7;
        ball.render.sprite.yScale = 0.7;
      }
    },
    removeAllPinAndStar (world) {
      this.allPinList.forEach((rs) => {
        this.removePin(world, rs, 0);
      });

      this.allDetectList.forEach((rs) => {
        this.removeStar(world, rs);
      });

      for (let key in this.starRepeatCheckTable) {
        this.removeStar(world, this.starRepeatCheckTable[key]);
      }
    },
    removePin (world, body, time = 100) {
      setTimeout(() => {
        World.remove(world, body);
      }, time);
    },
    removeStar (world, body) {
      World.remove(this.engine.world, body);
    },
    /**
     *
     * @param {4 | 5} star
     * @param world
     * @param {Body} body
     */
    setBallStarAndRemoveStar (star, world, body) {
      this.removeStar(world, body);
      this.engine.timing.timeScale = 0.5;
      switch (star) {
        case 4:
          if (this.ballStar < 4) {
            this.setBallStar(this.ball, 4);
            this.ballStar = 4;
          } else if (this.ballStar === 4) {
            this.setBallStar(this.ball, 5);
            this.ballStar = 5;
          }
          break;
        case 5:
          if (this.ballStar < 5) this.setBallStar(this.ball, 5);
          this.ballStar = 5;
          break;
      }
    },
    collisionChecking (e) {
      e.pairs.forEach(a => {
        if (a.bodyA.label === 'pin') {
          this.removePin(this.engine.world, a.bodyA);
        } else if (a.bodyB.label === 'pin') {
          this.removePin(this.engine.world, a.bodyB);
        } else if (a.bodyA.label === 'detect' || a.bodyB.label === 'detect') {
          this.engine.timing.timeScale = 0.1;
          this.moveAmount = 1;
        } else if (a.bodyA.label === 'start_4' || a.bodyB.label === 'start_4') {

          this.setBallStarAndRemoveStar(4, this.engine.world, (a.bodyA.label === 'start_4') ? a.bodyA : a.bodyB);
        } else if (a.bodyA.label === 'start_5' || a.bodyB.label === 'start_5') {

          this.setBallStarAndRemoveStar(5, this.engine.world, (a.bodyA.label === 'start_5') ? a.bodyA : a.bodyB);
        }
      });
    },
    collisionRemoveDetect (e) {
      e.pairs.forEach(a => {
        if (a.bodyA.label === 'detect' || a.bodyB.label === 'detect') {
          this.engine.timing.timeScale = 1;
          this.moveAmount = 4;
        }
      });
    },
    setBounds () {
      if (this.render.bounds.max.y < this.cxHeight) {
        let moveAmount = this.moveAmount;
        let positionY = this.ball.position.y - this.ballLastY;

        let fast = (this.render.bounds.max.y - this.ball.position.y < 300)?  1.5 : 1;

        if (positionY > 40){
          moveAmount = positionY * fast;
        }else if(positionY > 30){
          moveAmount = 25 * fast;
        }
        else if(positionY > 25) {
          moveAmount = 15 * fast;
        }
        else if (positionY > 20) {
          moveAmount = 13 * fast;
        }

        Bounds.translate(this.render.bounds, { x: 0, y: moveAmount  });
        this.ballLastY = this.ball.position.y;
      }
    },
    /**
     * @param {number} timeout
     */
    setFirstForce (timeout) {
      setTimeout(() => {
        let isPositive = this.getRandomInt(2);

        Body.applyForce(this.ball, this.ball.position, { x: [-1, 1][isPositive] * this.getRandomInt(250), y: 10 });
      }, timeout);
    },
    clear () {
      Events.off(this.engine);
      Events.off(this.render);

      World.clear(this.engine.world);
      Engine.clear(this.engine);
      Render.stop(this.render);

      this.render.canvas.remove();
      this.render.canvas = null;
      this.render.context = null;
      this.render.textures = {};
      this.ballStar = 3;
      this.starRepeatCheckTable = {};
      this.ballLastY = 0;
    }
  }
};
