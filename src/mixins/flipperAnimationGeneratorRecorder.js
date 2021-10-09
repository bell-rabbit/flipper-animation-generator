import { World } from 'matter-js';

export default {
  data () {
    return {
      recorderData: {
        detect: 0,
        pinCount: 0,
        star5Count: 0,
        star4Count: 0,
        pin: [],
        starZone: [],
        star: [],
        ballStar: { start: 0, end: 0 },
        path: []
      },
      completed: false,
      isAddTable: {},
      detectTable: {},
    };
  },
  methods: {
    IniRecorderData () {
      this.recorderData = {
        detect: 0,
        pinCount: 0,
        star5Count: 0,
        star4Count: 0,
        pin: [],
        starZone: [],
        star: [],
        ballStar: { start: 0, end: 0 },
        path: []
      };
      this.completed = false;
      this.isAddTable = {};
      this.detectTable = {};

      this.recorderData.ballStar.start = this.ballStar;
    },
    addIniPinRecorderData (item) {
      this.recorderData.pin.push(item);
    },
    addStarZoneRecorderData (item) {
      this.recorderData.starZone.push(item);
    },
    addStarRecorderData (item) {
      this.recorderData.star.push(item);
    },
    recorder (e) {
      function checkABLabel (d, text) {
        let aLabel = d.bodyA.label, bLabel = d.bodyB.label;
        if (aLabel === text) {
          return d.bodyA.position;
        } else if (bLabel === text) {
          return d.bodyB.position;
        }
        return undefined;
      }

      let addData = (obj, updateObj, key) => {
        if (obj && !this.isAddTable[`${obj.x}:${obj.y}`]) {
          updateObj[key] = obj;
          this.isAddTable[`${obj.x}:${obj.y}`] = true;
        }
      };

      if (this.ball && !this.ball.isStatic && this.ball.position.y <= this.cxHeight) {
        let star5, star4, pin, detect;

        e.source.engine.pairs.list.forEach((data) => {

          detect = checkABLabel(data, 'detect');
          pin = checkABLabel(data, 'pin');
          star5 = checkABLabel(data, 'start_5');
          star4 = checkABLabel(data, 'start_4');
        });

        let position = { x: this.ball.position.x, y: this.ball.position.y };

        addData(star5, position, 'star5');
        if (position.star5) this.recorderData.star5Count++;

        addData(pin, position, 'pin');
        if (position.pin) this.recorderData.pinCount++;

        addData(star4, position, 'star4');
        if (position.star4) this.recorderData.star4Count++;

        if (detect && !this.detectTable[`${detect.x}:${detect.y}`]) {
          this.detectTable[`${detect.x}:${detect.y}`] = true;
          this.recorderData.detect++;
        }

        this.recorderData.path.push(position);

      } else if (!this.completed) {
        World.remove(this.engine.world, this.ball);
        this.recorderData.ballStar.end = this.ballStar;
        this.completed = true;

        console.log(this.recorderData);
        this.$emit('completed', this.recorderData);
      }

    }
  },
};
