var bg, bgimg, bg2, bgimg2;

var harry, harryimg;

var deatheaters, deathimg;

var text1, textimg;

var lightningGroup;

var lightning1, lightning2, lightning3, lightning4;

var lightning5, lightning6;

var gameState = "start";

var score = 500;

function preload(){
  bgimg = loadImage("Images/background.jpg");
  
  harryimg = loadImage("Images/harryonbroom.png");
  
  deathimg = loadImage("Images/bella2.png");
  
  textimg = loadImage("Images/Chooseyourplayer.png");
  
  lightning1 = loadImage("Images/Lightning1.png");
  lightning2 = loadImage("Images/Lightning2.png");
  lightning3 = loadAnimation("Images/Lightning3.png", "Images/Lightning4.png");
  lightning4 = loadAnimation("Images/Lightning4.png", "Images/Lightning3.png");
  lightning5 = loadImage("Images/Lightning5.png");
  lightning6 = loadImage("Images/Lightning6.png");

  bgimg2 = loadImage("Images/Burrowtemp.jpg");
}

function setup(){
  createCanvas(displayWidth, 400)
  
  bg = createSprite(displayWidth/2, 200, displayWidth, 400);
  bg.addImage(bgimg);
  bg.x = bg.width/2;
  bg.velocityX = -5;
  bg.scale = 1.5;
  
  harry = createSprite(displayWidth-660, 200, 30, 30);
  harry.addImage(harryimg);
  harry.scale = 0.3;
  //harry.velocityX = -3;
  
  deatheaters = createSprite(displayWidth-810, 200, 10, 10);
  deatheaters.addImage(deathimg);
  deatheaters.scale = 0.3;
  
  text1 = createSprite(displayWidth/2, 50, 50, 50);
  text1.addImage(textimg);
  text1.scale = 0.1;

  lightningGroup = new Group();
  
}

function draw(){
  background("white");
  drawSprites();

  textSize(20);
  text("Count:" + score, camera.position.x-50, 320);

  
  if(bg.x<200){
    bg.x = bg.width/2;
  }

  /*if(bg.y<200){
    bg.y = bg.height/2;
  }

  if(bg.y>200){
    bg.y = bg.height/2;
  }*/

    //if()
  
  
  if(mousePressedOver(harry) && gameState === "start"){

    harryPlayer();

    bg.velocityX = 0;

    gameState = "play"
    //console.log(gameState);
  }

  if(gameState === "play"){
    spawnLightning();

  //arrow controls
  if(keyIsDown(LEFT_ARROW)){
      harry.x = harry.x-3;
      camera.position.x = harry.x;
    }
  if(keyIsDown(RIGHT_ARROW)){
      harry.x = harry.x+3;
      camera.position.x = harry.x;
    }
  if(keyIsDown(DOWN_ARROW)){
      harry.y = harry.y+3;
      camera.position.y = harry.y;
    }
  if(keyIsDown(UP_ARROW)){
      harry.y = harry.y-3;
      camera.position.y = harry.y;
    }

    if(harry.x<0 && gameState === "play"){
      gameState = "level1";
    }
  
    if(gameState === "level1"){
      harryPlayer();
      bg.visible = false;
      bg2 = createSprite(displayWidth/2, 200, displayWidth, 20);
      bg2.addImage(bgimg2);
      bg2.scale = 1.2;
      harry.x = 790;
      //console.log(harry.depth);
      harry.depth = bg2.depth;
      harry.depth = harry.depth+5;
  
      if(keyIsDown(LEFT_ARROW)){
        harry.x = harry.x-3;
        camera.position.x = harry.x;
      }
  
      if(keyIsDown(RIGHT_ARROW)){
        harry.x = harry.x+3;
        camera.position.x = harry.x;
      }
  
      if(keyIsDown(DOWN_ARROW)){
        harry.y = harry.y+3;
        camera.position.y = harry.y;
      }
  
      if(keyIsDown(UP_ARROW)){
        harry.y = harry.y-3;
        camera.position.y = harry.y;
      }
    }

    if(lightningGroup.isTouching(harry)){
      score = score - 1;
    }

    if(score === 0){
      testSize(30)
      text("You lost", 300, 200);
    }
  }
    
    /*if(keyDown("space")&&gameState === "Harry"){
      gameState = "Bellatrix";
    }*/

    /*if(gameState === "Harry"){
      bg.velocity = 0;
    }*/
     
}

  function harryPlayer(){
    text1.visible = false;
    deatheaters.visible = false;
    harry.debug=true;
    harry.x = 790;
    //console.log(harry.x)

    function keyPressed(){
      if(keyCode===LEFT_ARROW){
        harry.x = harry.x+3;
        camera.x = harry.x
      }
      if(keyCode===RIGHT_ARROW){
        harry.x = harry.x-3;
      }
      if(keyCode===DOWN_ARROW){
        harry.y = harry.y+3;
      }
      if(keyCode===UP_ARROW){
        harry.y = harry.y-3;
      }
    }
  }

  function bellaPlayer(){
    function keyPressed(){
      if(keyCode===LEFT_ARROW){
        harry.x = harry.x+3;
        camera.x = harry.x
      }
      if(keyCode===RIGHT_ARROW){
        harry.x = harry.x-3;
      }
      if(keyCode===DOWN_ARROW){
        harry.y = harry.y+3;
      }
      if(keyCode===UP_ARROW){
        harry.y = harry.y-3;
      }
    }  
  }

    
   
    


  
  /*if(gameState === "Harry"){
     harryPlayer();
    if(keyDown("space")&&gameState === "Harry"){
      gameState = "Bellatrix";
    }
     }
  else if(gameState === "Bellatrix"){
    badGuy();
  }*/

  /*function bellatrixPlayer(){
    if(keyDown("right_arrow")){
       deatheaters.x = deatheaters.x+20;
       }
  }*/

  function spawnLightning(){
    if(frameCount % 50 === 0){
      var lightning = createSprite(Math.round(random(10,700)), Math.round(random(10,50)), 40, 40);
      lightning.depth = bg.depth;
      lightning.depth = lightning.depth+10;
        var rand = 
      Math.round(random(1,6));
        switch(rand){
          case 1:
      lightning.addImage(lightning1);
                    break;
          case 2:
      lightning.addImage(lightning2);
                    break;
          case 3:
      lightning.addAnimation("l3", lightning3);
                    break;
          case 4:
      lightning.addAnimation("l4", lightning4);
                    break;
          case 5:
      lightning.addImage(lightning5);
                    break;
          case 6:
      lightning.addImage(lightning6);
                    break;
        }
    console.log(lightning.depth);
    console.log(bg.depth);
    lightning.lifetime = 50;
    lightningGroup.add(lightning);
    }
  }