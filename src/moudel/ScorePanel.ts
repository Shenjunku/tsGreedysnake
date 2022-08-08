//定义表示积分牌的类
class ScorePanel{
    //分数
    fraction=0;
    //等级
    grade=1;
    //分数和等级对应的dom;在构造函数初始化
    fractionDom:HTMLElement;
    gradeDom:HTMLElement;
    //设置一个变量等级
    maxGrade:number;
    //设置一个变量表示多少分进行升级
    upFraction:number;
    constructor(maxGrade:number=10,upFraction:number=10) {
        this.fractionDom=document.getElementById('fraction');
        this.gradeDom=document.getElementById('grade');
        this.maxGrade=maxGrade;
        this.upFraction=upFraction;
    }
    //设置一个加分的方法
    addFraction(){
        //分数自增
        // this.fraction++;
        this.fractionDom.innerHTML=++this.fraction+'';
        // console.log(this)
        //判断分数是多少
        if(this.fraction%this.upFraction===0){
            this.gradeUp()
        }
    }
    //提升等级
    gradeUp(){
      if(this.grade<this.maxGrade){
        this.gradeDom.innerHTML=++this.grade+'';
      }
    }
    reset(){
      this.fraction=0;
      this.grade=1;
      this.fractionDom.innerHTML=0+'';
      this.gradeDom.innerHTML=1+'';

    }
}
export default ScorePanel