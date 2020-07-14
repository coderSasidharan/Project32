const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var count = 4

var score = 0;

var BColor


function preload(){
  changeBG();
}

function setup() {
  createCanvas(1350,650);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(1100,550,200,20);

  box1 = new Box(1020, 530, 20, 20)
  box2 = new Box(1040, 530, 20, 20)
  box3 = new Box(1060, 530, 20, 20)
  box4 = new Box(1080, 530, 20, 20)
  box5 = new Box(1100, 530, 20, 20)
  box6 = new Box(1120, 530, 20, 20)
  box7 = new Box(1140, 530, 20, 20)
  box8 = new Box(1160, 530, 20, 20)
  box9 = new Box(1180, 530, 20, 20)
  box10 = new Box(1050, 510, 20, 20)
  box11 = new Box(1070, 510, 20, 20)
  box12 = new Box(1090, 510, 20, 20)
  box13 = new Box(1110, 510, 20, 20)
  box14 = new Box(1130, 510, 20, 20)
  box15 = new Box(1150, 510, 20, 20)
  box16 = new Box(1080, 490, 20, 20)
  box17 = new Box(1100, 490, 20, 20)
  box18 = new Box(1120, 490, 20, 20)
  box19 = new Box(1100, 470, 20, 20)

  ball = new Ball(150,150,20)

  slingshot = new Slingshot(ball.body,{x:150,y:150})

  log1 = new Log(300,300,100,10)
  log2 = new Log(450,200,100,10)
  log3 = new Log(600,400,100,10)
  log4 = new Log(700,300,100,10)
  log5 = new Log(800,450,100,10)
  log6 = new Log(900,350,100,10)
}

function draw() {
  if(BColor){
    background(BColor);
  }
  Engine.update(engine)
  
  ground.display();

  for (var i = 1; i < 20; i++) {
    eval("box"+i).display();
  }
 
  ball.display();

  slingshot.view();

  for(var i = 1; i<7; i++){
    eval("log"+i).display();
  }

  for (var i = 1; i < 20; i++) {
    eval("box"+i).score();
  }

  fill("blue")
  textSize(40)
  text("score:"+score, 1000,100);
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY})
}

function mouseReleased(){
  slingshot.connect.bodyA = null;
}

function keyPressed(){
  if(keyCode===32 && count>0){
      slingshot.connect.bodyA = ball.body;
      count = count-1;
  }
}
async function changeBG(){
  var promise = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var data = await promise.json();
  var time = (data.datetime.slice(11,13));
  if(time<=17 && time>=4){
     BColor = "white";
  }else{
      BColor = "black";
  }
}

