class Chain{

    constructor(body1,body2){

        var coptions = {

            bodyA : body1,
            bodyB : body2,
            stiffness : 0.04,
            length : 5

        }
        this.chain = Constraint.create(coptions);
        World.add(world,this.chain);

    }

    display(){

        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y);

    }
}