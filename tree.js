class Tree{    
    constructor(x,y,width,height){
    var options = {
        isStatic:true,
        density:0
    }
    this.body=Bodies.rectangle(x,y,width,height, options );
    this.width = width;
this.height = height;
this.image = loadImage("Images/tree.png")


}
    display(){
        var pos =this.body.position;
        push ();
        imageMode(CENTER);
        fill("brown");
        image(this.image,pos.x, pos.y, this.width, this.height);
        pop();

    }
}