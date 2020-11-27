class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 300
        }
        this.body = Constraint.create(options)
        this.pointB = pointB
        World.add(world, this.body)
    }
    display(){
        line(this.body.bodyA.position.x, this.body.bodyA.position.y, this.pointB.x, this.pointB.y)
    }
    fly(){
        this.body.bodyA = null
    }
    attach(body){
        this.body.bodyA = body
    }
}