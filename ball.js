class Ball{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.8,
            'friction':0.5,
            'density':3.0,
            

        }
        this.body = Bodies.circle(x, y,radius, options);
        this.radius = radius;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        fill("yellow");
       ellipseMode(RADIUS);
       ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
        
      }
}



