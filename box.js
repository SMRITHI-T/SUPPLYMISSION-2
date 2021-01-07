class Box{
    constructor(x, y) {
        var options = {
           isStatic:true
        }
        this.width = 200;
        this.height = 100;
        this.thickness=20
        this.bottomBody = Bodies.rectangle(x, y, this.width, this.thickness, options);
        this.rightBody = Bodies.rectangle(x+100, y-50, this.thickness, this.height, options);
        this.leftBody = Bodies.rectangle(x-100, y-50, this.thickness, this.height, options);

        World.add(world, this.bottomBody);
        World.add(world, this.rightBody);
        World.add(world, this.leftBody);


      }
      display(){
        var angle1 = this.bottomBody.angle;
        var angle2 = this.leftBody.angle;
        var angle3 = this.rightBody.angle;

        push();
        translate(this.bottomBody.position.x, this.bottomBody.position.y);
        rotate(angle1);
        fill("red")       
         rectMode(CENTER);
        rect(0, 0, this.width,this.thickness);
        pop();
        
        push();
        translate(this.rightBody.position.x, this.rightBody.position.y);
        rotate(angle2);
        fill("red")       
        rectMode(CENTER);
        rect(0, 0, this.thickness, this.height);
        pop();
       
        push();
        translate(this.leftBody.position.x, this.leftBody.position.y);
        rotate(angle3);
        fill("red")       
        rectMode(CENTER);
        rect(0, 0, this.thickness, this.height);
        pop();
      }
}