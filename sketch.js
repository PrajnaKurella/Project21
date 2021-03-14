var canvas;
var music;
var can1, can2, can3, can4; 
var box; 
var edge; 

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    can1 = createSprite(50,600,100);
    can1.shapeColor = "blue"; 

    can2 = createSprite(250,600,100); 
    can2.shapeColor = "orange"; 

    can3 = createSprite(450,600,100); 
    can3.shapeColor = "pink"; 

    can4 = createSprite(650,600,100); 
    can4.shapeColor = "green"; 

    //create box sprite and give velocity
    box = createSprite(random(20,750),100,10,10); 
    box.shapeColor = "white"; 
    box.velocityX = 0;
    box.velocityY = 2;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    
    //add condition to check if box touching surface and make it box
    if(can1.isTouching(box) && box.bounceOff(can1)){
        box.shapeColor = "blue"; 
    }   

    if(can2.isTouching(box) && box.bounceOff(can2)){
        box.shapeColor = "orange"; 
    }   

    if(can3.isTouching(box) && box.bounceOff(can3)){
        box.shapeColor = "pink"; 
    }   

    if(can4.isTouching(box) && box.bounceOff(can4)){
        box.shapeColor = "green"; 
    }   
    can1.display(); 
    can2.display(); 
    can3.display(); 
    can4.display(); 

    box.display(); 

    drawSprite(); 
}
