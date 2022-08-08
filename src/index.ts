// import {hi} from './hi'
import './style/index.less';
import Food from './moudel/food';
import Snake from './moudel/snake';
import ScorePanel from './moudel/ScorePanel'
import GameControl from './moudel/GameControl';
// function sun(a: number, b: number): number {
//     return a + b
// }
// console.log(sun(1,9),hi)
// console.log(Promise)

// const food =new Food();
// food.change()


const gameControl=new GameControl();
// gameControl.init()
let startBtn=document.querySelector('.start-game') as HTMLElement;
let restartBtn=document.querySelector('.restart') as HTMLElement;

console.log(startBtn)
startBtn.addEventListener('click',function(){
    gameControl.run();
})
restartBtn.addEventListener('click',function(){
    console.log(2222)
    gameControl.reset();
    gameControl.run();
})

// const scorePanel=new ScorePanel(10,10);
// for(let i=0;i<10;i++){
//     scorePanel.addFraction()
// }