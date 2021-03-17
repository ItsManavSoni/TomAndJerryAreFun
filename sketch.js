var backgroundImage;
var catSprite, catAnimation,  catImage;
var mouseAnimation, mouseSprite, mouseImage, catStop, mouseStop;

function preload() {
  backgroundImage = loadImage("images/garden.png");

  catImage = loadImage("images/cat1.png");
  catAnimation = loadAnimation("images/cat2.png", "images/cat3.png");
  catStop = loadImage("images/cat4.png");
  
  mouseImage = loadImage("images/mouse1.png");
  mouseStop = loadImage("images/mouse4.png");
  mouseAnimation = loadAnimation("images/mouse2.png", "images/mouse3.png");
  
  
}
function setup() {
  createCanvas(1000, 800);

  catSprite = createSprite(900, 600); 
  catSprite.addAnimation("catOne", catImage);
  catSprite.scale = 0.2; 
  //catSprite.debug = true; 
 // catSprite.setCollider("rectangle", 0,0,catSprite.width, catSprite.height)

  mouseSprite = createSprite(350,600);
  mouseSprite.addAnimation("mouseOne", mouseImage);
  mouseSprite.scale = 0.2;
  
}
function draw() {
  background(backgroundImage); 

  if (catSprite.x - mouseSprite.x < (catSprite.width / 2 + mouseSprite.width / 2)) {
 
    catSprite.velocityX = 0;
   catSprite.addAnimation("catStop", catStop)
    catSprite.scale = 0.2
    catSprite.changeAnimation("catStop", catStop)
    //catSprite.x = 300;

   mouseSprite.addAnimation("mouseStop", mouseStop)
    mouseSprite.scale = 0.2
    mouseSprite.changeAnimation("mouseStop", mouseStop)
  }

  console.log(catSprite.x - mouseSprite.x )

  drawSprites();
}
function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    catSprite.velocityX = -4;
    catSprite.addAnimation("catRunning",  catAnimation)
    catSprite.changeAnimation("catRunning", catAnimation);
    

    mouseSprite.addAnimation("mouseTeasing",  mouseAnimation);
    mouseSprite.changeAnimation("mouseTeasing", catAnimation);
    
  }
  
}