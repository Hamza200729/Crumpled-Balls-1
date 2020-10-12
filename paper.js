class Paper {
    constructor(x,y,r){
        var options = {

            isStatic:false,
            restitiution:0.3,
            friction:0.5,
            density:1.2
        }
        
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x,this.y,this.r/2,options)
        //Matter.Body.setAngle(this.body,angle);

        World.add(world,this.body)
    }
     
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("blue");
        fill(300);
        ellipse(0,0,this.r,this.r)
        pop();
    }
}