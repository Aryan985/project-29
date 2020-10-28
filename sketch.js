const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){

polygon_img = loadImage("polygon.png")


}



function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  

ground = new Ground(600,600,900,20);
stand1 = new Ground(390,300,250,10);
stand2 = new Ground(700,200,200,10);

//level 1

block1 = new Block(300,275,30,40);
block2 = new Block(330,275,30,40);
block3 = new Block(360,275,30,40);
block4 = new Block(390,275,30,40);
block5 = new Block(420,275,30,40);
block6 = new Block(450,275,30,40);
block7 = new Block(480,275,30,40);
//level 2
block8 = new Block(330,235,30,40);
block9 = new Block(360,235,30,40);
block10 = new Block(390,235,30,40);
block11= new Block(420,235,30,40);
block12 = new Block(450,235,30,40);
//level 3
block13 = new Block(360,195,30,40);
block14 = new Block(390,195,30,40);
block15 = new Block(420,195,30,40);
block16 = new Block(390,155,30,40);

//level 1
//for second stand

Block1 = new Block(640,175,30,40);
Block2 = new Block(670,175,30,40);
Block3 = new Block(700,175,30,40);
Block4 = new Block(730,175,30,40);
Block5 = new Block(760,175,30,40);
//level 2
Block6 = new Block(670,135,30,40);
Block7 = new Block(700,135,30,40);
Block8 = new Block(730,135,30,40);
Block9 = new Block(700,95,30,40);

polygon = Bodies.circle(50,200,20);
World.add(world,polygon);


slingshot = new Slingshot(this.polygon,{x:100,y:200});




  
}

function draw() {
  background("orange");  
  Engine.update(engine);

ground.display();
stand1.display();
stand2.display();
fill("blue");
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
fill("pink");
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
fill("yellow");
block13.display();
block14.display();
block15.display();
fill("grey");
block16.display();
fill("yellow")
Block1.display();
Block2.display();
Block3.display();
Block4.display();
Block5.display();
fill("blue");
Block6.display();
Block7.display();
Block8.display();
fill("pink");
Block9.display();
slingshot.display();

imageMode(CENTER)
image(polygon_img,polygon.position.x,polygon.position.y,40,40)
}

function mouseDragged(){
Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})

}

function mouseReleased(){
  slingshot.fly();
}