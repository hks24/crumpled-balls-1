class Dustbin{
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
        var dp = this.body.position;
    
        push()
        translate(dp.x,dp.y);
        rectMode(CENTER)
        strokeWeight(3);
        fill("green");
        rect(0,0,this.width,this.height);
        pop()
    }
    
    }