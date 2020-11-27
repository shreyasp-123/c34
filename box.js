class Box{
    constructor(x,y,width, height){
        var options = {
            density: 0.04,
            friction: 1,
            restitution:0.8
        }
        this.body = Bodies.rectangle(x, y, width, height, options)
        this.width = width
        this.height = height
        World.add(world, this.body)
    }
    display(){
        push()
        translate(this.body.position.x, this.body.position.y)
        rectMode(CENTER)
        rotate(this.body.angle)
        stroke("red")
        strokeWeight(3)
        fill("green")
        
        
        rect(0, 0, this.width, this.height)
        pop()

    }
}