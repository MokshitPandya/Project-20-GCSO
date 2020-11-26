var car1, wall1;
var speed1, weight1;
var line
var car2, wall3;
var speed2, weight2;


function setup() {
  createCanvas(1400,600);

  line = createSprite(600,300,1600,20);
  line.shapeColor = "white";

speed1 = random(55,90);
weight1 = random(400,1500);

car1 = createSprite(50,150,50,50);
car1.shapeColor = "white";
car1.velocityX = speed1;

wall1 = createSprite(1300,150,60,200)
wall1.shapeColor = color(80,80,80);

speed2 = random(55,90);
weight2 = random(400,1500);

car2 = createSprite(50,450,50,50);
car2.shapeColor = "white";
car2.velocityX = speed2;

wall2 = createSprite(1300,450,60,200)
wall2.shapeColor = color(80,80,80);

}


function draw() {
  background("black");  
  
  isTouching1();
  isTouching2();
  
  drawSprites();
}

function isTouching1(){
if(wall1.x - car1.x < (car1.width + wall1.width)/2){
  car1.velocityX = 0;
var deformation = 0.5 * weight1 * speed1 * speed1 / 22500;


if(deformation < 80){
  car1.shapeColor = color(0, 255, 0);
}

if(deformation < 180 && deformation > 100){
  car1.shapeColor = color(230, 230, 0);
}

if(deformation > 180){
  car1.shapeColor = color(255, 0, 0);
}

}

}

function isTouching2(){
  if(wall2.x - car2.x < (car2.width + wall2.width)/2){
    car2.velocityX = 0;
  var deformation = 0.5 * weight2 * speed2 * speed2 / 22500;
  
  
  if(deformation < 80){
    car2.shapeColor = color(0, 255, 0);
  }
  
  if(deformation < 180 && deformation > 100){
    car2.shapeColor = color(230, 230, 0);
  }
  
  if(deformation > 180){
    car2.shapeColor = color(255, 0, 0);
  }
  
  }
  
  }



