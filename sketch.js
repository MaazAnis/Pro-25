
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	dustbin1 = new Dustbin(600, 680);
	//dustbin2 = new Dustbin(460, 690, 100, 1);
	//dustbin3 = new Dustbin(410, 690, 1, 80);
	paper1 = new Paper(150,300,100,10)
	ground = new Ground(200,700,1000,20)

	Engine.run(engine);



}

function draw() {
	rectMode(CENTER);
	background(300);
    paper1.display()
	dustbin1.display()
	ground.display()

	

}

function keyPressed() { 
	if (keyCode === UP_ARROW) { 
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85}); 
 } 
}

