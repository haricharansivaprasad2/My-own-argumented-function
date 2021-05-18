var movingRect1, movingRect2;

function setup() {
  createCanvas(1200,800);
  movingRect1 = createSprite(400, 100, 50, 50);
  movingRect1.shapeColor = "green";
  movingRect2 = createSprite(400,700,30,30);
  movingRect2.shapeColor = "green";
  movingRect1.velocityY = 3;
  movingRect2.velocityY = -3;
}

function draw() {
  background(255,255,255);

  bounceOff(movingRect1,movingRect2);

  drawSprites();
}
