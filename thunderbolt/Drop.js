class  Drop {

constructor(x,y){
    var Option = {
restitution:0.1,
friction:0.01,

    }
    this.body = Bodies.circle(x,y,3,Option)
    World.add(world,this.body)
}
display(){
fill("blue")
circle(this.body.position.x,this.body.position.y,6)


}
resetDrop(){

if(this.body.position.y>height){

Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})

}

}


}