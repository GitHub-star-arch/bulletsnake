var snake, food;
var snake1;
var arr = []
function setup() {
  createCanvas(400,400);
  snake = createSprite(200, 200, 20, 20);
  arr.push(snake);
  food = createSprite(200,200,20,20);
}
function draw() {
  background(0,0,0);  
  if (keyDown(UP_ARROW)) {
    snake.velocityX=0
    snake.velocityY=-20
  }
  if (keyDown(DOWN_ARROW)) {
    snake.velocityX=0
    snake.velocityY=20
  }
  if (keyDown(RIGHT_ARROW)) {
    snake.velocityX=20
    snake.velocityY=0
  }
  if (keyDown(LEFT_ARROW)) {
    snake.velocityX=-20
    snake.velocityY=0
  }
  if (snake.isTouching(food)) {
    snake1 = createSprite(200, 200, 20, 20);
    arr.push(snake1);
    food.x=random(0,400)
    food.y=random(0,400)
  }
  for (var i = arr.length - 1; i > 0; i--){
    arr[i].x=arr[i-1].x;
    arr[i].y=arr[i-1].y;
  }
  
  drawSprites();
  if (snake.x > 400 || snake.x < 0 || snake.y > 400 || snake.y < 0) {
    snake.Visibility=0;
  }
}