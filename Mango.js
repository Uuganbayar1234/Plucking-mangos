class mango{
    constructer(x,y,r)
    {
        var options={
            IsStatic:true,
            restitution:0,
            friction:1,
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.Image=loadImage("images/mango.png")
        this.body=Bodies.circle(this.x, this.y, this.r, options)
        World.add(world, thisbody);
    }
}