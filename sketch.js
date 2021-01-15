
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	ball = new Ball(50,345,20);
	World.add(world,ball);
	
	ground = new Ground(400,350,800,20);
	World.add(world,ground);

	dustbin1 = new Dustbin(700,330,150,20);
	World.add(world,dustbin1);
	
	dustbin2 = new Dustbin(615,280,20,120);
	World.add(world,dustbin2);

	dustbin3 = new Dustbin(770,280,20,120);
	World.add(world,dustbin3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

  ball.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
  
 
}                                                                                       
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:20,y:-14});
	}
}



