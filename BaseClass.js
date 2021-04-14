class BaseClass{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.2,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);


      }
      display(){
        push ();
        translate(this.body.position.x,this.body.position.y);
        var angle = this.body.angle;
        rotate (angle);
        fill("green");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop ();
      }

      boxScore(){
        if(this.body.position.y <= 760){
          if(this.body.speed > 1 ){
            score  = score + 1;

          }
          if(this.body.position.y > 750){
            score = score + 10;
            //World.remove (world,this.body);
          }
        }
      }
}