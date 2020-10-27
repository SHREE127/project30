const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(1000,400);

  engine = Engine.create();
	world = engine.world;

// create objects

//level one(ground)
ground = new Ground(400,300,270,10);
ground2 = new Ground(800,150,200,10);

//level two(block part one)
box1 = new Box(400,280)
box2 = new Box(385,280)
box3 = new Box(415,280)
box4 = new Box(370,280)
box5 = new Box(430,280)
box6 = new Box(355,280)
box7 = new Box(445,280)

box8 = new Box(770,130)
box9 = new Box(785,130)
box10 = new Box(800,130)
box11 = new Box(815,130)
box12 = new Box(830,130)

//level three(block part two)
box13 = new Box(400,260)
box14 = new Box(385,260)
box15 = new Box(415,260)
box16 = new Box(370,260)
box17 = new Box(430,260)

box18 = new Box(785,110)
box19 = new Box(800,110)
box20 = new Box(815,110)

//level four(block part three)
box21 = new Box(400,240)
box22 = new Box(385,240)
box23 = new Box(415,240)

box24 = new Box(800,90)

//level five(top block)
box25 = new Box(400,220)


polygon = new hex(70,200);
slingshot1 = new Sling(polygon.body,{x:70, y:200})
Engine.run(engine);
}

function draw() {
  background("white");  

  ground.display();
  ground2.display();

  fill("blue")
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  fill("pink")
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();

  box18.display();
  box19.display();
  box20.display();

  fill("limegreen")
  box21.display();
  box22.display();
  box23.display();
  box24.display();

  fill("yellow")
  box25.display();

  polygon.display();
  slingshot1.display();
  drawSprites();
}

function mouseDragged(){

	Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){

  slingshot1.fly();
  
}

function keyPressed(){

  if(keyCode==32){

    slingshot1.attach(polygon);
  }
}
