(function(t){function e(e){for(var r,s,o=e[0],l=e[1],c=e[2],d=0,u=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&u.push(n[s][0]),n[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);h&&h(e);while(u.length)u.shift()();return a.push.apply(a,c||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],r=!0,o=1;o<i.length;o++){var l=i[o];0!==n[l]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=i[0]))}return t}var r={},n={app:0},a=[];function s(e){if(r[e])return r[e].exports;var i=r[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=r,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(i,r,function(e){return t[e]}.bind(null,r));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var h=l;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0478":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABeCAYAAACq0qNuAAAACXBIWXMAAAsTAAALEwEAmpwYAAANDElEQVR4nO2bW4ws11WGv7X2rurumTlz7GMfG8sxShBSICDFEgLCRVxEAFnEkiXEE+IdAQ8oEoqQ4BHBY4hAQbxEAh64PNgmAYKfMA7EwoAUEkXyBcuOjy9x7Jwzl56urr33WjzsmjlnPIdHV0kn9UutafVUz3R9vfeqf/17l7g7s8aXTv0BvlM1g59IM/iJNIOfSDP4iTSDn0gz+Ik0g59IM/iJNIOfSDP4iTSDn0gz+Ik0g59IM/iJNIOfSDP4iTSDn0gz+Ik0g59IM/iJNIOfSDP4iTSDn0gz+Ik0g59Iccx/9kOPPOybGFgvA0laou2CLXAioGBONKPNmWXOfOWpf5Jb3//wI7/gSRVQ3AN4RDwiHmh9y38/9fi543/8F3/JtyFwEoUc6muOYA5IAe+InlkkY1GM//znZ869//3UqOBNG3IIdDHQa0tTdsBWGA2gWDGiGokevL/w/k2I9CHgRIyI04A3qEWW5eLkzSGSQiRFIWll6iIUF1wMNyN6wK0gXt7v0z+nUcEXj5gHYhYg0JSIWINJi0kkmQGFAhS5uJm2iw1dCGfQ3RvEG1RaBLtwfApOUUddaIZf1x+Ci5K9wQn0Ugia378Tv43GHfEswCJNhsYDSwOxgkuhuFE8IxhimXCbXczi0BZH3HAKhiMU1BLCxRniwWg8EV1wryPeRMmuJBEMxVFMlHHH+9jgfQesJfaFBuff/+Hvzj5AAJrhAwmwBn7kt37DNw00RVlm59knn2QFhOE7SUNFVs+sJfDR3/5NP24CSGYv9fzrE19gDyjUke44BUgIW+BHH3uMRAAPcJsZ835qXPBWy0NAiCXROjTmqAjqhlJAG5D6RaRgdFExhLY4LbBj0GQAJ4eMSybYlhSXbELkoF2hJBozIhBIhAE7FBxIKMISLGOqg7Ub7boKjD7i6+mLOWKGAEIG22IIfWlwAWnriG+LsZOcYEL0eryLYUEQjKIVaJCI0AINYi3BA01OGBnoAIeSgIKI0Eogi4AkTBVcuLNHvAhFBA+CCJiAiCGeKShHWSkBrDc6CotSCC5DbS8oXt2IVEwmiiC4bGk55p78CisxGs/sFmeT34WkoEK0Q1b6BoQTUGVHrhL1OsgVRBRl3DtjRgavbIOSorAsQgYQIfWZdTYONXK8WUPZsly2fO4zf8qiWdAgg9NPgOEiONXdCI7ohku8wWd//fuQ+CZN6Nj093H94GVeTQ8Qd3e4rN/kvoPH2eMFKFveTh/g5X97DkQhR0hjkhgZvCOYDA+VM2sXNIIUTnLm+smGaD0qxiKuWDVOrN6DiFXQUkuWA4IgKLDm3vwSK3+BmI45kA+ziR0HvRKSsYgniLwK8nXwLUstddqIgaU6/UbUqOBBCC5oFpaluhgVxQlgRohKs4jE4jRNAK8eJCAEhhqPYxiGYpy2o0qtXQmxLW1JRE30JbMtid2TgMmWol49qSwoLCFTvz3z+hhRo4JvLONodRpudEAmYIuWE3eEwKXVCi2BGISoDtYTNF5okAJH7HBAZA3SAa+AXCd7x7ZkUjrg6up12mVDPuxotq+TFw+ydsUdTuwhKP94c+qMfPOjTHm75U9+6lO+DUK0ExYp82d/9Mc02cAzbTD2F5EGQyhnZq8WFqXhVV5/6TMs9RWKGbDhvu/9LmALLKErvPz8NQoN7c6S3h7gBx7+K3KpxtEA733c+nKLRi4159WFhqNWUe/Zw1g2DbtaP5aQiJRbPHiVwOBAjtmRl1iFr9NLoLdCPZ0IGKQjvufub5PX1+ndOCgfxTN4Wda/JmP3quc1Kfg2CzEKLg4YO8BeACcMgMsFm1evCLU2ZKR2njTUDOywHpQWsO1g2xG3Gcs90TpWGY5IQBy61ek0KfjdnJEtmCRWqbAEYrUqQC0rN+XDa4BbdSNeEApRDPUeuhv10H4BxWtjZJE+F8w3LBWKFYqUsa+lFzQq+B985FHvQ4PICcGNL33hqSGbOXXlNyXD6/Keq59AdSYUgm1p7YjoXZ0Zb22gCMmVZucK3P8g3A17V66wJ5f4ylfvA98jeuRGeQi5Sxx2h26s4MebOzOP74OyiQIqLIuxBHacs+w9E7h5uZMz+LUDuEUOSI0d1DPqucJLHRQlYrBYQuNQFPoe9Aar9hpijprQkur6m9f/MratGblzDRjhfAmR6mLOhVQOItW/yO2gOCBC8UCRCD6UqL5ALnVCrI4gnGBiqFlNRUuPhkgfHC/GqoNNGXqAOzmrEVfEBR3yF4PaCqmDJaJtahlxr95cDwePfupATgMtgHdoc6Tpr6DWQO5rTpyHTjTvQ9hDFwV0ASWy8BWeGkyUmHepGZsCUqODETUq+FigkTrD1Wvj2KM0RAKH/Mnv/Ap7foCaoHrMx37iuyEc1mAMhhWngHgg0PPcl/+LCDRWM/qzRSuBPn6Tn/3lPVIw3B21hi8+8SJaAIcb8hadA8HqG0buZ8YF7068xU5kajauRIIndv1t7rK36oywYy4buBziUnCpNhNCLUHessiVWywDdKkTwqUWrsuLfXLsMBFCWdJmiAnElJOwc1ayzt40Josx/1ld7BAcx0VI1NHfEqioMsgWMBDHfTkEWQmkDOtH1NHpdvOy8N6fPuxbaQ6JzTH4AhBWGUKB4kYQo8n1eQV/B9f44JnGag0vWkPeDGSE+4KQYw8l1RyLwWtYQ+2OhkRLTj2816dDiVGGgPHWhy+hBKAFu5sN4HIZkyVbuQs9Dch8/LBm0qzmZz75ST9phKKJB9IL/MHPLfnA9kWCG+rO008/D1SgpvDDP3YVqE2TlhXPfemtet3wWjE+/ms/DXEN4RBY8PhffrUGjwIb2eP3Pn3MlvqdJOBd/w7NarYaWUehj84lhBQTnjowH3L2weBwOrKl+nccF8el2nRhcISaBje0BlOkgNg+imHhKiccs5bBOE154kwNPgp9qDvDBGHTb1j3axYGwVrO8jEdKkwRUB/6WSPHwX0PTomQB6p1g5QIiJzgNAhGC/SDjR13F81FTRuSWc+lpKgX2rzgnXIPJgXF2JNMF15jUTir2WIr3Bf1Qis3Lbid9lgSwFdQBLjMWhckrhIsYr6gBVZ6c1vIlBoV/Ec+8XFPGjER1J1n/v6LBIxM4mR7zMYOSfT0lrmXa4j+Pg/JN4gNuO/wH8++Vp2OJFy2PPrIR1jsAa2At3z+L75MsLo15FDgdz8LG65xKUML/O3f/BTWfAtvlvR8iN0o3lldhAfFS75Ts5pAF5QiwsISS7bskCnbQk6RN/RBrktgmzNNcHoCrh2igpQFag2lrMgomS3FT4AEGsD26q4Fh6aA673I/juYXEG7xEqO2N9dE9vX0KahY4dwhnlwSyNq5C18SlZlGx0vTiLjFMQK6o6GHknOauusNJNNcI1gSjAl5i3iDZ33dAKp7cjNhigNSEsXoC2wk6HRBceHcKhHaF+3EGjf0foxMUHm7boSdWo9R9boi90+rJ66nC7iFdyNFcdckQNaXROCs+83OJB7OXJli9OI08k1hBNSziSv2Q++BFtidpkNkV6uohJIXIL8Os2wb8OANq1Z5BpbdGyrj5+o3o8bkiFnO3fbHGhpaQrQGFeWh7z2tT9n2bwJnjnMV3nsVz+P5rpYtBB44nMfQ7ev8aHQI6XjX558A5N6sdzwDf7w0062N2moOxie+etPEPVbaHEaO2KV32TpivRG1EUNyc6ysTs4q5GhZDhONAXqXneRHmTNPfFVmvA8SKbn++mBToSszo7CdtFwZam0uSP01T0CWIAk99P7W2yALLArYCfP0+qLEISgSiCi2rLcDSx1/5allfFd/chZjaKuBHPctYINkYUtUInEJSxiIVp13i6QFVKErUDTOI1tWcZCZIUbZHZJQcns4NTjj9pqNS/fv+QulK0YpRS6NWwKlNRxXW6QJ7wRaeRSU86W80yNNTUA2NGGXfZZ+wfx7CyKk9MHa4wyDMi6geNBjjB6OSHIiht6jeSX2OJs2SfzMkWqje8F3u3upecheu0pHkH2saAU6TiSh0jyv/WPT9DGjprVfPjRn/cuQlGniGCiBIOdbOyWY/7n6WdZFVhmwODb+XyWcmkpHgTU6sPzuUDyQvZyRcQjQ9bDzd3KPjRR/fD6KXjP42U345Ya+rrMiVMkkENDVgVRnH1gh405vZVzuf2pjmVVPTulrqRIQqzQlNufyJoB9AD8bIfO1EENo8fChXi6UjT0+QXHBPpw89MUhXK7MCV4tSslDPDqTWS95WGf5Xn5ex4XfjlhdDDu3knPYEJxiAJNKWeePpzVglviyAuqN6ed7iera7A6LHxfpHg6yk+f/78D/U6v8bNuar6zeyLN4CfSDH4izeAn0gx+Is3gJ9IMfiLN4CfSDH4izeAn0gx+Is3gJ9IMfiLN4CfSDH4izeAn0gx+Is3gJ9IMfiLN4CfSDH4izeAn0gx+Is3gJ9IMfiLN4CfS/wHzoXszUiTj9AAAAABJRU5ErkJggg=="},"24b5":function(t,e){t.exports="data:image/png;base64,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"},"3fd8":function(t,e,i){t.exports=i.p+"flipper-animation-generator/img/ball_4.48ac04c6.png"},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var r=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("flipper-animation-generator",{ref:"fag",attrs:{"is-check-mode":!1},on:{completed:t.completed,"completed-playback":t.completedPlayback},model:{value:t.json,callback:function(e){t.json=e},expression:"json"}}),i("input",{attrs:{value:"Random New Result",type:"button"},on:{click:t.reloadRandom}}),i("input",{staticStyle:{"margin-left":"10px"},attrs:{value:"Playback Json",type:"button"},on:{click:t.playback}}),i("br"),i("H2",{staticStyle:{"margin-bottom":"0"}},[t._v("Data Json")]),i("br"),i("textarea",{ref:"json",staticStyle:{width:"500px",height:"600px"}})],1)},a=[],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"FAG",style:t.getStyle()})},o=[],l=i("2909"),c=(i("a9e3"),i("99af"),i("b8bf")),h=(i("159b"),{props:{isCheckMode:{type:Boolean,default:!1},rndStarPin:{type:Number,default:15},rndStar5:{type:Number,default:30},maxStar:{type:Number,default:5},rndPin:{type:Number,default:60}},data:function(){return{maxStarNum:{4:0,5:0},cxWidth:500,cxHeight:1769,displayHeight:896,mainCategory:1,detectCategory:2,ballStar:3,ball:null,engine:null,render:null,bounds:{x:0,y:0},moveAmount:4,starRepeatCheckTable:{},allPinList:[],allDetectList:[],ballLastY:0}},methods:{checkProps:function(){this.maxStar=this.maxStar>42?42:this.maxStar,this.rndStarPin=this.maxStar>42?100:this.rndStarPin,this.rndStarPin=this.rndStar5<=0?100:this.rndStarPin,this.rndStarPin=this.rndStar5>=100?100:this.rndStarPin},getRandomInt:function(t){return Math.floor(Math.random()*t)},createMainBall:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=this.getRandomInt(500),r=c["Bodies"].circle(i,0,23,{density:20,restitution:.5,isStatic:e,frictionAir:.01,collisionFilter:{category:t}},20);return this.setBallStar(r,this.ballStar),r},initMaxStar:function(){for(var t=0,e=0;e<10;e++)if(t=this.getRandomInt(this.maxStar),t>3)break;this.rndStar5>=100&&(t=0),this.rndStar5<=0&&(t=this.maxStar),this.maxStarNum={4:t,5:this.maxStar-t}},createGridBackground:function(){var t=c["Bodies"].rectangle(this.cxWidth/2,this.cxHeight/2,2*this.cxWidth,2*this.cxHeight,{isStatic:!0,isSensor:!0});return this.isCheckMode?t.render.fillStyle="#569cd8":t.render.fillStyle="transparent",t},createStar:function(t,e,r,n){var a={start_4:"#f5d259",start_5:"#f55a3c"},s=c["Bodies"].rectangle(e,r,28,28,{isStatic:!0,label:n,isSensor:!0,collisionFilter:{category:t}});if(this.isCheckMode)s.render.strokeStyle=a[n],s.render.fillStyle="transparent",s.render.lineWidth=1;else{switch(n){case"start_4":s.render.sprite.texture=i("0478");break;case"start_5":s.render.sprite.texture=i("597f");break}s.render.sprite.xScale=.7,s.render.sprite.yScale=.7}return s},createWall:function(){var t=c["Bodies"].rectangle(-40,0,43,2*this.cxHeight,{isStatic:!0}),e=c["Bodies"].rectangle(this.cxWidth+40,0,43,2*this.cxHeight,{isStatic:!0});return[t,e]},createDetect:function(t,e,i,r){var n=c["Bodies"].circle(e,i,r?80:40,{isStatic:!0,isSensor:!0,label:"detect",collisionFilter:{category:t}});return this.isCheckMode?(n.render.strokeStyle="#7a25ed",n.render.fillStyle="transparent",n.render.lineWidth=1):(n.render.lineWidth=0,n.render.fillStyle="transparent"),n},createStar5:function(t,e){return this.createStar(this.mainCategory,t,e,"start_5")},createStar4:function(t,e){return this.createStar(this.mainCategory,t,e,"start_4")},createRandomStar:function(t,e,i){var r=this,n=function(n){i?r.addStarZoneRecorderData&&r.addStarZoneRecorderData({star:n,x:t,y:e}):r.addStarRecorderData&&r.addStarRecorderData({star:n,x:t,y:e})},a=this.getRandomInt(100);if(a<this.rndStar5){if(!this.isCheckMode&&this.maxStarNum["5"]<=0)return;return n(5),this.maxStarNum["5"]--,this.createStar5(t,e)}if(this.isCheckMode||!(this.maxStarNum["4"]<=0))return n(4),this.maxStarNum["4"]--,this.createStar4(t,e)},createStarList:function(t,e){for(var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=[[84,217,350],[150,283,416]],n=[],a=0;a<r[e%2].length;a++){var s=r[e%2][a];if(this.isCheckMode||this.getRandomInt(100)<this.rndStarPin){if(this.starRepeatCheckTable["".concat(s,":").concat(t)])continue;var o=this.createRandomStar(s,t,i);if(o){n.push(o);var l=this.createDetect(this.detectCategory,s,t,i);n.push(l),this.starRepeatCheckTable["".concat(s,":").concat(t)]=o,this.allDetectList.push(l)}}}return n},createPin:function(t,e,r){var n=c["Bodies"].fromVertices(e,r,[{x:0,y:11},{x:11,y:0},{x:0,y:-11},{x:-11,y:0}],{isStatic:!0,label:"pin",collisionFilter:{category:t}});return this.isCheckMode?(n.render.strokeStyle="#00224f",n.render.fillStyle="transparent",n.render.lineWidth=1):(n.render.sprite.texture=i("24b5"),n.render.sprite.xScale=.7,n.render.sprite.yScale=.7),n},createPinList:function(t,e){for(var i=[[81,214,350,483],[14,148,284,416]],r=[],n=0;n<i[e%2].length;n++)if(this.isCheckMode||this.getRandomInt(100)<this.rndPin){var a=i[e%2][n];this.addIniPinRecorderData&&this.addIniPinRecorderData({x:a,y:t});var s=this.createPin(this.mainCategory,a,t);this.allPinList.push(s),r.push(s)}return r},initPin:function(){for(var t=[],e=490,i=12,r=76,n=0;n<=i;n++)t=[].concat(Object(l["a"])(t),Object(l["a"])(this.createPinList(e+n*r,n)));return t},initStar:function(){for(var t=[],e=748,i=9,r=76,n=0;n<=i;n++)t=[].concat(Object(l["a"])(t),Object(l["a"])(this.createStarList(e+n*r,n)));return t},initStarZone:function(){for(var t=[],e=1509,i=3,r=76,n=0;n<=i;n++)t=[].concat(Object(l["a"])(t),Object(l["a"])(this.createStarList(e+n*r,n,!0)));return t},setBallStar:function(t,e){if(this.isCheckMode)switch(e){case 3:t.render.fillStyle="#FFFFFF49";break;case 4:t.render.fillStyle="#f5d259";break;case 5:t.render.fillStyle="#f55a3c";break}else{switch(e){case 3:t.render.sprite.texture=i("9990");break;case 4:t.render.sprite.texture=i("3fd8");break;case 5:t.render.sprite.texture=i("ee65"),this.removeAllPinAndStar(this.engine.world);break}t.render.sprite.xScale=.7,t.render.sprite.yScale=.7}},removeAllPinAndStar:function(t){var e=this;for(var i in this.allPinList.forEach((function(i){e.removePin(t,i,0)})),this.allDetectList.forEach((function(i){e.removeStar(t,i)})),this.starRepeatCheckTable)this.removeStar(t,this.starRepeatCheckTable[i])},removePin:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100;setTimeout((function(){c["World"].remove(t,e)}),i)},removeStar:function(t,e){c["World"].remove(this.engine.world,e)},setBallStarAndRemoveStar:function(t,e,i){switch(this.removeStar(e,i),this.engine.timing.timeScale=.5,t){case 4:this.ballStar<4?(this.setBallStar(this.ball,4),this.ballStar=4):4===this.ballStar&&(this.setBallStar(this.ball,5),this.ballStar=5);break;case 5:this.ballStar<5&&this.setBallStar(this.ball,5),this.ballStar=5;break}},collisionChecking:function(t){var e=this;t.pairs.forEach((function(t){"pin"===t.bodyA.label?e.removePin(e.engine.world,t.bodyA):"pin"===t.bodyB.label?e.removePin(e.engine.world,t.bodyB):"detect"===t.bodyA.label||"detect"===t.bodyB.label?(e.engine.timing.timeScale=.1,e.moveAmount=1):"start_4"===t.bodyA.label||"start_4"===t.bodyB.label?e.setBallStarAndRemoveStar(4,e.engine.world,"start_4"===t.bodyA.label?t.bodyA:t.bodyB):"start_5"!==t.bodyA.label&&"start_5"!==t.bodyB.label||e.setBallStarAndRemoveStar(5,e.engine.world,"start_5"===t.bodyA.label?t.bodyA:t.bodyB)}))},collisionRemoveDetect:function(t){var e=this;t.pairs.forEach((function(t){"detect"!==t.bodyA.label&&"detect"!==t.bodyB.label||(e.engine.timing.timeScale=1,e.moveAmount=4)}))},setBounds:function(){if(this.render.bounds.max.y<this.cxHeight){var t=this.moveAmount,e=this.ball.position.y-this.ballLastY,i=this.render.bounds.max.y-this.ball.position.y<300?1.5:1;e>40?t=e*i:e>30?t=25*i:e>25?t=15*i:e>20&&(t=13*i),c["Bounds"].translate(this.render.bounds,{x:0,y:t}),this.ballLastY=this.ball.position.y}},setFirstForce:function(t){var e=this;setTimeout((function(){var t=e.getRandomInt(2);c["Body"].applyForce(e.ball,e.ball.position,{x:[-1,1][t]*e.getRandomInt(250),y:10})}),t)},clear:function(){c["Events"].off(this.engine),c["Events"].off(this.render),c["World"].clear(this.engine.world),c["Engine"].clear(this.engine),c["Render"].stop(this.render),this.render.canvas.remove(),this.render.canvas=null,this.render.context=null,this.render.textures={},this.ballStar=3,this.starRepeatCheckTable={},this.ballLastY=0}}}),d={data:function(){return{recorderData:{detect:0,pinCount:0,star5Count:0,star4Count:0,pin:[],starZone:[],star:[],ballStar:{start:0,end:0},path:[]},completed:!1,isAddTable:{},detectTable:{}}},methods:{roundTwo:function(t){return Math.round(100*t)/100},iniRecorderData:function(){this.recorderData={detect:0,pinCount:0,star5Count:0,star4Count:0,pin:[],starZone:[],star:[],ballStar:{start:0,end:0},path:[]},this.completed=!1,this.isAddTable={},this.detectTable={},this.recorderData.ballStar.start=this.ballStar},addIniPinRecorderData:function(t){this.recorderData.pin.push(t)},addStarZoneRecorderData:function(t){this.recorderData.starZone.push(t)},addStarRecorderData:function(t){this.recorderData.star.push(t)},recorder:function(t){var e=this;function i(t,e){var i=t.bodyA.label,r=t.bodyB.label;return i===e?t.bodyA.position:r===e?t.bodyB.position:void 0}var r=function(t,i,r){t&&!e.isAddTable["".concat(t.x,":").concat(t.y)]&&(i[r]=t,e.isAddTable["".concat(t.x,":").concat(t.y)]=!0)};if(this.ball&&!this.ball.isStatic&&this.ball.position.y<=this.cxHeight){var n,a,s,o;t.source.engine.pairs.list.forEach((function(t){o=i(t,"detect"),s=i(t,"pin"),n=i(t,"start_5"),a=i(t,"start_4")}));var l={x:this.roundTwo(this.ball.position.x),y:this.roundTwo(this.ball.position.y),boundsY:t.source.bounds.min.y};r(n,l,"star5"),l.star5&&this.recorderData.star5Count++,r(s,l,"pin"),l.pin&&this.recorderData.pinCount++,r(a,l,"star4"),l.star4&&this.recorderData.star4Count++,o&&!this.detectTable["".concat(o.x,":").concat(o.y)]&&(this.detectTable["".concat(o.x,":").concat(o.y)]=!0,this.recorderData.detect++),this.recorderData.path.push(l)}else this.completed||(c["World"].remove(this.engine.world,this.ball),this.recorderData.ballStar.end=this.ballStar,this.completed=!0,console.log(this.recorderData),this.$emit("completed",this.recorderData))}}},u={data:function(){return{ballPositionLength:0,itemTable:{pin:{},star:{}}}},methods:{iniPaybackData:function(){this.ballPositionLength=0,this.itemTable={pin:{},star:{}}},iniFixPin:function(t){var e=this,i=[];return t.forEach((function(t){var r=e.createPin(e.mainCategory,t.x,t.y);e.itemTable.pin["".concat(t.x,":").concat(t.y)]=r,i.push(r)})),i},iniFixStarZone:function(t){return this.createFixStarList(t)},iniFixStar:function(t){return this.createFixStarList(t)},createFixStarList:function(t){var e=this,i=[];return t.forEach((function(t){var r;r=5===t.star?e.createStar5(t.x,t.y):e.createStar4(t.x,t.y),e.itemTable.star["".concat(t.x,":").concat(t.y)]=r,i.push(r)})),i},setBallPosition:function(){if(this.ballPositionLength<this.value.path.length){var t=this.value.path[this.ballPositionLength];c["Body"].setPosition(this.ball,{x:t.x,y:t.y}),c["Bounds"].shift(this.render.bounds,{x:0,y:t.boundsY}),t.pin&&this.removePin(this.engine.world,this.itemTable.pin["".concat(t.pin.x,":").concat(t.pin.y)]),t.star5&&this.setBallStarAndRemoveStar(5,this.engine.world,this.itemTable.star["".concat(t.star5.x,":").concat(t.star5.y)]),t.star4&&this.setBallStarAndRemoveStar(4,this.engine.world,this.itemTable.star["".concat(t.star4.x,":").concat(t.star4.y)]),5===this.ballStar&&this.removeAllPlaybackPinAndStar(this.engine.world),this.ballPositionLength++}else this.ballPositionLength===this.value.path.length&&(c["World"].remove(this.engine.world,this.ball),this.$emit("completed-playback"),this.ballPositionLength++)},removeAllPlaybackPinAndStar:function(t){for(var e in this.itemTable.pin)this.removePin(t,this.itemTable.pin[e]);for(var i in this.itemTable.star)this.removeStar(t,this.itemTable.star[i])}}},f={name:"flipperAnimationGenerator",mixins:[h,d,u],props:{width:{type:Number,default:500},height:{type:Number,default:896},value:{type:Object,default:Object}},data:function(){return{}},methods:{getStyle:function(){var t=this.height*(this.width/this.cxWidth);return{"background-image":"url(".concat(i("c773"),")"),"background-size":"100% auto",width:"".concat(this.width,"px"),height:"".concat(t,"px")}},initRender:function(){this.checkProps(),this.engine=c["Engine"].create();var t=this.width/this.cxWidth,e=896*t,i=this.height*t>e?e:this.height;this.render=c["Render"].create({element:this.$refs.FAG,engine:this.engine,options:{width:this.cxWidth,height:i>896?896:i,showVelocity:!1,wireframes:!1,hasBounds:!0,background:"transparent"}}),this.render.canvas.style.width=this.width+"px"},initGenerator:function(){this.value.path?this.playbackMode():this.randomMode(),c["Render"].run(this.render);var t=c["Runner"].create();c["Runner"].run(t,this.engine),this.value.path?this.playbackEvents():this.randomEvents()},randomMode:function(){this.initMaxStar(),this.iniRecorderData(),this.ball=this.createMainBall(this.mainCategory),c["Composite"].add(this.engine.world,[this.createGridBackground()].concat(Object(l["a"])(this.initPin()),Object(l["a"])(this.initStarZone()),Object(l["a"])(this.initStar()),[this.ball],Object(l["a"])(this.createWall())));while(this.maxStarNum["4"]+this.maxStarNum["5"]>0)c["Composite"].add(this.engine.world,Object(l["a"])(this.initStar()))},randomEvents:function(){var t=this;c["Events"].on(this.engine,"collisionStart",(function(e){return t.collisionChecking(e)})),c["Events"].on(this.engine,"collisionEnd",(function(e){return t.collisionRemoveDetect(e)})),c["Events"].on(this.render,"beforeRender",(function(){return t.setBounds()})),c["Events"].on(this.render,"afterRender",(function(e){return t.recorder(e)})),this.setFirstForce(400)},playbackMode:function(){this.ball=this.createMainBall(this.mainCategory,!0),c["Composite"].add(this.engine.world,[].concat(Object(l["a"])(this.iniFixPin(this.value.pin)),Object(l["a"])(this.iniFixStarZone(this.value.starZone)),Object(l["a"])(this.iniFixStar(this.value.star)),[this.ball]))},playbackEvents:function(){var t=this;c["Events"].on(this.engine,"beforeUpdate",(function(e){return t.setBallPosition(e)}))},reload:function(){this.clear(),this.iniRecorderData(),this.iniPaybackData(),this.initRender(),this.initGenerator()}},mounted:function(){this.initRender()},watch:{value:function(){this.reload()}}},b=f,p=i("2877"),g=Object(p["a"])(b,s,o,!1,null,null,null),m=g.exports,A={name:"App",components:{FlipperAnimationGenerator:m},data:function(){return{json:{}}},methods:{playback:function(){this.json=JSON.parse(this.$refs.json.value)},reloadRandom:function(){this.$refs.json.value="",this.json={},this.$refs.fag.reload()},completed:function(t){this.$refs.json.value=JSON.stringify(t)},completedPlayback:function(){console.log("completedPlayback")}}},S=A,v=Object(p["a"])(S,n,a,!1,null,null,null),y=v.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(y)}}).$mount("#app")},"597f":function(t,e,i){t.exports=i.p+"flipper-animation-generator/img/star_5.eb307606.png"},9990:function(t,e,i){t.exports=i.p+"flipper-animation-generator/img/ball_3.7bd1d9b7.png"},c773:function(t,e,i){t.exports=i.p+"flipper-animation-generator/img/background.c18b4d87.jpg"},ee65:function(t,e,i){t.exports=i.p+"flipper-animation-generator/img/ball_5.ac761d65.png"}});
//# sourceMappingURL=app.df906bea.js.map
