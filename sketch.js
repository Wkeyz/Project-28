
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var boy,stoneObj,treeObj,mango1,mango2,mango3,mango4,mango5;

function preload()
{
	boy=loadImage("Images/boy.png");
	
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
stoneObj= new Stone(245,420,30);
luancherObj= new Luancher(stoneObj.body,{x:235,y:420});
floor= new Ground(650,570);
treeObj= new Tree(1000,380,600,600);
mango1= new Mango(900,240,30);
mango2= new Mango(1000,300,30);
mango3= new Mango(1200,200,30);
mango4= new Mango(1250,300,30);
mango5= new Mango(1100,180,30);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  image(boy,200,340,200,300);
  stoneObj.display();
  luancherObj.display();
  floor.display();
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	luancherObj.fly();
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stoneObj.body,{x:235,y:420});
		luancherObj.attach(stoneObj.body);
	}
}

function detectCollision(lstone,lmango){
	//detectCollision(stoneObj,mango1);
	//detectCollision(stoneObj,mango2;
	//detectCollision(stoneObj,mango3;
	//detectCollision(stoneObj,mango4);
	//detectCollision(stoneObj,mango5);
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}
