class Paper {
    constructor(x, y, radius) {
        var options = {
           isStatic:false,
           restitution:0.3,
           friction:0.5,
           density:1.2
           
        }
        this.paperimg=loadImage("paper.png")
        this.body = Bodies.circle(x, y, (radius-20)/2, options);
        this.radius = radius;
        World.add(world, this.body);
      }
    display() {
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);9
        image(this.paperimg,0, 0, this.radius,this.radius)
        pop();
      }
    };