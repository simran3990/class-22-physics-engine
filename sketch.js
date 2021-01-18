const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;

var myworld;
var myengine;
var ground;
var ball;

function setup() {
  createCanvas(400,400);
  myengine=Engine.create();
  myworld=myengine.world;
ground=Bodies.rectangle(200,300,400,10,{isStatic:true});
World.add(myworld,ground);

ball=Bodies.circle(200,100,20,{restitution:1.0});
World.add(myworld,ball);
}

function draw() {
  background("black");  
Engine.update(myengine); 
rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,10);

ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,15,15);

}