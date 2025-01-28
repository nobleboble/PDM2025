function setup() {
  createCanvas(600, 600);
  colorMode(HSB);
  
}

var wait = 100;

function draw() {
  

  switch(floor( ( frameCount / 200 ) % 4) ) {
    case 0:
      example1();
      break;
    case 1:
      example2();
      break;
    case 2:
      example3();
      break;
    case 3:
      example4();
      break;
  }
  
  fill(0, 0, 100);
  stroke(0, 0, 0);
  strokeWeight(3);
  textSize(30);
  text("Assignments will cycle automatically:", 20, 40);
}

//STAR
function example4() {
  background(240, 100, 100);


  fill(120, 100, 50);
  stroke(0,0,100,100);
  strokeWeight(10);
  circle(300, 300, 400);
  
  //Star Strokes
  for (i = 0; i < 5; i ++) {
    stroke(0,0,100,100);
    strokeWeight(20);

    line(300 + 200 * cos(2 * PI * i / 5 - (PI / 2)), 300 + 200 * sin(2 * PI * i / 5 - (PI / 2)), 
    300 + 200 * cos(2 * PI * (i + 2) / 5 - (PI / 2)), 300 + 200 * sin(2 * PI * (i + 2) / 5 - (PI / 2)));
  }
  //the identical for statement is to avoid the triangles clipping the strokes strangely when used in the statement above
  for (i = 0; i < 5; i ++) {
    fill(0, 100, 100);
    stroke(0,0,0,0);
    triangle(300 + 200 * PI / 8 * cos(2 * PI * i / 5 + (PI / 2)), 300 + 200 * PI / 8 * sin(2 * PI * i / 5 + (PI / 2)), 
    300 + 200 * PI / 8 * cos(2 * PI * (i + 2) / 5 + (PI / 2)), 300 + 200 * PI / 8 * sin(2 * PI * (i + 2) / 5 + (PI / 2)), 
    300 + 200 * cos(2 * PI * (i + 1) / 5 - (PI / 2)), 300 + 200 * sin(2 * PI * (i + 1) / 5 - (PI / 2)));
  }

  
  triangle
  fill(0, 100, 100);
  //circle(300, 300, PI*100 / 2)
}

//PACMAN
function example3() {
  background(0);

  stroke(0,0,0,0);
  fill(50, 100, 100);
  arc(150, 300, 200, 200, -3*PI/4, 3*PI/4);


  fill(0, 100, 100);
  circle(450, 300, 200);
  rect(350, 300, 200, 100);

  fill(0, 0, 100);
  circle(400, 300, 50);
  circle(500, 300, 50);

  fill(240, 100, 100);
  circle(400, 300, 35);
  circle(500, 300, 35);
}


function example2() {
  background(255);

  stroke(0, 0, 0, 0);
  fill(0, 100, 100, 0.25);
  circle(300,200,300);

  fill(240, 100, 100, 0.25);
  circle(200, 375, 300);

  fill(120, 100, 100, 0.25);
  circle(400, 375, 300);
}


function example1() {
  background(100, 75, 100);

  circle(175,250,200);
  square(325, 150, 200);
}