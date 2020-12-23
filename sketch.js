var rb,gb,bb,pb,rbi,gbi,bbi,pbi,rbg,gbg,bbg,pbg
var bg,bgi
var b,bi
var a,ai
var score=0

function preload(){
  rbi=loadImage("red_balloon0.png")
  bbi=loadImage("blue_balloon0.png")    
  gbi=loadImage("green_balloon0.png")
  pbi=loadImage("pink_balloon0.png")
  
  bgi=loadImage("background0.png")
  
  bi=loadImage("bow0.png")
  
  ai=loadImage("arrow0.png")
}

function setup(){
  createCanvas(600,600)
 bg=createSprite(0,0,600,600)
  bg.x=bg.width/2
  bg.addImage(bgi)
 bg.scale=3
  
  b=createSprite(480,230,20,50)
  b.addImage(bi)
  
  a=createSprite(360,100,5,10)
  a.x=b.x
  a.y=b.y
  a.addImage(ai)
  a.scale=0.2
  a.visible=false
  
  rbg=new Group()
  bbg=new Group()
  gbg=new Group()
  pbg=new Group()
}

function draw(){
  
  bg.velocityX=-3
  if(bg.x<0){
    bg.x=bg.width/2
  }

  b.y=World.mouseY
  
  if(keyDown("space")){
    a.velocityX=-3
    a.x=b.x
    a.y=b.y
    a.visible=true
  }
   var rand=Math.round(random(1,4))
  
    if(rand==1){
     spawnRb()
    }
    else if(rand==2){
      spawnGb()
    }
    else if(rand==3){
     spawnBb()
    }
    else{
      spawnPb()
    }
  if(gbg.isTouching(a)){
    gbg.destroyEach()
    score=score+2
  }
   if(rbg.isTouching(a)){
    rbg.destroyEach()
    score=score+3
  }
   if(bbg.isTouching(a)){
    bbg.destroyEach()
    score=score+4
  }
   if(pbg.isTouching(a)){
    pbg.destroyEach()
    score=score+5
  }
  drawSprites()
  text("score:"+score,500,50)
}
  function spawnGb(){
  if(frameCount%100===0){
    gb=createSprite(10,50,10,10)
    gb.velocityX=3
    gb.addImage(gbi)
    gb.scale=0.1
    gb.y=Math.round(random(10,600))
    gb.lifetime=300
    gbg.add(gb)
  }
  }

  function spawnRb(){
  if(frameCount%100===0){
rb=createSprite(10,10,10,10)
    rb.velocityX=4
    rb.addImage(rbi)
    rb.scale=0.1
    rb.y=Math.round(random(10,600))
    rb.lifetime=300
    rbg.add(rb)
  }
}
  function spawnBb(){
  if(frameCount%100===0){
bb=createSprite(10,10,10,10)
    bb.velocityX=4
    bb.addImage(bbi)
    bb.scale=0.1
    bb.y=Math.round(random(10,600))
    bb.lifetime=300
    bbg.add(bb)
  }
}
function spawnPb(){
  if(frameCount%100===0){
pb=createSprite(10,10,10,10)
    pb.velocityX=4
    pb.addImage(pbi)
    pb.scale=1.2
    pb.y=Math.round(random(10,600))
    pb.lifetime=300
    pbg.add(pb)
  }
}