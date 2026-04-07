

let points = [
{
    x:200,
    y:200,
    size:50,
    r: 100,
    g: 200,
    b: 250,
    value: 10

},
{
    x:75,
    y:75,
    size:20,
    r: 3,
    g: 150,
    b: 5,
    value: 2
},
{
    x:300,
    y:300,
    size:100,  
    
    r: 255,
    g: 255,
    b: 0,
    value: 200
}
]
let enemies = [
    {
    x: 500,
    y: 500,
    size: 50,       
    velocity: 5
    },
    {
    x: 1000,
    y: 500,
    size: 50,
    }
]
let shooter = 
    {
    x: 900,
    y: 800,
    size: 50,
    
}
let bullets = [
    {
    x: shooter.x,
    y: shooter.y,    
    size: 25,
    value: 200
    },
]
let stage = 0
let score = 0

function preload() {
    shooter.image = loadImage('./painter.png');
    enemies.image = loadImage('./enemy.png');
    for (let i = 0; i < enemies.length; i++) {
        enemies[i].image = enemies.image; 
    }
}
function setup() {
    createCanvas(1800, 875);
    background(100, 50, 120);
    imageMode(CENTER);
}    

function draw() {
    background(100);
    if (stage === 3) {
        game2();
    }
    if (stage === 2) {
        splash2();
    }
    if (stage === 1) {
       game();
       if (frameCount % 240 === 0) {
        updateEnemy(enemies[0]);
    }
    for (let i = 0; i<enemies.length; i++) {
    image(enemies[i].image, enemies[i].x, enemies[i].y);
    
    }
    }
    if (stage === 0) {
        splash();
    }
    if (keyIsDown(ENTER)) {
        stage = 1;
    }   
    if (keyIsDown(SHIFT)) {
        stage = 3;
    }
    if (score > 500) {
        stage = 2;
        score = 0;

    }
    
    
}
//Intro screen 
function splash() {
    fill(255);
    textSize(15);
    textAlign(LEFT, TOP);
    textFont("Courier New");
    textWrap(WORD);
    text("Colour Shooter", 10, 200, 400);
    text("Shoot the different coloured balls worth different values, using the left and right arrow keys to move the shooter, and the up arrow to shoot the balls.", 10, 220, 400);
    text("The game ends when you shoot the wrong colour, so be careful!", 10, 300, 400);
    text("Press Enter to Start", 10, 350, 400);
}
//End screen when score < 200
function splash2() {
    fill(255);
    textSize(15);
    textAlign(LEFT, TOP);
    textFont("Courier New");    
    text("You won! Press Enter to Play Again", 10, 200, 400);
}


function game() {
    textSize(20);
    textAlign(LEFT, TOP);
    textFont("Courier New");
    text("Score: " + score, 10, 10);
    
    fill(shooter.r, shooter.g, shooter.b);
    circle(shooter.x, shooter.y, shooter.size);
    image(shooter.image, shooter.x, shooter.y);
    updateShooter(shooter);
    
    if (frameCount % 240 === 0) { 
        randomBalls(points);
    }
    
    for (let i = 0; i<points.length; i++) { 
        fill(points[i].r, points[i].g, points[i].b); 
        circle(points[i].x, points[i].y, points[i].size); 
          
    }
    image(shooter.image, shooter.x, shooter.y, shooter.size, shooter.size);
}




function checkCollision(bullet, target) {
    let distance = Math.sqrt((bullet.x - target.x) ** 2 + (bullet.y - target.y) ** 2);
    return distance < (bullet.size / 2 + target.size / 2);
}


function updateShooter(weapon) {
    if(keyIsDown(68)){
        if (weapon.x < 1800 - weapon.size/2){
        weapon.x+=10; 
        }
    }
    if(keyIsDown(65)){
        if (weapon.x > 0 + weapon.size/2){
        weapon.x-=10;
        }
    }
    for (let i = 0; i<bullets.length; i++) {
        circle(bullets[i].x, bullets[i].y, bullets[i].size);
        bullets[i].y-=10;
        for (let j = 0; j<points.length; j++) {

        if (checkCollision(bullets[i], points[j])) {
            score+=points[j].value;
            bullets.splice(i, 1);
            points.splice(j,1);
            createPoints();
            break;
        } 
    }
    }
}  

function updateCircle(circ) {
    
    circ.x = random(0, 1800);
    circ.y = random(50, 700);
    

}

function randomBalls(targets) {
    for (let i = 0; i<targets.length; i++) {
        updateCircle(targets[i]);
        
        
    }
}

function keyPressed() {
    if (keyCode === 87) {
        let bullet = {
            x: shooter.x,
            y: shooter.y,
            size: 10, 
        };
        bullets.push(bullet);
    }
}

function createPoints() {
    let randomX = random(0, 1800);
    let randomY = random(50, 700);
    let randomSize = random(10, 100);   
    let randomR = random(80, 220);
    let randomG = random(0, 150);
    let randomB = random(150, 255);   
    let randomValue = floor(random(1, 200));
    let newPoint = {
        x: randomX,
        y: randomY,
        size: randomSize,
        r: randomR, 
        g: randomG,
        b: randomB,
        value: randomValue
    };
    points.push(newPoint);
    }

function updateEnemy(enemy) {
    enemy.x = random(0, 1800);
    enemy.y = random(50, 700);
}
        

    

