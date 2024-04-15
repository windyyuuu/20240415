let bg = ["#FAEBCD"];
let p = ["#E06A4E", "#DEB853", "#789F8A", "#5A3D2B"];
var bears = []
var bear
class bear_class{
  constructor(args){
    this.p = args.p || { x:random(0,width),y:random(0,height) };
    this.w = args.w || (random(100,60));
    this.h = args.h || (random(100,60));
    this.c = args.c || (random(p));
    this.d = args.d || (random(100,60))
    this.v = args.v || {x:random(-2,2),y:random(-5,5)}
    this.r = args.r || random(80,90)
    
  }
  draw(){
    push();
      translate(this.p.x + this.w / 2, this.p.y + this.h / 2);


      //  臉
      noStroke();
      fill(this.c);
      rectMode(CENTER);
      rect(0, 0, this.d, this.d, this.d / 2, this.d / 2, 0, 0);

      //  眼睛
      fill("#000000");
      circle(-this.d / 6, -this.d / 50, this.d / 7.5);
      circle(this.d / 6, -this.d / 50, this.d / 7.5);

      //  鼻子
      fill(bg);
      ellipse(0, this.d / 7.5, this.d / 2.2, this.d / 3);

      //  嘴巴
      fill(this.c);
      ellipse(0, this.d / 11, this.d / 5, this.d / 7);

      pop();
    }
  
  
    update() {
      this.p.x = this.p.x + this.v.x
      this.p.y = this.p.y + this.v.y
      if(this.p.x<0){
        this.v.x = -this.v.x
      }
      if(this.p.x>width){
        this.v.x = -this.v.x
      }
      if(this.p.y<0){
        this.v.y = -this.v.y
      }
      if(this.p.y>height){
        this.v.y = -this.v.y
      }
    
  }
  isBearInRange(){ //計算物件與滑鼠的距離是否小於直徑
    //d：把物件位置與滑鼠間的距離
    let d = dist(mouseX,mouseY,this.p.x,this.p.y)
    if(d<this.r){
      return true 
    }
    else{
      return false
    }
  
  }
}


function setup() {
  
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  background(bg);
  for(i=0;i<25;i=i+1){
    bear = new bear_class({ //傳參數值到class內(需加{})
       
    })
     
    bears.push(bear)
  }
 
}
var score = 0

function draw(){
  background(bg);
  fill("#fef9ef");
  stroke("#000");
  rect(40, 40,  300,60);

  fill("#f00")
  noStroke()
  textSize(40)
  text("你現在得分"+score,60,83)

  

  for(j=0;j<bears.length;j=j+1){
    bear = bears[j]
    bear.draw()
    bear.update()
   
  
  }
}

function mousePressed(){ 
  
  for(let bear of bears){ //balls放著所有的物件，每次拿出一個物件放入ball
    if(bear.isBearInRange()){
      bears.splice(bears.indexOf(bear),1)
      score = score+4
    }
  }
}




