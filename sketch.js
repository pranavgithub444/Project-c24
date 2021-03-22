const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plane;
function preload()
{
	
}

function setup() {
	createCanvas(800,800);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	plane1 = new Plane(400,800,800,50)
	stone1 = new Stone(500,700,50,50)
    rubber1 = new Rubber(200,700,50)
	iron1 = new Iron(600,700,100,30)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");

  plane1.display()
  stone1.display()
  rubber1.display()
  iron1.display()
}



