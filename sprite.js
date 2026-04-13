/*class Sprite {
    x;
    y;
    size;
    constructor(){
    checkCollision(otherSprite) {
        let d = dist(this.x, this.y, otherSprite.x, otherSprite.y);
        if (d < this.size/2 + otherSprite.size/2) {
            return true;
        }        else {
            return false;
        }
    }
}
class Ship extends Sprite {
    angle
    constructor(x, y){
        super();
        this.x = x;
        this.y = y;
        this.angle = 0;
        this.size = 100;
    }
    draw() {
        push();

        translate(this.x, this.y);
        rotate(this.angle);
        image(shipImg, 0, 0);

        pop();
        }
    controls() {
    if (keyIsDown(87)){
         if (weapon.x < 1800 - weapon.size/2){
        weapon.x+=10; 
    }   


}*/

