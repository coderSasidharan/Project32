class Slingshot{
    constructor(a,b){
        var options = {
            bodyA: a ,
            pointB: b ,
            length: 5,
            stiffness: 0.07
        }

       this.connect =  Matter.Constraint.create(options)
       World.add(world,this.connect);
       console.log(this.connect);
    }
    
    view(){
        push();
        if(this.connect.bodyA!=null){
            strokeWeight(5)
            stroke("Aqua")
            line(this.connect.bodyA.position.x,this.connect.bodyA.position.y,this.connect.pointB.x,this.connect.pointB.y);
            pop();
        }
    }
}

