
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paper;
var s1,s2,s3;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  ground=new Ground(width/2,670,width,20);
  paper=new Paper(200,450,40);
  s1=new Dustbin(730,610,20,100);
  s2=new Dustbin(900,610,20,100);
  s3=new Dustbin(820,660,190,10);
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();

  s1.display();
  s2.display();
  s3.display();

 
}
function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
  }
}



