class Umberella{

constructor(x,y){

var Option = {isStatic:true}
this.body = Bodies.circle(x,y,300,Option)
World.add(world,this.body)
this.image = loadImage("walking_1.png")
}

display(){

imageMode(CENTER);
image(this.image,this.body.position.x,this.body.position.y,600)




}

}