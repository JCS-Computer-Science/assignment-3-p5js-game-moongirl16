//Ok so heres the plan: i wan to make a game where you have to shoot random balls that are a certain colour using a shooter, and if you shoot the wrong colour the game ends
//Current problem to solve: how am i going to get random balls to appear on the screen, for an appropiate amount of time for a player to shoot it and then make it disappear when its hit?
//Next: figure out how to make a launcher that 
//and i need to print text to the console to tell the player what to shoot (this also involves the randomization of the colours)

let points = [
{
    x:200,
    y:200,
    size:50,
    velX:3,
    velY:4,
    r: 100,
    g: 200,
    b: 250

},
{
    x:75,
    y:75,
    size:20,
    velX:2,
    velY:1,
    r: 3,
    g: 150,
    b: 5
}
]

let shooter = 
    {
    x: 200,
    y: 350,
    size: 50,
    
}


/*let x = 200;
let y = 200*/
function setup() {
    //rectMode(CENTER);
    createCanvas(400, 400);
    background(100, 50, 120);
    
    /*fill("lightPink");
    noStroke();
    circle(100, 350, 50);
    circle(300, 350, 50)
    ellipse(200, 275, 225, 125)
    ellipse(200, 300, 275, 75)
    stroke("yellow");
    strokeWeight(4);*/
    
    
}    

function draw() {
    background(100);
    circle(shooter.x, shooter.y, shooter.size);
    updateShooter(shooter);
    
    if (frameCount % 240 === 0) { 
        randomBalls(points);
    }
    for (let i = 0; i<points.length; i++) { 
        circle(points[i].x, points[i].y, points[i].size);    
    //console.log(circles[i].x); This causes lag! 
    }
    
}
function updateShooter(weapon) {
    if(keyIsDown(RIGHT_ARROW)){
        if (weapon.x < 400 - weapon.size/2){
        weapon.x+=4; 
        }
    }
    if(keyIsDown(LEFT_ARROW)){
        if (weapon.x > 0 + weapon.size/2){
        weapon.x-=4;
        }
    }
}    //console.log(mouseX);
    //circle(mouseX, mouseY, 100);
     
    /*circle(x, y, 50);
    
    if(keyIsDown(UP_ARROW)){
        y-=4;
    }
    if(keyIsDown(DOWN_ARROW)){
        y+=4;
    }*/

function updateCircle(circ) {
    
    circ.x = random(0, 400);
    circ.y = random(0, 200);
    

}
function randomBalls(targets) {
    for (let i = 0; i<targets.length; i++) {
        updateCircle(targets[i]);
        
        
    }
}
    /*
    circ.x += circ.velX
    if (circ.x  >400 - circ.size/2|| circ.x <0 +circ.size/2){
        circ.velX *= -1;
    }
    circ.y += circ.velY
    if (circ.y  > 400 - circ.size/2|| circ.y <0 +circ.size/2){
        circ.velY *= -1; 
    }
    

}*/
function keyPressed() {
    if (key=="ArrowRight"){
        x++;
    }else if (key == "ArrowLeft") {
        x--;
    }
}
/*function mouseClicked() {
    let randomSize = random(25, 100);
    let randomVelX = random(-4, 5);
    let randomVelY = random(-4, 5);
    let randomR = random(0, 255);
    let randomG = random(0, 255);
    let randomB = random(0, 255);
    let newCircle = {
        x:mouseX,
        y:mouseY,
        size: randomSize,
        velX: randomVelX,
        velY: randomVelY,
        r: randomR,
        g: randomG,
        b: randomB


    } 
        //this function is going to be important: i need it to work with another method besides mouseClicked

    circles.push(newCircle);
}
    /*let r = random(0, 255);
    let g = random(0, 255);
    let b = random(0,255);
    fill(r, g, b);
    circle(mouseX, mouseY, randomSize);*/
