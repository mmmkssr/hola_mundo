function setup(){
    createCanvas(windowWidth,windowHeight);
    //frameRate(24);
    background(0);
    rectMode(CENTER);
}

function draw(){
    background(180,random(0,50),250);
    fill(mouseY,187,180):
    circle(mouseX+80,mouseY-75,mouseX);
    fill(79,56,89);
    rect(mouseX,mouseY,80,80);
}