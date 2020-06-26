class Chain{
    constructor(bodyA,bodyB){
        var options = {
            bodyA: bodyA, 
            bodyB: bodyB,
            stiffness: 0.6,
            length: 10

        }
        this.chain = Constraint.create(options)
        World.add(world,this.chain)
    }

    display(){
        var pA = this.chain.bodyA.position 
        var pB = this.chain.bodyB.position
        strokeWeight(5);
        line(pA.x,pA.y,pB.x,pB.y)
    }
}