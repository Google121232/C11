//Variables
var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var marks = [89,18,81,87];
//FunctionAverage
function average() {
    var sum = 0;
    for (var i = 0; i<marks.length; i = i +1) {
        sum = sum +marks[i];
    }
    var avg = sum /marks.length;
    console.log(avg);
}
average();

//FunctionPreload
function preload() {
    trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
    trex_collided = loadImage("trex_collided.png");
    groundImage = loadImage("ground2.png")
}

//FunctionSetup
function setup() {
    createCanvas(600, 200);
    //create a trex sprite
    trex = createSprite(50,160,20,50);
    trex.addAnimation("running", trex_running);
    trex.scale = 0.5;
    trex.debug = false;
    //create a ground sprite
    ground = createSprite(200,180,400,20);
    ground.addImage("ground",groundImage);
    ground.x = ground.width /2;
    ground.velocityX = -4;
    ground.debug = false;

    //InvisibleGround
    invisibleGround = createSprite(200,190,400,10);
    invisibleGround.visible = false;

    //console.log(marks);
}

//FunctionDraw
function draw() {
    background(220);
    //jump when the space button is pressed
    if (keyDown("space") && trex.y > 160) {
        trex.velocityY = -10;
    }
    trex.velocityY = trex.velocityY + 0.8
    if (ground.x < 0) {
        ground.x = ground.width / 2;
    }
    trex.collide(invisibleGround);
    drawSprites();

}
