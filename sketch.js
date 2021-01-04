var bullet, wall, speed, weight, damage, thickness;

function setup(){

createCanvas(1600,400);
speed=random(223,321);
weight=random(30,52);
bullet = createSprite(50,200,50,50);
bullet.velocityX=speed;

wall = createSprite(1200,200,thickness,height/2);
wall.shapeColor=(80,80,80);

thickness = random(22,83);
damage=0.5*weight*speed*speed/thickness*thickness*thickness;
}


function draw(){
  background(0);
if(bullet.isTouching(wall)){
  bullet.velocityX=0;
 if(damage>10){
   bullet.shapeColor="red";
}else{
    bullet.shapeColor="green";
}
}
drawSprites();
} 