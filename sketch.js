
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var stone;
var rubber;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 600);
	engine = Engine.create();
	world = engine.world;

	hammer = new Hammer(20,300);

	stone = new Stone(300,100,90,90);

	rubber = new Rubber(900,400,70);

	ground = new Ground(700,550,1400,50);
    


	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
 ground.display();
 hammer.display();
 stone.display();
 rubber.display();
 ground.display();
 
  drawSprites();
 
}



