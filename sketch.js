var bg, bgImage
var rocket, rocketImage
var meteorImage
var portalImage
var obstacles
var rand
var obstaclesGroup
var gameState = "play"



function preload(){
bgImage = loadImage("Galaxy-Background.png");
rocketImage = loadImage("Rocketship.png");
meteorImage = loadImage("Meteorite.png");
portalImage = loadImage("Portal.png");
}

function setup() {
 createCanvas(500,600);
  bg = createSprite(150,200,500,600);
  bg.addImage("Background", bgImage);

  rocket = createSprite(250,500,100,125);
  rocket.addImage("Rocket", rocketImage);
  rocket.scale=0.15
  
  obstaclesGroup = createGroup();
  
}

function draw() {
background("black");
if(gameState ==="play"){
    rocket.x=mouseX

    if(rocket.isTouching(obstaclesGroup)){
      gameState = "end"
    }
    spawnObstacles()

    drawSprites();


}



if(gameState ==="end"){
    text("Game Over",250,300);
}










}

function spawnObstacles(){
 if(frameCount % 60 === 0){
   obstacles = createSprite(150,10,20,20)
   obstacles.x = Math.round(random(50,450))
   obstacles.velocityY = 4;


   var rand = Math.round(random(1,2));
   switch(rand){
    case 1: obstacles.addImage(portalImage);
            break;
    case 2: obstacles.addImage(meteorImage);
            break;
    default: break;

   }
   obstacles.scale = 0.05

   obstaclesGroup.add(obstacles)

   obstaclesGroup.setLifetimeEach(700)

 }
}