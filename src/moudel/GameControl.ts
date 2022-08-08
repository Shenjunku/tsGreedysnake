import Food from "./food";
import ScorePanel from "./ScorePanel";
import Snake from "./snake";
//游戏控制器 控制其他的类
class GameControl {
    //蛇  
    snake: Snake;
    //食物
    food: Food;
    //记分牌
    scorePanel: ScorePanel;
    //创建一个属性来存储蛇的移动方向（也就是按键的方向）
    direction: string = 'Right';
    //
    isLive: boolean = true;

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel(10, 10);
        this.init()
    }
    //游戏初始化方法，调用后游戏开始
    init() {
        //绑定键盘按下的事件
        document.addEventListener('keydown', this.keydownHandler.bind(this));
        // this.run()
    }
    /**
     * ArrowUp
       ArrowDown
       ArrowRight
       ArrowLeft
     */
    //创建一个键盘按下的响应函数
    keydownHandler(event: KeyboardEvent) {
        // console.log(event.key)
        this.direction = event.key;
    }
    //蛇移动的方法
    run() {
        // console.log('llll',new Date().getTime())
        //获取蛇现在的坐标
        let X = this.snake.X;
        let Y = this.snake.Y;
        // 根据按键方向来计算X值和Y值（未更新）
        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                // 向上移动 top 减少
                Y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                // 向下移动 top 增加
                Y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                // 向左移动 left 减少
                X -= 10;
                break;
            case "ArrowRight":
            case "Right":
                // 向右移动 left 增加
                X += 10;
                break;
        }

        // console.log(X, 'xxxx')
        this.checkEat(X, Y)
        //捕捉蛇的异常
        try {
            this.snake.X = X;
            this.snake.Y = Y;
        } catch (e) {
            alert('你的蛇game over')
            this.isLive = false;

        }
        this.isLive && setTimeout(this.run.bind(this), 300);

    }
    //判断蛇是否吃到食物
    checkEat(X: number, Y: number) {
        if (X === this.food.X && Y === this.food.Y) {
            console.log('吃到食物')
            //重置食物的位置
            this.food.change();
            //分数增加
            this.scorePanel.addFraction();
            //蛇的身体增加
            this.snake.addBody()
        }
    }
    //
    reset() {
        // 重置蛇的数据
        this.snake.resetSnake()
        //重置食物的位置
        this.food.change();
        // 
        this.direction='Right';
        this.isLive=true;
        //重置分数
        this.scorePanel.reset()
    }
}
export default GameControl