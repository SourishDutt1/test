
var wall,thickness
var bullet,weight,speed



  
  function setup() {
  
    createCanvas(800,400);

    bullet=createSprite(400, 200, 50, 50);
    bullet.shapeColor="blue"
    bullet.velocity=speed
    wall=createSprite(1200,200,thickness,height/2);
    thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);
  }
  
  function draw() {
    background(255,255,255); 
 if(hasCollide(bullet,wall)){
bullet.velocityX=0
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

if(damage<10){
wall.shapeColor=color(0,255,0);
 }
 if(damage>10){
  wall.shapeColor = color(255,0,0);
   }
   bulletRightEdge = bullet.x + bullet.width;
wallLeftEdge = wall.x;
if(bulletRightEdge>=wallLeftEdge){
return true

}
return false
  }
    drawSprites();
  }
  function hasCollided(Lbullet,Lwall){

  }