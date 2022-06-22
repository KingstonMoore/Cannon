class Cannon{
    constructor(x,y,w,h){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.base = loadImage("assets/cannonBase.png")
        this.img = loadImage("assets/canon.png")
    }
    display(){
        push()
        imageMode(CENTER)
        image(this.img, this.x, this.y, this.w, this.h)
        pop()
        image(this.base, 50, 30, 220, 200)
    }
}