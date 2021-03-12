var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
var school;
var bottomGrass1,road;
var priyam;
function preload()
{
 carAnimation.loadAnimation("images/car1.png");
}

function setup() {
  createCanvas(1366,1000);
  carGroup1 = new Group();
  logGroup1 = new Group();
  for( var i = 0;i < 40; i++){
  cars = new Car(2);
  carGroup1.add(cars.spt);
  }
for(var i = 0;i<6;i++){
  logs = new Log(-3);
  logGroup1.add(logs.spt)}
  priyam = new player(width+300,height-60);

 }

function draw() {
  background("skyblue");
translate(0,-priyam.spt.y+height-200);
for(i=1;i<logGroup1.length;i++){
  if(logGroup1[i].x<-70){
    logGroup1[i].x=width+70;
  }}
  for(i=2;i<carGroup1.length;i++){
    if(carGroup1[i].x>width+ 50){
      carGroup1[i].x=-20;
    }
}
for(var i=0;i<6;i++){
  var bottomGrass1 = createSprite(683,height-50-(i*400),width,grassHeight);
  bottomGrass1.shapeColor = "green";
  if(i%2===0){
    var road = createSprite(683,height-150-(i*400)-grassHeight,width,300)
    road.shapeColor = "black";
    road.depth=1;
    bottomGrass1.depth = road.depth
    priyam.depth = bottomGrass1.depth+1;
  }
}
 
 

  drawSprites();
}
function keyPressed(){
  if(keyCode == UP_ARROW){
    priyam.move(0,-2);
  }else if(keyCode == DOWN_ARROW){
    priyam.move(0,2);
  }else if(keyCode == LEFT_ARROW){
    priyam.move(-2,0);
  }else if(keyCode == RIGHT_ARROW){
    priyam.move(2,0);
  }
  }
      
