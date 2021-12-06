const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var drops,umbrella;
var drops=[];
var engine, world;
var rand;
var maxDrops=100;



  

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(400,700);
    umbrella = new Umbrella(200,500);

    //create drops
    if(frameCount%150===0){
     for(i=0;i<maxDrops;i++){
        drops.push(new Drop(random(0,400),random(0,400)));
    }
  }
    
    
}

function draw(){
    Engine.update(engine);
    background(0); 



    umbrella.display();

    //display rain drops
    for(var i=0;i<maxDrops;i++)
 {
     drops[i].showDrops();
     drops[i].update();
 }   

    drawSprites();
}   

