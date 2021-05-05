var backImage,backgr;
var player, playerImg;
var giant,giantImg;
var title,titleImg;
var gameOver,gameOverImg;
var play,restart;
var playImg,resetImg;
var rock1,rock3;
var rock1Img,rock3Img;
var coin2,coin2Img;
var coinImg,coin;
var Ground;
var score=0;
var lives=3;
var giantL=5;
var axe,axe2,axeImg,axe2Img,axe3,axe4,axe3Img,axe4Img,axe5,axe6,axe5Img,axe6Img,axe7,axe8,axe7Img,axe8Img,axe9,axe10,axe9Img,axe10Img;
var win,winImg;
var exit,exitImg;

var END =0;
var PLAY =1;
var SERVE=2;
var gameState = SERVE;

function preload(){
  backImage=loadImage("back.jpg");
  playerImg = loadImage("boy.png");
  giantImg = loadImage("giant.png");
  titleImg = loadImage("title.png");
  playImg = loadImage("play.png");
  resetImg = loadImage("reset.png");
  rock1Img = loadImage("rock.png");
  rock3Img = loadImage("rock3.png");
  coinImg = loadImage("coin.png");
  coin2Img = loadImage("coin-2.png");
  axeImg = loadImage("axe.png");
  axe2Img = loadImage("axe2.png");
  axe3Img = loadImage("axe.png");
  axe4Img = loadImage("axe2.png");
  axe5Img = loadImage("axe.png");
  axe6Img = loadImage("axe2.png");
  axe7Img = loadImage("axe.png");
  axe8Img = loadImage("axe2.png");
  axe9Img = loadImage("axe.png");
  axe10Img = loadImage("axe2.png");
  gameOverImg=loadImage("gameOver.png");
  winImg = loadImage("win.png");
  exitImg = loadImage("exit.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  backgr=createSprite(1000,200,10,800);
  backgr.addImage(backImage);
  backgr.scale=4.0;
  backgr.velocityX=-6;
  
  
  title = createSprite(700,300,20,50);
  title.addImage(titleImg);
  title.scale = 0.4;
  title.visible=true;

  win = createSprite(800,400,20,50);
  win.addImage(winImg);
  win.scale = 0.8;
  win.visible=false;
  
  Ground = createSprite(700,700,3000,20);
  Ground.visible=false;

  play = createSprite(700,600,20,50);
  play.addImage(playImg);
  play.scale = 0.1;
  play.visible=true;

  exit = createSprite(1470,50,20,50);
  exit.addImage(exitImg);
  exit.scale = 0.1;
  exit.visible=true;

  coin2 = createSprite(1700,600,20,50);
  coin2.addImage(coin2Img);
  coin2.scale = 0.01;
  coin2.visible=true;

  restart = createSprite(750,700,20,50);
  restart.addImage(resetImg);
  restart.scale = 0.1;
  restart.visible=false;

  rock1 = createSprite(1700,600,20,50);
  rock1.addImage(rock1Img);
  rock1.scale = 0.1;
  rock1.velocityX=0;
  rock1.visible=false;

  rock3 = createSprite(1700,600,20,50);
  rock3.addImage(rock3Img);
  rock3.scale = 0.3;
  rock3.velocityX=0;
  rock3.visible=false;

  coin = createSprite(1900,600,20,50);
  coin.y = random(250,400);
  coin.addImage(coinImg);
  coin.scale = 0.01;
  coin.velocityX=0;
  coin.visible=false;

  coin2 = createSprite(2000,1500,20,50);
  coin2.y = random(250,400);
  coin2.addImage(coin2Img);
  coin2.scale = 0.01;
  coin2.velocityX=0;
  coin2.visible=false;

  axe = createSprite(20000,600,20,50);
  axe.y = random(250,400);
  axe.addImage(axeImg);
  axe.scale = 0.1;
  axe.velocityX=0;
  axe.visible=false;

  axe2 = createSprite(3000,200,20,50);
  axe2.addImage(axe2Img);
  axe2.scale = 0.2;
  axe2.velocityX=0;
  axe2.visible=false;

  axe3 = createSprite(40000,600,20,50);
  axe3.y = random(250,400);
  axe3.addImage(axe3Img);
  axe3.scale = 0.1;
  axe3.velocityX=0;
  axe3.visible=false;

  axe4 = createSprite(3020,200,20,50);
  axe4.addImage(axe4Img);
  axe4.scale = 0.2;
  axe4.velocityX=0;
  axe4.visible=false;

  axe5 = createSprite(60000,600,20,50);
  axe5.y = random(250,400);
  axe5.addImage(axe5Img);
  axe5.scale = 0.1;
  axe5.velocityX=0;
  axe5.visible=false;

  axe6 = createSprite(3015,200,20,50);
  axe6.addImage(axe6Img);
  axe6.scale = 0.2;
  axe6.velocityX=0;
  axe6.visible=false;

  axe7 = createSprite(80000,600,20,50);
  axe7.y = random(250,400);
  axe7.addImage(axe7Img);
  axe7.scale = 0.1;
  axe7.velocityX=0;
  axe7.visible=false;

  axe8 = createSprite(3010,200,20,50);
  axe8.addImage(axe8Img);
  axe8.scale = 0.2;
  axe8.velocityX=0;
  axe8.visible=false;

  axe9 = createSprite(100000,600,20,50);
  axe9.y = random(250,400);
  axe9.addImage(axe9Img);
  axe9.scale = 0.1;
  axe9.velocityX=0;
  axe9.visible=false;

  axe10 = createSprite(3005,200,20,50);
  axe10.addImage(axe10Img);
  axe10.scale = 0.2;
  axe10.velocityX=0;
  axe10.visible=false;

  player = createSprite(700,550,20,50);
  player.addImage(playerImg);
  player.scale = 0.1;
  player.visible=false;

  gameOver = createSprite(750,300,50,50);
  gameOver.addImage(gameOverImg);
  gameOver.scale=1.3;
  gameOver.visible=false;

  giant = createSprite(300,200,20,50);
  giant.addImage(giantImg);
  giant.scale = 0.8;
  giant.visible=false;
  giant.setCollider("rectangle",0,0,550,550);
  

  rockGroup = new Group();
  rockGroup2 = new Group();
  coinGroup = new Group();
  coinGroup2 = new Group();
}

function draw() { 
  background("green");


  if(backgr.x<100){
    backgr.x=backgr.width/2;
  }

 if(gameState===SERVE){

    if(mousePressedOver(play)){
      gameState=PLAY;

    }
    coinGroup2.destroyEach();
    coinGroup.destroyEach();
    rockGroup.destroyEach();
    rockGroup2.destroyEach();
    play.visible=true;
    giant.visible=false;
 }

  if(gameState===PLAY){
   
 

  player.visible=true;
  giant.visible=true;
  title.visible=false;
  play.visible=false;
  rock1.visible=true;
  rock1.velocityX=-12;
  rock3.visible=true;
  rock3.velocityX=-12;
  axe.visible=true;
  axe.velocityX=-12;
  axe2.visible=true;
  axe3.visible=true;
  axe3.velocityX=-12;
  axe4.visible=true;
  axe5.visible=true;
  axe5.velocityX=-12;
  axe6.visible=true;
  axe7.visible=true;
  axe7.velocityX=-12;
  axe8.visible=true;
  axe9.visible=true;
  axe9.velocityX=-12;
  axe10.visible=true;
  coin.visible=true;
  coin.velocityX=-12;
  coin2.visible=true;
  coin2.velocityX=-12;

  if(keyDown("space") && player.y >= 380) {
    player.velocityY = -12;
  }
  player.velocityY = player.velocityY + 0.8;

  if(coinGroup.isTouching(player)){
    coinGroup.destroyEach();
    score=score+2;
  }

  if(coinGroup2.isTouching(player)){
    coinGroup2.destroyEach();
    score=score+2;
  }

  if(rockGroup.isTouching(player)){
    rockGroup.destroyEach();
    lives=lives-1;
  }

  if(rockGroup2.isTouching(player)){
    rockGroup2.destroyEach();
    lives=lives-1;
  }
  
  if(axe.isTouching(player)){
    axe2.velocityX=-18;
    axe.destroy();
  }

  if(axe2.isTouching(giant)){
    axe2.destroy();
    giantL=giantL-1;
  }

  if(axe3.isTouching(player)){
    axe4.velocityX=-18;
    axe3.destroy();
  }

  if(axe4.isTouching(giant)){
    axe4.destroy();
    giantL=giantL-1;
  }

  if(axe5.isTouching(player)){
    axe6.velocityX=-18;
    axe5.destroy();
  }

  if(axe6.isTouching(giant)){
    axe6.destroy();
    giantL=giantL-1;
  }

  if(axe7.isTouching(player)){
    axe8.velocityX=-18;
    axe7.destroy();
  }

  if(axe8.isTouching(giant)){
    axe8.destroy();
    giantL=giantL-1;
  }

  if(axe9.isTouching(player)){
    axe10.velocityX=-18;
    axe9.destroy();
  }

  if(axe10.isTouching(giant)){
    axe10.destroy();
    giantL=giantL-1;
  }

  if(giantL<1){
    gameState=END;
    win.visible=true;
    giant.visible=false;
  player.visible=true;

  }
   

  if(lives<1){
    gameState=END;
    gameOver.visible=true;
    giant.visible=true;
  }
   
  spawnObstacles();
  spawnObstacles2();
  spawnCoins();
  spawnCoins2();

  }
  else if(gameState===END){

  player.visible=false;
  restart.visible=true;
  rock1.visible=false;
  rock1.velocityX=0;
  rock3.visible=false;
  rock3.velocityX=0;
  coin.visible=false;
  coin.velocityX=0;
  coin2.visible=false;
  coin2.velocityX=0;
  restart.x-1;
  backgr.velocityX=0;
  axe.visible=false;
  axe.velocityX=0;
  axe2.visible=false;
  axe2.velocityX=0;
  axe3.visible=false;
  axe3.velocityX=0;
  axe4.visible=false;
  axe4.velocityX=0;
  axe5.visible=false;
  axe5.velocityX=0;
  axe6.visible=false;
  axe6.velocityX=0;
  axe7.visible=false;
  axe7.velocityX=0;
  axe8.visible=false;
  axe8.velocityX=0;
  axe9.visible=false;
  axe9.velocityX=0;
  axe10.visible=false;
  axe10.velocityX=0;

  if(mousePressedOver(restart)){
    reset();
  }

  }
  if(mousePressedOver(exit)){
    gameState=SERVE;
    title.visible=true;
    backgr.velocityX=-6;
    win.visible=false;
    player.visible=false;
    axe.visible=false;
    axe3.visible=false;
    axe5.visible=false;
    axe7.visible=false;
    axe9.visible=false;
    score=0;
    lives=3;
    giantL=5;
  }

 player.collide(Ground);

  drawSprites();

  
  textSize(15);
  text("SCORE  "+score,1300,50);
  text("LIVES  "+lives,1300,80);
  text("GIANT LIFE  "+giantL,700,50);
}

function spawnObstacles(){

 if(frameCount % 600===0){
  rock1 = createSprite(1700,600,20,50);
  rock1.addImage(rock1Img)
  rock1.scale=0.3;
  rock1.visible=false;
  rock1.lifetime=300;
  player.depth=rock1.depth+1;
  rockGroup.add(rock1);

 }
}
function spawnObstacles2(){

  if(frameCount % 350===0){
    rock3 = createSprite(2000,600,20,50);
    rock3.addImage(rock3Img)
    rock3.scale=0.3;
    rock3.visible=false;
    rock3.lifetime=300;
    player.depth=rock3.depth+1;
    rockGroup2.add(rock3);
  
   }
  }

function spawnCoins(){

  if(frameCount % 200===0){
    coin = createSprite(1700,600,20,50);
    coin.y = random(250,400);
    coin.addImage(coinImg);
    coin.scale = 0.01;
    coin.velocityX=0;
    coin.visible=false;
    coin.lifetime=300;
    coinGroup.add(coin);
  }

}

function spawnCoins2(){

  if(frameCount % 150===0){
    coin2 = createSprite(1700,600,20,50);
    coin2.y = random(250,400);
    coin2.addImage(coin2Img);
    coin2.scale = 0.01;
    coin2.velocityX=0;
    coin2.visible=false;
    coin2.lifetime=300;
    coinGroup2.add(coin2);
  }

}

function reset(){

    gameState = PLAY;
    gameOver.visible = false;
    restart.visible = false;
    win.visible=false;
    backgr.velocityX=-6;
    lives=3;
    score = 0;
    giantL = 5;
    gameState=PLAY;

  }
