const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

let fruit,fruit_img;
let ground 
let rope;
let glue_1;


let bunny,bunny_img;

let bg_img;

let cut_button;

function preload(){
    bg_img = loadImage("Images/background.png")
    fruit_img = loadImage("Images/melon.png")
    bunny_img = loadImage("Images/Rabbit-01.png")
}

function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
   cut_button = createImg("Images/cut_button.png")
   cut_button.position(200,30)
   cut_button.size(50,50)
   cut_button.mouseClicked(drop)
  var ground_props = {
    isStatic: true
  }

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)

 
 
  rope = new Rope (8,{x:220,y:30})
  ground = Bodies.rectangle(250,690,500,20, ground_props)
  World.add(world, ground)
  bunny = createSprite(200,620,100,100)
  bunny.addImage("bunny_img",bunny_img);
  bunny.scale = 0.2

  fruit = Bodies.circle(300,300,20)
  Matter.Composite.add(rope.body,fruit)


  glue_1 = new Glue (rope,fruit)

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)

}

function draw() 
{
  background("blue");
  image(bg_img,0,0,displayWidth+80,displayHeight)
  push()
    if(fruit != null){
      image(fruit_img,fruit.position.x,fruit.position.y,70,70)
    }
  pop()
  rope.show()
  Engine.update(engine);
  push();
  fill("orange")
   rect(ground.position.x,ground.position.y,500,20)
   pop();
   
    drawSprites()
}


function drop(){
  rope.break()
  glue_1.detach()
  glue_1 = null
}

