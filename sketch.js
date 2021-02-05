function preload(){
  ga=loadImage('Garden.png')
  ri=loadAnimation('running.png')
  le=loadAnimation('runningLeft.png')
  bb=loadImage('button_bathroom.png')
  bbe=loadImage('button_bedroom.png')
  bg=loadImage('button_garden.png')
  bk=loadImage('button_kitchen.png')
  wa=loadImage('Wash room.png')
  s=loadImage('Bed room.png')
  ki=loadImage('kitchen.jpg')
  foodImage = loadImage("Food Stock.png");
  dogImage = loadAnimation("Dog.png");
  dogImage1 = loadAnimation("dogImg1.png");
}

function setup(){
  createCanvas(1518,690.5)

  this.na=createInput('Name of your pet dog')
  this.na.position(450 ,250);
  this.na.style("font-size", "48px")

  this.e=createElement('h1')
  this.e.position(400,100)
  this.e.html('Type the name of your pet dog and press the play button')
  this.e.style('color','#53006C')
  
  this.b=createButton('play')
  this.b.position(650,350)
  this.b.style('background-color','lightpink')
  this.b.style("font-size", "48px")
  this.b.size(170,100)
  this.b.mousePressed(()=>{
    this.na.hide()
    this.e.hide()
    this.b.hide()
  gar.visible=true
    this.ins.show()
    run.visible=true
    b1.visible=true
    b2.visible=true
    b3.visible=true
    b4.visible=true
  })

  gar=createSprite(600,250)
  gar.addImage(ga)
  gar.scale=3
  gar.visible=false

  this.ins=createElement('h1')
  this.ins.html('Press right & left arrow to move your '+this.na.value())
  this.ins.position(200,100)
  this.ins.hide()

  run=createSprite(1200,500)
  run.addAnimation("e",le)
  run.addAnimation('r',ri)
  run.scale=0.6
  run.visible=false

  k=createSprite(670,260)
  k.addImage(ki)
  k.scale=6
  k.visible=false


  b1=createSprite(1300,100)
  b1.addImage(bb)
  b1.scale=0.7
  b1.visible=false
  
  b2=createSprite(1300,200)
  b2.addImage(bbe)
  b2.scale=0.7
  b2.visible=false
  
  b3=createSprite(1300,300)
  b3.addImage(bg)
  b3.scale=0.7
  b3.visible=false
  
  b4=createSprite(1300,400)
  b4.addImage(bk)
  b4.scale=0.7
  b4.visible=false

  ws=createSprite(750,300)
  ws.addImage(wa)
  ws.visible=false
  
  be=createSprite(750,300)
  be.addImage(s)
  be.visible=false

  food=createSprite(1000,550)
   food.addImage(foodImage)
   food.scale=0.2
   food.visible=false

   dog=createSprite(1150,500)
   dog.addAnimation('d',dogImage)
   dog.addAnimation('d2',dogImage1)
   dog.scale=0.4
   dog.visible=false

   this.f=createElement('h1')
   this.f.html('Press f to feed your '+this.na.value())
   this.f.position(200,100)
   this.f.hide()
}

function draw(){
  background("#F49F1C")
  run.velocityX=0
  if(keyDown('left')){
    run.changeAnimation('e',le)
    run.velocityX=-10
  }
  if(keyDown('right')){
    run.changeAnimation('r',ri)
    run.velocityX=10
  }

  if(mousePressedOver(b3)){
    gar.visible=true
    this.ins.show()
  food.visible=false
  dog.visible=false
    run.visible=true
    ws.visible=false
  be.visible=false
  k.visible=false
  this.f.hide()
  }
  if(mousePressedOver(b1)){
    gar.visible=false
    this.ins.hide()
    run.visible=false
    ws.visible=true
  food.visible=false
  be.visible=false
  k.visible=false
  dog.visible=false
  this.f.hide()
  }
  if(mousePressedOver(b2)){
  be.visible=true
  gar.visible=false
  this.ins.hide()
  run.visible=false
  ws.visible=false
  k.visible=false
  food.visible=false
  dog.visible=false
  this.f.hide()
  }

  if(mousePressedOver(b4)){
  k.visible=true
  be.visible=false
  gar.visible=false
  this.ins.hide()
  run.visible=false
  ws.visible=false
  dog.visible=true
  this.f.show()
 
  }

  if(keyWentDown('f')){
    dog.changeAnimation('d2',dogImage1)
    food.visible=true
  }
  if(keyWentUp('f')){
    dog.changeAnimation('d',dogImage)
    food.visible=false
  }
 
 
  drawSprites()

}

