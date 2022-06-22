const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function preload() {
 bgImg = loadImage("assets/background.gif")
 towerImg = loadImage("assets/tower.png")
}
function setup() {
  createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  var prop = {isStatic: true}
  tower = Bodies.rectangle(150, 350, 150, 300, prop)
  World.add(world,tower)

  cannon = new Cannon(170, 120, 140, 100)
}

function draw() {
  background(bgImg);

  //rect(x,y,w,h)
  //image(name,x,y,w,h)
  push()
   imageMode(CENTER)
   image(towerImg, tower.position.x, tower.position.y, 150, 300)
  pop() 
  cannon.display()
}
