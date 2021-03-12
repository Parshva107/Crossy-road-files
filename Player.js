class player{
    constructor(x,y){
        this.x = 683;
        this.y = y;
        this.spt=createSprite(this.x,this.y,30,30);
        this.spt.shapeColor = "red";
    }
    move(xdir,ydir){
        this.spt.x += xdir*grid;
        this.spt.y += ydir*grid;
    }
}