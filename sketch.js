function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(24);
  background(0);
  rectMode(CENTER);
}

function draw() {
  background(180, random(0, 50), 250, 10);

  strokeWeight(5);
  noFill();
  stroke(mouseY, 187, 180);
  circle(mouseX + 80, mouseY - 75, mouseX);

  strokeWeight(1);
  stroke(15, 25, 50);
  fill(79, 56, 89);
  rect(mouseX, mouseY, 80, 80);
}
