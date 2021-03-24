var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,r1,r2,r3;
var s1,s2,s3,boy,boys,girl;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png");
	girl=loadImage("girl.png");
	boy=loadImage("boy.png");
    boys=loadImage("boyS.png");
	back=loadImage("apo.png");
	
	
} 



function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	
	
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;

	s1=createSprite(600, 570, 10,10);
	s1.addImage(girl);
	s1.scale =0.6;



	s2=createSprite(200, 570, 10,10);
	s2.addImage(boy);
	s2.scale =0.4;


	s3=createSprite(50, 570, 10,10);
	s3.addImage(boys);
	s3.scale =0.4;

	
	groundSprite=createSprite(width/2, height-35, width,70);
	groundSprite.shapeColor=color("sandybrown")
	groundSprite.visible = false;

	

	

	
    r1 = createSprite(400,660,200,20);
	r1.shapeColor = ("firebrick"); 
	r2 = createSprite(310,620,20,100);
	r2.shapeColor = ("firebrick"); 
	r3 = createSprite(490,620,20,100);
	r3.shapeColor = ("firebrick"); 
	


	

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , { isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}
sound.play();

function draw() {
  rectMode(CENTER);
  background(back);
  
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
   
  packageSprite.collide(r1);
  packageSprite.collide(r2);
  packageSprite.collide(r3);
   

  
  drawSprites();
  
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
     Matter.Body.setStatic(packageBody,false);
	 
	 fill("salmon")
	 textSize(20);
	text("Package landed safely",350,450); 
	text("Mission accomplished!!",350,475);

	
	
    
  }
}



