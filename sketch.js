  var bgImg;
  var cat;
  var mouse;
  
function preload() {
    bgImg = loadImage ("images/garden.png");
    catimg1 = loadAnimation("images/cat1.png");
    mouseimg1 = loadAnimation("images/mouse1.png");
    catimg2 = loadAnimation("images/cat2.png");
    catimg3 = loadAnimation("images/cat3.png");
    mouseimg2 = loadAnimation("images/mouse2.png");
    mouseimg3 = loadAnimation("images/mouse3.png");
}

function setup(){
    createCanvas(1000,800);
   // garden= createSprite(1000,800);
   //garden.addImage(bgImg)

    cat = createSprite(870,600)
    cat.addAnimation("sleepingCat",catimg1)
    cat.scale = 0.2;
   
    mouse = createSprite(200,600)
    mouse.addAnimation("sleepingMouse",mouseimg1)
    mouse.scale = 0.2;

  }

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
  if( cat.x-mouse.x<cat.width/2-mouse.width/2){
    cat.velocityX = 0;
    cat.addAnimation("catLastImage", catimg3); 
    cat.x =300;
    cat.scale=0.2;
    cat.changeAnimation("catLastImage");
    mouse.addAnimation("mouseLastImage", mouseimg3); 
     mouse.scale=0.15;
     mouse.changeAnimation("mouseLastImage");
  }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if (keyCode === LEFT_ARROW){
 cat.velocityX = -5; 
 cat.addAnimation("catRunning",catimg2);
  cat.changeAnimation("catRunning");
  mouse.addAnimation("mouseTeasing",mouseimg2);
  mouse.frameDelay = 25;
  mouse.changeAnimation("mouseTeasing");
}

}
