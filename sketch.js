var monkey,
  monkeyImage,
  banana,
  bananaImage,
  ground,
  obstacle,
  obstacleImage,
  bananaGroup,
  obstacleGroup,
  backgroundImage,
  score;

function preload() {
  monkeyImage = loadAnimation("Monkey_01.png",   "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png","Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png","Monkey_10.png");
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");
}

function setup() {
  createCanvas(400, 400);
  monkey = createSprite(100, 170, 10, 10);
  monkey.addAnimation("monkey_animation", monkeyImage);
  monkey.scale = 0.1;
  ground = createSprite(200, 300, 800, 2);
  ground.velocityX = -6;
  bananaGroup = new Group();
  obstacleGroup = new Group();
}

function draw() {
  background(220);
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
    monkey.collide(ground);
    if (keyDown("space")){
      monkey.velocityY = -5;
    }
  monkey.velocityY = monkey.velocityY + 0.25;
  spawnBanana();
  spawnObstacle();
  drawSprites();
  
  
}

function spawnBanana(){
  if (World.frameCount % 80 == 0) {
    var banana = createSprite(400, random(150, 280), 10 , 10);
    banana.addAnimation("banana_animation", bananaImage);
    banana.scale = 0.04;
    banana.velocityX = -8;
    bananaGroup.add(banana);
    console.log(banana);
  }
}

function spawnObstacle(){
  if (World.frameCount % 300 == 0) {
    var obstacle = createSprite(400, random(150, 280), 10 , 10);
    obstacle.addAnimation("obstacle_animation", obstacleImage);
    obstacle.scale = 0.14;
    obstacle.velocityX = -8;
    obstacleGroup.add(obstacle);
  }
}