class Paper{
    constructor (x,y,r){
        var opt={
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(x,y,r,opt);
        this.r=r;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        ellipse(pos.x,pos.y,this.r,this.r);
    }
}