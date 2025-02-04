let color;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  let offset = 0;


  if (mouseIsPressed) {
    if (mouseX < 20 && mouseIsPressed) {
      color = pallete_check();
    }
    else {
      strokeWeight(10);
      stroke(color);
      line(pmouseX, pmouseY, mouseX, mouseY);
      strokeWeight(1);
    }
  }
  
  stroke('white');

  //red
  if (color == 'red') {offset = 10;}
  fill(255,0,0);
  rect(0,0,20 + offset, 20);
  offset = 0;

  //orange
  if (color == 'orange') {offset = 10}
  fill(255,128,0);
  rect(0,20,20 + offset, 20);
  offset = 0;

  //yellow
  if (color == 'yellow') {offset = 10}
  fill(255,255,0);
  rect(0,40,20 + offset, 20);
  offset = 0;

  //green
  if (color == 'green') {offset = 10}
  fill(0,255,0);
  rect(0,60,20 + offset, 20);
  offset = 0;

  //cyan
  if (color == 'cyan') {offset = 10}
  fill(0,255,255);
  rect(0,80,20 + offset, 20);
  offset = 0;

  //blue
  if (color == 'blue') {offset = 10}
  fill(0,0,255);
  rect(0,100,20 + offset, 20);
  offset = 0;

  //magenta
  if (color == 'magenta') {offset = 10}
  fill(255,0,255);
  rect(0,120,20 + offset, 20);
  offset = 0;

  //brown
  if (color == 'brown') {offset = 10}
  fill(150,75,0);
  rect(0,140,20 + offset, 20);
  offset = 0;

  //white
  if (color == 'white') {offset = 10}
  fill(255,255,255);
  rect(0,160,20 + offset, 20);
  offset = 0;

  //black
  if (color == 'black') {offset = 10}
  fill(0,0,0);
  rect(0,180,20 + offset, 20);
  offset = 0;

}

function pallete_check() {
 {
  if (mouseY < 20) {
    return 'red';
  }
  else if (mouseY < 40) {
    return 'orange';
  }
  else if (mouseY < 60) {
    return 'yellow';
  }
  else if (mouseY < 80) {
    return 'green';
  }
  else if (mouseY < 100) {
    return 'cyan';
  }
  else if (mouseY < 120) {
    return 'blue';
  }
  else if (mouseY < 140) {
    return 'magenta';
  }
  else if (mouseY < 160) {
    return 'brown';
  }
  else if (mouseY < 180) {
    return 'white';
  }
  else if (mouseY < 200) {
    return 'black';
  }
  
}

}