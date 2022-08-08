class Food{
    //定义一个属性表示食物所对应的元素
    element:HTMLElement;
    constructor(){
        this.element=document.getElementById('food')
    };
    //定义一个方法获取食物的x轴坐标位置
    get X(){
        return this.element.offsetLeft
    };
    //定义一个方法获取食物的y轴坐标位置
    get Y(){
        return this.element.offsetTop
    }
    //修改食物的位置
    change(){
        //生成随机位置
        //食物的位置最小是0，最大是290
        //蛇移动一格就10的位置，所以要求食物的坐标必须是10的倍数
        let top=Math.round(Math.random()*29)*10;
        let left=Math.round(Math.random()*29)*10;
        this.element.style.left=left+ 'px';
        this.element.style.top=top+'px';
    }

}
export default Food