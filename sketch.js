//function setup() {
//createCanvas(windowWidth, windowHeight);
//frameRate(24);
//background(0);
//rectMode(CENTER);
//}

//function draw() {
//background(180, random(0, 50), 250, 10);

//strokeWeight(5);
//noFill();
//stroke(mouseY, 187, 180);
//circle(mouseX + 80, mouseY - 75, mouseX);

//strokeWeight(1);
//stroke(15, 25, 50);
//fill(79, 56, 89);
//rect(mouseX, mouseY, 80, 80);
//}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //frameRate(24);
  background(0);
  rectMode(CENTER);
  noCursor(); // ocultar el cursor
  noStroke(); // formas sin líneas ni trazos
}

function draw() {
  background(234, random(0, 200), 227, 50);

  // Primer Círculo
  fill(213, 192, 212);
  circle(mouseX + 50, mouseY - 50, 50);

  // Segundo Círculo
  fill(190, 157, 193);
  circle(mouseX + 40, mouseY - 40, 40);

  // Tercer Círculo
  fill(167, 133, 175);
  circle(mouseX + 30, mouseY - 30, 30);

  //Cuarto Círculo
  fill(100, 66, 129);
  circle(mouseX + 20, mouseY - 20, 20);

  // Primer Círculo (superior derecha)
  fill(213, 192, 212);
  circle(mouseX - 50, mouseY + 50, 50);

  // Segundo Círculo (superior derecha)
  fill(190, 157, 193);
  circle(mouseX - 40, mouseY + 40, 40);

  // Tercer Círculo (superior derecha)
  fill(167, 133, 175);
  circle(mouseX - 30, mouseY + 30, 30);

  //Cuarto Círculo (superior derecha)
  fill(100, 66, 129);
  circle(mouseX - 20, mouseY + 20, 20);

  // Primer Círculo (inferior derecha)
  fill(213, 192, 212);
  circle(mouseX + 50, mouseY + 50, 50);

  // Segundo Círculo (inferior derecha)
  fill(190, 157, 193);
  circle(mouseX + 40, mouseY + 40, 40);

  // Tercer Círculo (inferior derecha)
  fill(167, 133, 175);
  circle(mouseX + 30, mouseY + 30, 30);

  //Cuarto Círculo (inferior derecha)
  fill(100, 66, 129);
  circle(mouseX + 20, mouseY + 20, 20);

  // Primer Círculo (superior izquierda)
  fill(213, 192, 212);
  circle(mouseX - 50, mouseY - 50, 50);

  // Segundo Círculo (superior izquierda)
  fill(190, 157, 193);
  circle(mouseX - 40, mouseY - 40, 40);

  // Tercer Círculo (superior izquierda)
  fill(167, 133, 175);
  circle(mouseX - 30, mouseY - 30, 30);

  //Cuarto Círculo (superior izquierda)
  fill(100, 66, 129);
  circle(mouseX - 20, mouseY - 20, 20);

  // Primer Círculo (superior izquierda)
  fill(213, 192, 212);
  circle(mouseX - 50, mouseY - 50, 50);

  // Segundo Círculo (superior izquierda)
  fill(190, 157, 193);
  circle(mouseX - 40, mouseY - 40, 40);

  // Tercer Círculo (superior izquierda)
  fill(167, 133, 175);
  circle(mouseX - 30, mouseY - 30, 30);

  //Cuarto Círculo (superior izquierda)
  fill(100, 66, 129);
  circle(mouseX - 20, mouseY - 20, 20);

  // Círculo (centro)
  fill(242, 234, 223);
  circle(mouseX - 0, mouseY - 0, 30);
}
