class Sling {
    constructor(bodyA,pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            lenght: 2
        }
        this.object = Constraint.create(options);
	    World.add(world,this.object);
        this.pointB = pointB
    }
display(){
 if (this.object.bodyA){
     push();
var a = this.object.bodyA.position;
var b = this.pointB;
	 strokeWeight(10);
    line(a.x-20,a.y,b.x-10,b.y);
    //line(a.x-20,a.y,b.x+30,b.y); 
    pop();

}
}
fly(){
	this.object.bodyA=null;
}
attach(body){

this.object.body = bodyA
}
}