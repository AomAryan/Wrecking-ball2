const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var ball, slingshot;
var bar;

var gameState = "onSling";
//var bg = "sprites/bg1.png";
var score = 0;
var stand,sling;
var bob,floor;


function setup(){
    var canvas = createCanvas(1500,800);
    engine = Engine.create();
    world = engine.world;

    stand = new Ground(825,500,300,20);
    floor = new Ground(750,790,1500,20);
    bob = new Ball(400,150,25);
    box1 = new BaseClass(900,480,40,40);
    box2 = new BaseClass(850,480,40,40);
    box3 = new BaseClass(800,480,40,40);
    box4 = new BaseClass(750,480,40,40);
    box5 = new BaseClass(775,440,40,40);
    box6 = new BaseClass(825,440,40,40);
    box7 = new BaseClass(875,440,40,40);
    box8 = new BaseClass(850,400,40,40);
    box9 = new BaseClass(800,400,40,40);
    box10 = new BaseClass(825,360,40,40);
    
    bar = new Ground(400,100,2,2);
    sling = new SlingShot(bob.body,{x: 400 , y: 100});

}

function draw(){
    background("blue");
    
    Engine.update(engine);
    stand.display();
    bob.display();
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
    bar.display();
    sling.display();
    fill("white");
    textSize (20);
    text('score '+ score , 50 , 600);
    floor.display();
    box1.boxScore();
    box2.boxScore();
    box3.boxScore();
    box4.boxScore();
    box5.boxScore();
    box6.boxScore();
    box7.boxScore();
    box8.boxScore();
    box9.boxScore();
    box10.boxScore();

}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bob.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    sling.fly();
    gameState = "launched";
}
/*
function keyPressed(){
    if(keyCode === 32 && bird.body.speed < 0.5){
       
       Matter.Body.setPosition(bird.body, { x : 200 ,y :  50});
       slingshot.attach(bird.body);
       bird.trajectory =[];



    }
}
*/

    
