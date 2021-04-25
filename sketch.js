const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var score = 0;
var bg;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform1 = new Ground(390, 300, 250, 10);
    box1 = new Box(300,275,30,40);
    box2 = new Box(330,275,30,40);
    box3 = new Box(360,275,30,40);
    box4 = new Box(390,275,30,40);
    box5 = new Box(420,275,30,40);
    box6 = new Box(450,275,30,40);
    box7 = new Box(480,275,30,40);
    box8 = new Box(330,235,30,40);
    box9 = new Box(360,235,30,40);
    box10 = new Box(390,235,30,40);
    box11 = new Box(420,235,30,40);
    box12 = new Box(450,235,30,40);
    box13 = new Box(360,195,30,40);
    box14 = new Box(390,195,30,40);
    box15 = new Box(420,195,30,40);
    box16 = new Box(390,155,30,40);
    ball = new Ball(50,200,40)

    sling = new Sling(ball.body,{x:100, y:200});
}

function draw(){
    if(bg)
        background(bg);
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
    Engine.update(engine);
    //strokeWeight(4); 
    ground.display();
    platform1.display();
    fill("blue")
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    fill("pink")
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    fill("turquoise")
    box13.display();
    box14.display();
    box15.display();
    fill("violet")
    box16.display();
    ball.display();
    sling.display();
}

function mouseDragged(){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    }



function mouseReleased(){
    sling.fly();
}

function keyPressed(){
    if(keyCode === 32 ){
        Matter.Body.setPosition(ball.body,{x:200,y:50})
       sling.attach(ball.body);
    }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=19){
        bg = "lightblue";
    }
    else{
        bg = "black";
    }


}
