var fixedRect, movingRect, rect1, rect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  rect1 = createSprite(200,100, 35,50)
  rect1.shapeColor = "blue"
  rect2 = createSprite(200,800,80,50)
  rect2.shapeColor = "blue"

  rect1.velocityY = 6
  rect2.velocityY = -6
}

function draw() {
  background(0,0,0);  

  bounceOff(rect1,rect2)
  bounceOff(movingRect,fixedRect);
  drawSprites();
}

