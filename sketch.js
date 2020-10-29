
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var bin1, bin2, bin3;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200,200,10);
	
	ground = new Ground(50,695,1500,20);

	bin3 = new Bin(600, 680, 200, 20);

	bin1 = new Bin(500, 650, 20, 100 );
	bin2 = new Bin(700, 650, 20, 100);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

 // keyPressed();
  
 paper.display();
 bin1.display();	
 bin2.display();
 bin3.display();
 ground.display();
 
}



s

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:13, y:-13});

	}
}



