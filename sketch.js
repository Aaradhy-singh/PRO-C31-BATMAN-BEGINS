const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World
var engine, world;
drop = []

function preload(){
    th1 = loadImage("thunderbolt/1.png")
    th2 = loadImage("thunderbolt/2.png")
    th3 = loadImage("thunderbolt/3.png")
    th4 = loadImage("thunderbolt/4.png")

}

function setup(){

    var canvas = createCanvas(400,657);
    engine = Engine.create();
    world = engine.world;
    umberella = new Umberella(200,500);
    for(var i=0;i<100;i++){

        drop.push(new Drop(random(0,400),random(0,400)))
    }

}

function draw(){
    Engine.update(engine)
    background("black")
    umberella.display()
    for(var i= 0;i<drop.length;i++){
        drop[i].display()
        drop[i].resetDrop()
    }

    var rand = Math.round (random(1,4))
    if(frameCount%60===0){
        switch(rand){
            case 1:image(th1,random(10,370),random(10,30),450,300)
            break;
            case 2:image(th2,random(10,370),random(10,30),450,300)
            break;
            case 3:image(th3,random(10,370),random(10,30),450,300)
            break;
            case 4:image(th4,random(10,370),random(10,30),450,300)
            break;
            default:break;
        }
    }
}   

