var fixedRect, movingRect;
function setup() {
  
  createCanvas(1200,800);
  fixedRect=createSprite(400,200,30,80);
  movingRect=createSprite(400,500,80,30);
  fixedRect.shapeColor="yellow";
  movingRect.shapeColor="yellow";
movingRect.velocityY=-6;
fixedRect.velocityY=6;
}

function draw() {
  background("black"); 
 
  if(movingRect.x-fixedRect.x< fixedRect.width/2+movingRect.width/2 &&
    fixedRect.x-movingRect.x< fixedRect.width/2+movingRect.width/2 &&
    movingRect.y-fixedRect.y< fixedRect.height/2+movingRect.height/2 &&
    fixedRect.y-movingRect.y< fixedRect.height/2+movingRect.height/2 ){
fixedRect.shapeColor="red";
movingRect.shapeColor="red";
fixedRect.velocityY=fixedRect.velocityY*(-1);
movingRect.velocityY=movingRect.velocityY*(-1);
  }
  else {
    fixedRect.shapeColor="yellow";
  movingRect.shapeColor="yellow";
  }
  drawSprites();

}