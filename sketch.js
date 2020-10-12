
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var line1,line2,line3,ground;
var paperObject;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 	line1 = new Dustbin(700,620,20,150,0);
	ground = new Ground(400,699,800,10);
 	line2 = new Dustbin(500,620,20,150,0);
  line3 = new Dustbin(600,690,200,20,0);
  paperObject = new Paper(250,450,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
 
  background(0);
  
  line1.display();
  ground.display();
  line2.display();
  line3.display();
  paperObject.display();

  drawSprites();
 
  keyPressed();
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(paperObject.body,paperObject.body.position , {x:100 , y:-100})
  }
}

