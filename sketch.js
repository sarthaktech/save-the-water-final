var gameState = "Intro"
var lives = 3
var score = 0
var Level1State = 1
var score2=0
var life=3


function preload(){
   bg1=loadImage("IMG/grassy-scenery.png")
   bg2=loadImage("IMG/BG.png")
   bg3=loadImage("IMG/bg2.jpg")
   bg4=loadImage("IMG/bg4.png")
   bg5=loadImage("IMG/bg5.png")
   bg6=loadImage("IMG/bg6.jpg")
   bucket=loadImage("IMG/bucket.png")
   
   drop2=loadImage("IMG/drop2.png")
   drop1=loadImage("IMG/drop1.png")
   pb=loadImage("IMG/play.png")
   nb=loadImage("IMG/next.png")
   mb=loadImage("IMG/more.png")
   t1=loadImage("IMG/png/Tile/1.png")
   t2=loadImage("IMG/png/Tile/2.png")
   t3=loadImage("IMG/png/Tile/3.png")
   o1=loadImage("IMG/png/Objects/Cactus (1).png")
   o2=loadImage("IMG/png/Objects/Bush (1).png")
   o3=loadImage("IMG/png/Objects/Crate.png")
   o4=loadImage("IMG/png/Objects/Grass (1).png")
   o5=loadImage("IMG/png/Objects/Stone.png")
   b=loadImage("IMG/b1.png")
   t=loadImage("IMG/trophy.png")

   standingBoy=loadAnimation("IMG/png/Idle (1).png")
   jumpingBoy=loadAnimation("IMG/png/Jump (1).png","IMG/png/Jump (2).png","IMG/png/Jump (3).png","IMG/png/Jump (4).png","IMG/png/Jump (5).png",
   "IMG/png/Jump (6).png","IMG/png/Jump (7).png","IMG/png/Jump (8).png","IMG/png/Jump (9).png","IMG/png/Jump (10).png","IMG/png/Jump (11).png",
   "IMG/png/Jump (12).png","IMG/png/Jump (13).png","IMG/png/Jump (14).png","IMG/png/Jump (15).png")
   jumpingBoy2=loadAnimation("IMG/png/j(1).png","IMG/png/j(2).png","IMG/png/j(3).png","IMG/png/j(4).png","IMG/png/j(5).png","IMG/png/j(6).png",
   "IMG/png/j(7).png","IMG/png/j(8).png","IMG/png/j(9).png","IMG/png/j(10).png","IMG/png/j(11).png","IMG/png/j(12).png","IMG/png/j(13).png",
   "IMG/png/j(14).png","IMG/png/j(15).png",)
   walkingBoy=loadAnimation("IMG/png/Walk (1).png","IMG/png/Walk (2).png","IMG/png/Walk (3).png","IMG/png/Walk (4).png","IMG/png/Walk (5).png",
   "IMG/png/Walk (6).png","IMG/png/Walk (7).png","IMG/png/Walk (8).png","IMG/png/Walk (9).png","IMG/png/Walk (10).png","IMG/png/Walk (11).png"
   ,"IMG/png/Walk (12).png","IMG/png/Walk (13).png","IMG/png/Walk (14).png","IMG/png/Walk (15).png")
   walkingBoy2=loadAnimation("IMG/png/w(1).png","IMG/png/w(2).png","IMG/png/w(3).png","IMG/png/w(4).png","IMG/png/w(5).png","IMG/png/w(6).png"
   ,"IMG/png/w(7).png","IMG/png/w(8).png","IMG/png/w(9).png","IMG/png/w(10).png","IMG/png/w(11).png","IMG/png/w(12).png","IMG/png/w(13).png",
   "IMG/png/w(14).png","IMG/png/w(15).png",)
}

function setup(){
 
    canvas = createCanvas(displayWidth, displayHeight)
    bg=createSprite(displayWidth/2,displayHeight/2,100,100)
    bg.addImage(bg1)
    bg.scale=1.3

    playButton=createSprite(displayWidth/2+300,displayHeight/2,100,100)
    playButton.addImage(pb)
    nextButton=createSprite(displayWidth-150,displayHeight-200,100,100)
    nextButton.addImage(nb)
    nextButton.scale=0.5
    MB=createSprite(displayWidth-150,displayHeight-800,100,100)
    MB.addImage(mb)
    MB.scale=0.5
    NB=createSprite(displayWidth-150,displayHeight-450,100,100)
    NB.addImage(mb)
    NB.scale=0.5
    NB1=createSprite(displayWidth/2,displayHeight-100,100,100)
    NB1.addImage(nb)
    NB1.scale=0.5

    trophy=createSprite(displayWidth/2,displayHeight/2+200)
    trophy.addImage(t)
    trophy.scale=0.8

    bucket1=createSprite(100,displayHeight/2,25,25)
    bucket1.addImage(bucket)
    bucket1.scale=0.2
    bucket2=createSprite(100,displayHeight/2-200,25,25)
    bucket2.addImage(bucket)
    bucket2.scale=0.2
    bucket3=createSprite(100,displayHeight/2+200,25,25)
    bucket3.addImage(bucket)
    bucket3.scale=0.2

    rainGroup= createGroup()

    tile1=createSprite(100,700,20,20)
    tile1.addImage(t1)
    tile2=createSprite(225,700,20,20)
    tile2.addImage(t2)
    tile3=createSprite(350,700,20,20)
    tile3.addImage(t3)
  
    tile4=createSprite(500,500,20,20)
    tile4.addImage(t1)
    tile5=createSprite(625,500,20,20)
    tile5.addImage(t2)
    tile6=createSprite(750,500,20,20)
    tile6.addImage(t3)
     
    tile7=createSprite(200,200,20,20)
    tile7.addImage(t1)
    tile8=createSprite(325,200,20,20)
    tile8.addImage(t2)
    tile9=createSprite(450,200,20,20)
    tile9.addImage(t3)

    tile10=createSprite(800,150,20,20)
    tile10.addImage(t1)
    tile11=createSprite(925,150,20,20)
    tile11.addImage(t2)
    tile12=createSprite(1050,150,20,20)
    tile12.addImage(t3)
     
    tile13=createSprite(700,800,20,20)
    tile13.addImage(t1)
    tile14=createSprite(825,800,20,20)
    tile14.addImage(t2)
    tile15=createSprite(950,800,20,20)
    tile15.addImage(t3)

    boy=createSprite(100,600,20,20)
    boy.addAnimation("stand",standingBoy)
    boy.addAnimation("walk",walkingBoy)
    boy.addAnimation("jump",jumpingBoy)
    boy.addAnimation("walk2",walkingBoy2)
    boy.addAnimation("jump2",jumpingBoy2)
    boy.scale=0.2 
    boy.debug=false
    boy.setCollider("rectangle",0,0,150,300)

    obj1=createSprite(600,400,0,0)
    obj1.addImage(o1)
    obj1.scale=0.7

    obj2=createSprite(230,600,0,0)
    obj2.addImage(o2)
    obj2.scale=0.8

    obj3=createSprite(370,100,0,0)
    obj3.addImage(o3)
    obj3.scale=0.7

    obj4=createSprite(860,70,0,0)
    obj4.addImage(o4)
    obj4.scale=1

    obj5=createSprite(940,700,0,0)
    obj5.addImage(o5)
    obj5.scale=1

    b1=createSprite(760,410)
    b1.addImage(b)
    b1.scale=0.15

    b2=createSprite(680,710)
    b2.addImage(b)
    b2.scale=0.15

    b3=createSprite(1030,60)
    b3.addImage(b)
    b3.scale=0.15

    b4=createSprite(200,110)
    b4.addImage(b)
    b4.scale=0.15

    d1=createSprite(470,630)
    d1.addImage(drop1)
    d1.scale=0.15

    d2=createSprite(930,410)
    d2.addImage(drop1)
    d2.scale=0.15

    d3=createSprite(670,130)
    d3.addImage(drop1)
    d3.scale=0.15

    d4=createSprite(230,340)
    d4.addImage(drop1)
    d4.scale=0.15
    
    d5=createSprite(1060,650)
    d5.addImage(drop1)
    d5.scale=0.15
    
    d6=createSprite(450,60)
    d6.addImage(drop1)
    d6.scale=0.15

    d7=createSprite(450,330)
    d7.addImage(drop1)
    d7.scale=0.15

    d8=createSprite(1050,240)
    d8.addImage(drop1)
    d8.scale=0.15

    d9=createSprite(20,370)
    d9.addImage(drop1)
    d9.scale=0.15
    
    d10=createSprite(110,120)
    d10.addImage(drop1)
    d10.scale=0.15



    
}

function draw(){
  
  

  if(gameState==="Intro"){
    background(bg3)
    drawSprites()
    bg.visible=false
    MB.visible=false
    NB.visible=false
    NB1.visible=false
    playButton.visible=true
    nextButton.visible=false
    bucket1.visible=false
    bucket2.visible=false
    bucket3.visible=false
    boy.visible=false
    tile1.visible=false
    tile2.visible=false
    tile3.visible=false
    tile4.visible=false
    tile5.visible=false
    tile6.visible=false
    tile7.visible=false
    tile8.visible=false
    tile9.visible=false
    tile10.visible=false
    tile11.visible=false
    tile12.visible=false
    tile13.visible=false
    tile14.visible=false
    tile15.visible=false
    obj1.visible=false
    obj2.visible=false
    obj3.visible=false
    obj4.visible=false
    obj5.visible=false
    
    b1.visible=false
    b2.visible=false
    b3.visible=false
    b4.visible=false
    d1.visible=false
    d2.visible=false
    d3.visible=false
    d4.visible=false
    d5.visible=false
    d6.visible=false
    d7.visible=false
    d8.visible=false
    d9.visible=false
    d10.visible=false
    trophy.visible=false
   
    



    
    textSize(50)
    fill("White")
    strokeWeight(5)
    textAlign(CENTER)
    text("Save the Water",displayWidth/2+300,200)

    if(mousePressedOver(playButton)&&gameState==="Intro"){
      gameState = "Story"

    }


  }

  if(gameState==="Story"){
    background(bg4)
    drawSprites()

    bg.visible=false
    playButton.visible=false
    nextButton.visible=false
    MB.visible=true
    NB.visible=false
    NB1.visible=false
    bucket1.visible=false
    bucket2.visible=false
    bucket3.visible=false
    boy.visible=false
    tile1.visible=false
    tile2.visible=false
    tile3.visible=false
    tile4.visible=false
    tile5.visible=false
    tile6.visible=false
    tile7.visible=false
    tile8.visible=false
    tile9.visible=false
    tile10.visible=false
    tile11.visible=false
    tile12.visible=false
    tile13.visible=false
    tile14.visible=false
    tile15.visible=false
    obj1.visible=false
    obj2.visible=false
    obj3.visible=false
    obj4.visible=false
    obj5.visible=false
    b1.visible=false
    b2.visible=false
    b3.visible=false
    b4.visible=false
    d1.visible=false
    d2.visible=false
    d3.visible=false
    d4.visible=false
    d5.visible=false
    d6.visible=false
    d7.visible=false
    d8.visible=false
    d9.visible=false
    d10.visible=false
    trophy.visible=false
    

    textSize(100)
    fill("red")
    textAlign(CENTER)
    text("STORY",displayWidth/2,100)
    textSize(50)
    text("Water Is Very Imortant Element In Nature",displayWidth/2,200)
    text("You Have To Save The Rain Water And Harvest It",displayWidth/2,320)
    text("So Please Save Water For Your Next Genration",displayWidth/2,440)
    text("Its Humble Requset To You",displayWidth/2,560)
    textSize(25)
    text("(Click Next To Continue)",displayWidth/2,750)

    if(mousePressedOver(MB)&&gameState==="Story"){
      gameState = "Level1-Intro"

    }
   

  }

  if(gameState==="Level1-Intro"){
    background(bg4)
    drawSprites()
  
    bg.visible=false
    MB.visible=false
    NB.visible=false
    NB1.visible=false
    playButton.visible=false
    nextButton.visible=true
    bucket1.visible=false
    bucket2.visible=false
    bucket3.visible=false
    boy.visible=false
    tile1.visible=false
    tile2.visible=false
    tile3.visible=false
    tile4.visible=false
    tile5.visible=false
    tile6.visible=false
    tile7.visible=false
    tile8.visible=false
    tile9.visible=false
    tile10.visible=false
    tile11.visible=false
    tile12.visible=false
    tile13.visible=false
    tile14.visible=false
    tile15.visible=false
    obj1.visible=false
    obj2.visible=false
    obj3.visible=false
    obj4.visible=false
    obj5.visible=false
    b1.visible=false
    b2.visible=false
    b3.visible=false
    b4.visible=false
    d1.visible=false
    d2.visible=false
    d3.visible=false
    d4.visible=false
    d5.visible=false
    d6.visible=false
    d7.visible=false
    d8.visible=false
    d9.visible=false
    d10.visible=false
    trophy.visible=false
    
   
  
    textSize(50)
    fill("darkblue")
    textAlign(CENTER)
    text("Level 1",displayWidth/2,100)
    textSize(30)
    fill("crimson")
    text("Here We have to Collet Rain Drops in the buckets.",displayWidth/2,200)
    text("Use Left and right arrow key to control the bucket.",displayWidth/2,250)
    text("Press Space key to bring the next bucket in the center.",displayWidth/2,300)
    textSize(45)
    text("Click on next Button to continue.",displayWidth/2,420)
    if(mousePressedOver(nextButton)&&gameState==="Level1-Intro"){
      gameState = "Level1"
  
    }
  
  }

  if(gameState==="Level1"){
    background("white")
    drawSprites()
     bg.visible=true
     MB.visible=false
     NB.visible=false
     NB1.visible=false
     bucket1.visible=true
     bucket2.visible=true
     bucket3.visible=true
     nextButton.visible=false
     playButton.visible=false
     boy.visible=false
     tile1.visible=false
     tile2.visible=false
     tile3.visible=false
     tile4.visible=false
     tile5.visible=false
     tile6.visible=false
     tile7.visible=false
     tile8.visible=false
     tile9.visible=false
     tile10.visible=false
    tile11.visible=false
    tile12.visible=false
    tile13.visible=false
    tile14.visible=false
    tile15.visible=false
    obj1.visible=false
    obj2.visible=false
    obj3.visible=false
    obj4.visible=false
    obj5.visible=false
    b1.visible=false
    b2.visible=false
    b3.visible=false
    b4.visible=false
    d1.visible=false
    d2.visible=false
    d3.visible=false
    d4.visible=false
    d5.visible=false
    d6.visible=false
    d7.visible=false
    d8.visible=false
    d9.visible=false
    d10.visible=false
    trophy.visible=false

   
  
     rain()
     textSize(30)
     fill("black")
     textAlign(CENTER)
     text("SCORE:"+score,displayWidth-120,30)
     text("Press 'SPACE KEY' To Bring The Bucket",displayWidth-850,30)
  
    if(Level1State===1){
      if(keyDown("space")){
        bucket1.x=displayWidth/2
        bucket1.y=displayHeight-100
      }
      if(keyDown("left")){
        bucket1.x-=10
      }
      if(keyDown("right")){
        bucket1.x+=10
      }
      
      if(rainGroup.isTouching(bucket1)){
        rainGroup[0].destroy()
        score+=5
      }
     if(score===50){
      bucket1.destroy()
      Level1State=2 
     }
  
      
    }  
  
    if(score===50){
      textSize(30)
      fill("black")
      textAlign(CENTER)
      text("Bucket 1 filled",displayWidth/2,displayHeight/2)
    }
  
    if(Level1State===2){
      if(keyDown("space")){
        bucket2.x=displayWidth/2
        bucket2.y=displayHeight-100
      }
      if(keyDown("left")){
        bucket2.x-=10
      }
      if(keyDown("right")){
        bucket2.x+=10
      }
      
      if(rainGroup.isTouching(bucket2)){
        rainGroup[0].destroy()
        score+=5
      }
     if(score===100){
     bucket2.destroy()
      Level1State=3
     }
    }  
    if(score===100){
      textSize(30)
      fill("black")
      textAlign(CENTER)
     text("Bucket 2 filled",displayWidth/2,displayHeight/2)
    }
  
    if(Level1State===3){
      if(keyDown("space")){
        bucket3.x=displayWidth/2
        bucket3.y=displayHeight-100
      }
      if(keyDown("left")){
        bucket3.x-=10
      }
      if(keyDown("right")){
        bucket3.x+=10
      }
      
      if(rainGroup.isTouching(bucket3)){
        rainGroup[0].destroy()
        score+=5
      }
     if(score===150){
      bucket3.destroy()
      gameState="Story2"
     }
    }    
    if(score===150){
      textSize(30)
      fill("black")
      textAlign(CENTER)
      text("Bucket 3 filled",displayWidth/2,displayHeight/2)
    }
  
  }
  if(gameState==="Story2"){
    background(bg5)
    drawSprites()

    bg.visible=false
    playButton.visible=false
    nextButton.visible=false
    MB.visible=false
    NB.visible=true
    NB1.visible=false
    bucket1.visible=false
    bucket2.visible=false
    bucket3.visible=false
    boy.visible=false
    tile1.visible=false
    tile2.visible=false
    tile3.visible=false
    tile4.visible=false
    tile5.visible=false
    tile6.visible=false
    tile7.visible=false
    tile8.visible=false
    tile9.visible=false
    tile10.visible=false
    tile11.visible=false
    tile12.visible=false
    tile13.visible=false
    tile14.visible=false
    tile15.visible=false
    obj1.visible=false
    obj2.visible=false
    obj3.visible=false
    obj4.visible=false
    obj5.visible=false
    b1.visible=false
    b2.visible=false
    b3.visible=false
    b4.visible=false
    d1.visible=false
    d2.visible=false
    d3.visible=false
    d4.visible=false
    d5.visible=false
    d6.visible=false
    d7.visible=false
    d8.visible=false
    d9.visible=false
    d10.visible=false
    trophy.visible=false


    textSize(100)
    fill("red")
    textAlign(CENTER)
    text("STORY",displayWidth/2,100)
    textSize(35)
    fill("blue")
    text("Here Is A Boy Who Knows The Importance Of Water.",displayWidth/2,200)
    text("He Has To Save The Water And Supply It By Passing Through Obstacles.",displayWidth/2,320)
    text("This Happen In Reality Also. ",displayWidth/2,440)
    text("People Have To Pass Such Obstacles For Water",displayWidth/2,560)
    text("So Please Save Water.",displayWidth/2,680)
    textSize(25)
    text("(Click Next To Continue.)",displayWidth/2,750)

    if(mousePressedOver(NB)&&gameState==="Story2"){
      gameState = "Level2-Intro"

    }
   

  }
  
  
  if(gameState==="Level2-Intro"){
    background("pink")
    drawSprites()
  
    bg.visible=false
    MB.visible=false
    NB.visible=false
    NB1.visible=false
    playButton.visible=false
    nextButton.visible=true
    bucket1.visible=false
    bucket2.visible=false
    bucket3.visible=false
    boy.visible=false
    tile1.visible=false
    tile2.visible=false
    tile3.visible=false
    tile4.visible=false
    tile5.visible=false
    tile6.visible=false
    tile7.visible=false
    tile8.visible=false
    tile9.visible=false
    tile10.visible=false
    tile11.visible=false
    tile12.visible=false
    tile13.visible=false
    tile14.visible=false
    tile15.visible=false
    obj1.visible=false
    obj2.visible=false
    obj3.visible=false
    obj4.visible=false
    obj5.visible=false
    b1.visible=false
    b2.visible=false
    b3.visible=false
    b4.visible=false
    d1.visible=false
    d2.visible=false
    d3.visible=false
    d4.visible=false
    d5.visible=false
    d6.visible=false
    d7.visible=false
    d8.visible=false
    d9.visible=false
    d10.visible=false
    trophy.visible=false

   
  
    textSize(45)
    fill("darkblue")
    textAlign(CENTER)
    text("Level 2",displayWidth/2,100)
    text("Here You Have To Collet Buckets And Water Drops.",displayWidth/2,220)
    text("Use Left And Right Arrow For Moving.",displayWidth/2,340)
    text("Use Up Arrow For Jumping.",displayWidth/2,460)
    textSize(35)
    text("(Hint: U Have Superpower. Find It Out)",displayWidth/2,580)
    textSize(30)
  
  
    text("Cilck Next To Continue.",displayWidth/2,750)
    if(mousePressedOver(nextButton)&&gameState==="Level2-Intro"){
      gameState = "Level2"
  
    }
  
  
  }
  
  if(gameState==="Level2"){
  
    background("white")
    drawSprites()
     bg.visible=true
     MB.visible=false
     NB.visible=false
     NB1.visible=false
     bg.addImage(bg2)
     bucket1.visible=false
     bucket2.visible=false
     bucket3.visible=false
     nextButton.visible=false
     playButton.visible=false
     boy.visible=true
     tile1.visible=true
     tile2.visible=true
     tile3.visible=true
     tile4.visible=true
     tile5.visible=true
     tile6.visible=true
     tile7.visible=true
     tile8.visible=true
     tile9.visible=true
     tile10.visible=true
    tile11.visible=true
    tile12.visible=true
    tile13.visible=true
    tile14.visible=true
    tile15.visible=true
    obj1.visible=true
    obj2.visible=true
    obj3.visible=true
    obj4.visible=true
    obj5.visible=true
    b1.visible=true
    b2.visible=true
    b3.visible=true
    b4.visible=true
    d1.visible=true
    d2.visible=true
    d3.visible=true
    d4.visible=true
    d5.visible=true
    d6.visible=true
    d7.visible=true
    d8.visible=true
    d9.visible=true
    d10.visible=true
    trophy.visible=false
   
  
    
    text(mouseX+","+mouseY,mouseX,mouseY)
     textSize(30)
     fill("black")
     textAlign(CENTER)
     text("SCORE:"+score2,displayWidth-120,30)
     text("Lives:"+life,100,30)
  
    if(keyDown(RIGHT_ARROW)){
       boy.x+=5
       boy.changeAnimation("walk")
       if(keyDown("up")){
        boy.velocityY=-15
        boy.changeAnimation("jump")
      }
    } 
    
    else if(keyDown("left")){
      boy.x-=5
      boy.changeAnimation("walk2") 
      if(keyDown("up")){
        boy.velocityY=-15
        boy.changeAnimation("jump2")
      } 
    }

    
    boy.velocityY+=0.8
     boy.collide(tile1)
     boy.collide(tile2)
     boy.collide(tile3)
     boy.collide(tile4)
     boy.collide(tile5)
     boy.collide(tile6)
     boy.collide(tile7)
     boy.collide(tile8)
     boy.collide(tile9)
     boy.collide(tile10)
     boy.collide(tile11)
     boy.collide(tile12)
     boy.collide(tile13)
     boy.collide(tile14)
     boy.collide(tile15)
     
     if(boy.isTouching(obj1)||boy.isTouching(obj2)||
     boy.isTouching(obj3)||boy.isTouching(obj4)||boy.isTouching(obj5)){
      life-=1
      boy.x=100
      boy.y=600
     }
     if(life===0){
     gameState="end"
     }

     if(boy.isTouching(b1)){
       score2+=100
       b1.destroy()
     }

     if(boy.isTouching(b2)){
      score2+=100
      b2.destroy()
    }

    if(boy.isTouching(b3)){
      score2+=100
      b3.destroy()
    }

    if(boy.isTouching(b4)){
      score2+=100
      b4.destroy()
    }
   
    if(boy.isTouching(d1)){
      score2+=10
      d1.destroy()
    }
    if(boy.isTouching(d2)){
      score2+=10
      d2.destroy()
    }
    if(boy.isTouching(d3)){
      score2+=10
      d3.destroy()
    }
    if(boy.isTouching(d4)){
      score2+=10
      d4.destroy()
    }
    if(boy.isTouching(d5)){
      score2+=10
      d5.destroy()
    }
    if(boy.isTouching(d6)){
      score2+=10
      d6.destroy()
    }
    if(boy.isTouching(d7)){
      score2+=10
      d7.destroy()
    }
    if(boy.isTouching(d8)){
      score2+=10
      d8.destroy()
    }
    if(boy.isTouching(d9)){
      score2+=10
      d9.destroy()
    }
    if(boy.isTouching(d10)){
      score2+=10
      d10.destroy()
    }

    if(score2===500){
      gameState="won"
    }

  }
  if(gameState==="won"){
    background("black")
    drawSprites()
    bg.addImage(bg6)
    bg.scale=2
     bg.visible=true
     MB.visible=false
     NB.visible=false
     NB1.visible=true
     bucket1.visible=false
     bucket2.visible=false
     bucket3.visible=false
     nextButton.visible=false
     playButton.visible=false
     boy.visible=false
     tile1.visible=false
     tile2.visible=false
     tile3.visible=false
     tile4.visible=false
     tile5.visible=false
     tile6.visible=false
     tile7.visible=false
     tile8.visible=false
     tile9.visible=false
     tile10.visible=false
    tile11.visible=false
    tile12.visible=false
    tile13.visible=false
    tile14.visible=false
    tile15.visible=false
    obj1.visible=false
    obj2.visible=false
    obj3.visible=false
    obj4.visible=false
    obj5.visible=false
    b1.visible=false
    b2.visible=false
    b3.visible=false
    b4.visible=false
    d1.visible=false
    d2.visible=false
    d3.visible=false
    d4.visible=false
    d5.visible=false
    d6.visible=false
    d7.visible=false
    d8.visible=false
    d9.visible=false
    d10.visible=false
    trophy.visible=false
    
    if(mousePressedOver(NB1)&&gameState==="won"){
      gameState="Story3" 

    }
  }
  if(gameState==="Story3"){
    background("black")
    drawSprites()
    bg.addImage(bg6)
    bg.scale=2
     bg.visible=false
     MB.visible=false
     NB.visible=false
     NB1.visible=false
     bucket1.visible=false
     trophy.visible=true
     bucket2.visible=false
     bucket3.visible=false
     nextButton.visible=false
     playButton.visible=false
     boy.visible=false
     tile1.visible=false
     tile2.visible=false
     tile3.visible=false
     tile4.visible=false
     tile5.visible=false
     tile6.visible=false
     tile7.visible=false
     tile8.visible=false
     tile9.visible=false
     tile10.visible=false
    tile11.visible=false
    tile12.visible=false
    tile13.visible=false
    tile14.visible=false
    tile15.visible=false
    obj1.visible=false
    obj2.visible=false
    obj3.visible=false
    obj4.visible=false
    obj5.visible=false
    b1.visible=false
    b2.visible=false
    b3.visible=false
    b4.visible=false
    d1.visible=false
    d2.visible=false
    d3.visible=false
    d4.visible=false
    d5.visible=false
    d6.visible=false
    d7.visible=false
    d8.visible=false
    d9.visible=false
    d10.visible=false

    textSize(50)
    fill("Yellow")
    strokeWeight(3)
    textAlign(CENTER)
    text("Congratulations!!!",displayWidth/2,120)
    textSize(35)
    fill("white")
    strokeWeight(0)
    text("You Have Successfully Helped The People Of The Village.",displayWidth/2,240)
    text("And here's Your Title :- .",displayWidth/2,340)
    textSize(45)
    fill("Red")
    strokeWeight(2)
    text("Best Citizen Of The Year.",displayWidth/2,460)
  }

  if(gameState==="end"){

    background("white")
    drawSprites()
     bg.visible=true
     bg.addImage(bg2)
     MB.visible=false
     NB.visible=false
     NB1.visible=false
     trophy.visible=false
     bucket1.visible=false
     bucket2.visible=false
     bucket3.visible=false
     nextButton.visible=false
     playButton.visible=false
     boy.visible=true
     tile1.visible=true
     tile2.visible=true
     tile3.visible=true
     tile4.visible=true
     tile5.visible=true
     tile6.visible=true
     tile7.visible=true
     tile8.visible=true
     tile9.visible=true
     tile10.visible=true
    tile11.visible=true
    tile12.visible=true
    tile13.visible=true
    tile14.visible=true
    tile15.visible=true
    obj1.visible=true
    obj2.visible=true
    obj3.visible=true
    obj4.visible=true
    b1.visible=false
    b2.visible=false
    b3.visible=false
    b4.visible=false
    d1.visible=false
    d2.visible=false
    d3.visible=false
    d4.visible=false
    d5.visible=false
    d6.visible=false
    d7.visible=false
    d8.visible=false
    d9.visible=false
    d10.visible=false
   

    textSize(50)
    fill("black")
    textAlign(CENTER)
    text("GAME OVER",displayWidth/2,displayHeight/2)
    boy.velocityY=0
    
  }

}
function rain(){
  if(frameCount%50===0){
   r=createSprite(random(displayWidth/2-300,displayWidth/2+300),50,10,10)
   r.velocityY=8
   r.addImage(drop2)
   r.scale=0.2
   r.lifetime=1000
   rainGroup.add(r)
  }
}