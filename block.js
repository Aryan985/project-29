class Block {
    constructor(x,y,width,height){
        var block_options = {
            restitution:0.4,
            friction: 0.0,
            
        }
        this.body = Bodies.rectangle(x,y,width,height,block_options) 
        this.width = width
        this.height = height
        World.add(world,this.body)
    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        rectMode(CENTER)
        rect(0,0,this.width,this.height) 
        pop()
        
    }
}