import { Body, Bounds } from 'matter-js';

export default {
  data () {
    return {
      ballPositionLength: 0,
      itemTable: { pin: {}, star: {} }
    };
  },
  methods: {
    iniPaybackData () {
      this.ballPositionLength = 0;
      this.itemTable = { pin: {}, star: {} };
    },
    /**
     * @param {array<{x: number, y: number}>} arr
     * @returns {array<Body>}
     */
    iniFixPin (arr) {
      let pins = [];

      arr.forEach((pin) => {
        let pinBody = this.createPin(this.mainCategory, pin.x, pin.y);
        this.itemTable.pin[`${pin.x}:${pin.y}`] = pinBody;
        pins.push(pinBody);
      });

      return pins;
    },
    /**
     * @param {array<{star:4|5, x: number, y: number}>} arr
     * @returns {array<Body>}}
     */
    iniFixStarZone (arr) {
      return this.createFixStarList(arr);
    },
    /**
     * @param {array<{star:4|5, x: number, y: number}>} arr
     * @returns {array<Body>}}
     */
    iniFixStar (arr) {
      return this.createFixStarList(arr);
    },
    /**
     * @param {array<{star:4|5, x: number, y: number}>} arr
     * @returns {array<Body>}}
     */
    createFixStarList (arr) {
      let list = [];

      arr.forEach((star) => {
        let body;

        if (star.star === 5) {
          body = this.createStar5(star.x, star.y);
        } else {
          body = this.createStar4(star.x, star.y);
        }

        // if (isZone) {
        //   this.itemTable.starZone[`${star.x}:${star.y}`] = body;
        // } else {
        this.itemTable.star[`${star.x}:${star.y}`] = body;
        // }

        list.push(body);
      });

      return list;
    },
    setBallPosition () {
      if (this.ballPositionLength < this.value.path.length - 1) {

        /** @type {recorderPin} */
        let position = this.value.path[this.ballPositionLength];
        Body.setPosition(this.ball, { x: position.x, y: position.y });

        Bounds.shift(this.render.bounds, { x: 0, y: position.boundsY });

        position.pin && this.removePin(this.engine.world, this.itemTable.pin[`${position.pin.x}:${position.pin.y}`]);
        position.star5 && this.setBallStarAndRemoveStar(5, this.engine.world, this.itemTable.star[`${position.star5.x}:${position.star5.y}`]);
        position.star4 && this.setBallStarAndRemoveStar(4, this.engine.world, this.itemTable.star[`${position.star4.x}:${position.star4.y}`]);

        if(this.ballStar === 5 ){
          this.removeAllPlaybackPinAndStar(this.engine.world);
        }

        this.ballPositionLength++;
      } else if (this.ballPositionLength === this.value.path.length - 1) {
        Body.setStatic(this.ball, true);

        this.$emit('completed-playback');
        this.ballPositionLength++;
      }
    },
    removeAllPlaybackPinAndStar(world){

      for (let pinKey in this.itemTable.pin) {
        this.removePin(world, this.itemTable.pin[pinKey]);
      }

      for (let starKey in this.itemTable.star) {
        this.removeStar(world, this.itemTable.star[starKey])
      }
    }
  }
};
