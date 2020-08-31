const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world, engine;
var dustbin1, dustbin2, dustbin3;
var paper;
var ground;
var bg;	

function preload() {
	bg = loadImage("cbRoom.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	//Create the Bodies Here.
	dustbin1 = new Dustbin(610, 463, 50, 200);
	dustbin2 = new Dustbin(400, 463, 50, 200);
	dustbin3 = new Dustbin(505.5, 543, 260, 50);
	ground = new Ground(200, 580, 1000, 50);
	paper = new Paper(65, 540, 20);

}


function draw() {
	Engine.update(engine);
	rectMode(CENTER);
	background(bg);
	fill("yellow");
	stroke(0);
	strokeWeight(4);
	textSize(35);
	textStyle("bold");
	text("Press the UP arrow key to throw the trash", 55, 100)
	textSize(27);
	text(" You must throw it in the  dustbin and keep this house clean",25, 135)
	textSize(29.5);
	text("And dont forget Cleanliness is next to Godliness",45,170);
	dustbin1.display();
	dustbin2.display()
	dustbin3.display()
	ground.display();
	paper.display();
	fill("lightblue");
	text("USE ME",550,650);
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, { x: 49, y: -80 });
	}
}

