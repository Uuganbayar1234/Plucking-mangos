
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	Platform=new Ground(200,200,200,20)
	StoneObject=new Stone (235,420,30);

	mango1 = new Mango(700,320,70,70);
    mango2 = new Mango(920,320,70,70);
    mango3 = new Mango(810,260,300,60);
    mango4 = new Mango(700,240,70,70);
	mango5 = new Mango(920,240,70,70);
	mango6 = new Mango(920,240,70,70);
    
	Engine.run(engine); 
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Platform.display();
  mango1.display();
    mango2.display();
    Stone.display();
    mango3.display();
    mango4.display();
    mango5.display();
    mango6.display();

  drawSprites();
 
}



