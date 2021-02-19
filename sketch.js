const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var maxDrops = 100;
var drops = [];
var thundercount = 45;
function preload(){
    lightim1 = loadImage("3.png");
}

function setup(){
var canvas = createCanvas(400,400);   
engine = Engine.create();
world = engine.world; 
for(i = 0; i<200; i++){
    drops.push(new rain(random(1,400),random(-400,1)));
}

}

function draw(){
 background("Black");
if (frameCount%thundercount===0){
lightning = createSprite(100,100,100,100);
lightning.addImage(lightim1);
lightning.scale = 0.5;
}
if (frameCount%thundercount===0){
lightning.destroy();
}
for(i = 0; i<200; i++){
    drops[i].display();
    drops[i].updateDrops();
}

 drawSprites();
 Engine.update(engine);
}   
