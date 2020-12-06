var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(480,800,1200,20)

}

function draw() {
  background(0);
  Engine.update(engine); 
  ground.display();











  drawSprites();
  
}