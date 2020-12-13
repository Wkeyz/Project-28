class Ground {
    constructor(x,y){
        var options = {
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,1300,20, options );
        this.width = 1300;
    this.height = 20;
    
    World.add(world, this.body);
    }
        display(){
            var pos =this.body.position;
            push ();
            rectMode(CENTER);
            fill("brown");
            rect(pos.x, pos.y, this.width, this.height);
            pop();

        }
};