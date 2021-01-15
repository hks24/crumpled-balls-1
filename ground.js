class Ground{
    constructor (x,y,width,height){
        var options  = {
         isStatic : true,
         restitution : 0.3,
         
        }
    this.x=x;
    this.y=y;
    this.width=width;
    this.height = height;
    this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options);
    World.add(world,this.body);
    }
    
    display()
    {
        var groundp = this.body.position;
    
        push()
        translate(groundp.x,groundp.y);
        rectMode(CENTER)
        strokeWeight(3);
        fill("green");
        rect(0,0,this.width,this.height);
        pop()
    }
    
    }