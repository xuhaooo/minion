const string = `/**
* 你好，我叫徐浩，是一名前端开发求职者
*
* 今天天气真好，送你一只小黄人吧~~~
*/

/******先画小黄人的皮肤*******/
#minion-body {
   background: #FFCD41;
   border-radius: 100px 100px 60px 60px;
   height: 340px;
   width: 200px;
   z-index: 0;
}

/******再画小黄人的眼睛*******/

#goggles {
   background: #2a2a2a;
   border-radius: 2px;
   height: 26px;
   margin: 80px 0 0 -2px;
   width: 204px;
   z-index: 10;
}
#frame {
   background: #898989;
   border-radius: 2px;
   height: 32px;
   margin: -3px 0 0 46px;
   width: 108px;
   z-index: 11;
}
#lense {
   background: #000;
   border-radius: 50%;
   border: solid 14px #898989;
   box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
   height: 100px;
   margin: -36px 0 0 50px;
   width: 100px;
   z-index: 12;
}
#eye-ball {
   background: #fff;
   border-radius: 50%;
   box-shadow: 1px 1px 14px rgba(0, 0, 0, 0.5) inset;
   height: 80px;
   margin: -26px 0 0 60px;
   width: 80px;
   z-index: 13;
}
#eye-pupil {
   background: #000;
   border-radius: 50%;
   border: solid 8px #3F1515;
   height: 26px;
   margin: 30px 0 0 26px;
   width: 26px;
   z-index: 13;
}

/******然后是小黄人的嘴**********/

#mouth {
   background: #640F0F;
   border-radius: 0 0 100px 100px;
   height: 50px;
   margin: 170px 0 0 50px;
   width: 100px;
   z-index: 20;
}
.teeth {
   background: #fff;
   border-radius: 0 0 8px 8px;
   float: left;
   height: 14px;
   margin: 0 0 0 0;
   width: 20px;
   z-index: 22;
}
#tongue {
   background: #D54747;
   border-radius: 50%;
   height: 20px;
   margin: 30px 0 0 23px;
   width: 54px;
   z-index: 20;
}
#mouth-shadow {
   border-radius: 0 0 100px 100px;
   box-shadow: 1px 1px 14px rgba(0, 0, 0, 0.5) inset;
   height: 50px;
   width: 100px;
   z-index: 29;
}

/********手手**********/

#left-arm {
   transform: rotate(40deg);
   height: 70px;
   margin: 210px 0 0 -20px;
   z-index: -30;
}
#left-hand {
   transform: rotate(120deg);
   height: 90px;
   margin: 240px 0 0 -4px;
   z-index: 50;
}
#right-arm {
   transform: rotate(-40deg);
   height: 70px;
   margin: 210px 0 0 200px;
   z-index: -30;
}
#right-hand {
   transform: rotate(-120deg);
   height: 90px;
   margin: 240px 0 0 190px;
   z-index: 50;
}

/********小黄人的工装裤*********/

#dungarees {
   margin: 280px 0 0 0;
}
#left-strap {
   visibility: visible;
   transform: rotate(-50deg);
   border-radius: 16px 0 4px 4px;
   margin: -90px 0 0 18px;
   z-index: 50;
}
#right-strap {
   visibility: visible;
   transform: rotate(50deg);
   border-radius: 0 16px 4px 4px;
   margin: -90px 0 0 170px;
   z-index: 50;
}
#dungarees-main {
   height: 60px;
   width: 200px;
   border-radius: 0 0 100px 100px;
   box-shadow: 2px 2px 4px -2px rgba(0, 0, 0, 0.5);
   z-index: 36;
}
#dungarees-front {
   height: 70px;
   width: 120px;
   border-radius: 10px 10px 0 0;
   margin: -40px 0 0 40px;
   z-index: 36;
}
#dungarees-pocket {
   z-index: 50;
   height: 40px;
   width: 60px;
   border-radius: 0 0 50% 50%;
   margin: -14px 0 0 70px;
}
#dungarees-pocket-left {
   z-index: 50;
   height: 36px;
   width: 40px;
   transform: rotate(-40deg);
   border-radius: 0 0 50% 50%;
   margin: 10px 0 0 14px;
}
#dungarees-pocket-right {
   z-index: 50;
   height: 36px;
   width: 40px;
   transform: rotate(40deg);
   border-radius: 0 0 50% 50%;
   margin: 10px 0 0 146px;
}
#dungarees-logo {
   z-index: 50;
   height: 20px;
   width: 20px;
   transform: rotate(45deg);
   border: 5px solid;
   margin: -6px 0 0 90px;
}

/********脚脚************/

#legs {
   margin: 260px 0 0 0;
}
#left-leg, #right-leg {
   background: #336188;
   height: 80px;
   width: 40px;
   z-index: 31;
}
#left-foot, #right-foot {
   background: #272727;
   height: 24px;
   width: 50px;
   border-bottom: 6px solid #000000;
   box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
   z-index: 34;
}

/**
* 好了，小黄人画好了，送给你吧
* 
* 如果对我的项目感兴趣，请联系我哟~
*/
`
const player = {
  id: undefined,
  time: 30,
  n: 1,
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnFast': 'fast'
  },
  ui: {
    demo1: document.querySelector('#demo1'),
    demo2: document.querySelector('#demo2')
  },
  init: () => {
    player.ui.demo2.innerText = string.substr(0, player.n)
    player.ui.demo1.innerHTML = string.substr(0, player.n)
    player.bindEvents()
    player.play()
  },
  bindEvents: () => {
    for(let key in player.events){
      if(player.events.hasOwnProperty(key)){
        document.querySelector(key).onclick = player[player.events[key]]
      }
    }
  },
  run: () => {
    player.n += 1
    if(player.n > string.length){
      window.clearInterval(player.id)
      return 
    }
    player.ui.demo2.innerText = string.substr(0, player.n)
    player.ui.demo1.innerHTML = string.substr(0, player.n)
    player.ui.demo2.scrollTop = player.ui.demo2.scrollHeight
  },
  play: () => player.id = setInterval(player.run, player.time),
  pause: () => window.clearInterval(player.id),
  slow: () => {
    player.pause()
    player.time = 100
    player.play()
  },
  fast: () => {
    player.pause()
    player.time = 1
    player.play()
  }
}

player.init()