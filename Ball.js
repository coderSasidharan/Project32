class Ball{
    constructor(x, y, radius){
        var a = {
            isStatic:false, restitution:0.81, friction:0.5, density:1.2
        }
        this.body= Bodies.circle(x,y,radius,a)
        this.radius=radius;
        World.add(world, this.body);
    }
    
    display(){
        push();
        fill("white");
        circle(this.body.position.x, this.body.position.y, this.radius);
        pop();
    }
}