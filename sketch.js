function preload()
{
	snow1Img = loadImage("snow1.jpg");
	snow2Img = loadAnimation("snow2.jpg");
   bg = loadImage("snow4.webp");
}




function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 200)
  character = new character(1100,550,300);

  snow = new snow(600, 100, 70, 70);
  snow1 = new snow1(900, 100, 70, 70);
  snow2 = new snow2(900, 100, 70, 70);
  snow3 = new snow3(900, 100, 70, 70);

}

function draw() {
  background(255,255,255);  
  background(bgImg);
  Engine.update(engine);
  ground.display();
  snow.display();
  snow1.display();
  snow2.display();
  snow3.display()

  character.display();


  drawSprites();
}


