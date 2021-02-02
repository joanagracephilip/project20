
var forest,forestImg;
var tom,tomImg1,tomRunning,tomLastImg;
var jerry,jerryImg1,jerry2,jerry3;



function preload() {
    //load the images here
     forestImg=loadImage("garden.png");
    tomImg=loadImage("cat1.png");
    tomRunning=loadAnimation("cat2.png","cat3.png");
    tomLastImg=loadImage("cat4.png");
    jerryImg1=loadImage("mouse1.png");
     jerry2=loadAnimation("mouse2","mouse3");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    forest=createSprite(0,0,1000,800);
    forest.addImage("garden",forestImg);
    tom=createSprite(400,500,50,50);
    tom.addImage("tom",tomImg);
    jerry=createSprite(300,600,50,50)
    jerry.addImage("jerry",jerryImg);
  
}

function draw() {

    background("225");
    //Write condition here to evalute if tom and jerry collide
    
   if(tom.x-jerry.x<(tom.width-jerry.width)/2){
           
    tom.velocityX=0;
    tom.addImage("tomlast",tomLastImg);
    tom.changeAnimation("tomlast",tomLastImg);

     jerry.addImage("jerrylast",jerry3);
     jerry.changeAnimation("jerrylast",jerry3);
    
   }


     keyPressed();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode=== LEFTAROW){
      tom.velocityX=-5
      tom.addAnimation("cat running",tomRunning);
      tom.changeAnimation("cat Running",tomRunning);

       jerry.addAnimation("jerryteasing",jerry2);
       jerry.changeAnimation("jerryteasing",jerry2);
  }

}
