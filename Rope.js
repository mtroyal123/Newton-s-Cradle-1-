class Rope{
    constructor(bodyA,bodyB, offsetX, offsetY){
        var options= {
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness: 0.04,
            length: 10,
            pointB: {x: this.offsetX, y: this.offsetY}
        }
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){  
        bodyA = this.rope.bodyA.position;
        bodyB = this.rope.bodyB.position;
        pointB.x = this.rope.bodyB.offsetX;
        pointB.y = this.rope.bodyB.offsetY;
        strokeWeight(3);
        line(bodyA, bodyB, pointB.x, pointB.y);
    }
};