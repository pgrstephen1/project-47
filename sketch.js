const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var score = 0;
var player;
var particle;
var ground;

function setup() {
  createCanvas(1500,800);
  
  engine = Engine.create();
  world = engine.world;

  textSize(18);
  text("Score: " + score, 30,30);

  ground = new Ground(750,780,1500,10);
  player = new Player(750,650,150,150);
}

function draw(){
  background("black");

ground.display();
player.display();

 //if(particle.y > 1000){
  // particle.destroy();
 //}

 //if(particle.x === player.x && particle.y === player.y){
 // particle.destroy();
 //score += 1;
 // }

 if(keyIsDown(LEFT_ARROW)){
   player.x = player.x-15;
   console.log("bye");
 }

 if(keyIsDown(RIGHT_ARROW)){
   player.x = player.x+15;
   console.log('hi');
 }

 spawnParticle();
  drawSprites();
}

function spawnParticle(){
  if(frameCount % 80 === 0){
    var x = random(10,1000);
    particle = new Particle(x,0,20,20);
  }
 // particle.display();
}