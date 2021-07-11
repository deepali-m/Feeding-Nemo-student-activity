// Feeding Nemo Game in Javascript by Deepali Mokashi
//defining required varibales for the game

var bg, nemo, nemoImg;
var fish1Group, fish2Group, shark1Group, shark2Group;
var fish1Img, fish2Img, shark2Img, shark2Img;
var score = 0;
var gulpImg, gameOverImg, restartImg, restart, gameOver;
var gameState = "play"
var scoreB, gulpSound;

function preload() {
  //loading all the game assests
  bg = loadImage("ocean.jpg");

  nemoImgRight = loadImage("nemo.png");
  nemoImgLeft = loadImage("nemo_left.png");

  fish1Img = loadImage("fish1.png");


}
function setup() {
  //creating the canvas
  createCanvas(windowWidth, windowHeight);

  //creating nemo sprite and adding image
  nemo = createSprite(400, 200, 50, 50);
  nemo.addImage(nemoImgLeft)
  nemo.scale = 0.5;


}


function draw() {
  //adding background image
  background(bg);
  drawSprites();


  nemo.x = mouseX;
  nemo.y = mouseY;

  //adding animation to the nemo
  if (nemo.x < windowWidth / 2) {
    nemo.addImage(nemoImgLeft)
  }
  else {
    nemo.addImage(nemoImgRight)
  }
  spawnFish()
}

//defining spawnFish() function
function spawnFish() {
  if (frameCount % 80 === 0) {
    var fish1 = createSprite(windowWidth, random(0, windowHeight), 20, 20);
    fish1.velocityX = -8;
    fish1.addImage(fish1Img);
    fish1.scale = 0.2;
   
  }
}
