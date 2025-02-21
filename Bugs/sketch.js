let bgImage, score, testBug, walking, squished, time, gameState, starTime, timerIsDone, bugGroup;
let bugImages = [];
let imageURL = "https://mbardin.github.io/PDM-resources/media/sprite_images/bug_squish/";
let dir = [0, 90, 180, 270];



function preload(){
  bgImage = loadImage("bugback.png");
  bgImage.scale = 10;

  for (let i = 0; i < 4; i++){
    bugImages[i] = loadImage("bug" + (i + 1) + ".png");
  }

  
}

function setup() {
  stroke('white');
  textSize(20);
  createCanvas(800, 800);
  score = 0;
  gameState = "start";
  startTime = 30;
  timerIsDone = false;

  bugGroup = new Group();
  rectMode(CENTER);
  textAlign(CENTER);

  makeBugs(10);
}

function draw() {
  background(bgImage);

  if (gameState === "start"){
    push();
    fill(0);
    
    text("SQUISH ALL THE BUGS\nCLCIK TO BEGIN AND SQUISH", width / 2, height / 2);
    pop();
    if (mouseIsPressed){
      gameState = "play";
    }
  } else if (gameState === "play"){
    push();
    fill(0);
    text("TIME LEFT: " + (startTime - timer() % startTime) + "\nSCORE: " + score, width / 2, height / 2);
    pop();

    if (bugGroup.length < 5)
    {
      makeBugs(timer() % startTime + 1);
    }
    
    teleport();

    if (timerIsDone === true){
      gameState = "end";
    }
  } else if (gameState === "end"){
    push();
    fill(0);
    text("GAME OVER!\n YOU SQUISHED\n" + score + "\nBUGS!\nPRESS SPACE TO PLAY AGAIN!", width / 2, height / 2);
    pop();

    for (i = 0; i < bugGroup.length; i++){
      bugGroup.remove(bugGroup[i]);

    }

    if (keyIsPressed){
      if (keyCode === 32){
        setup();
      }
    }
  }





  
}


function teleport(){
  for (i = 0; i < bugGroup.length; i++){

    if (bugGroup[i].position.x > width + 100){
      bugGroup[i].position.x = -100;
      bugGroup[i].position.y = random(20, height - 20);
    } else if (bugGroup[i].position.x < - 100){
      bugGroup[i].position.x = width + 100;
      bugGroup[i].position.y = random(20, height - 20);
    } else if (bugGroup[i].position.y > height + 100){
      bugGroup[i].position.y = -100;
      bugGroup[i].position.x = random(20, width - 20);
    } else if (bugGroup[i].position.y < -100){
      bugGroup[i].position.y = height + 100;
      bugGroup[i].position.x = random(20, width - 20);
    }
}
}


function timer() {
  time = int((millis() - startTime) / 1000);
  if (time > 10 && time % startTime === 0) {
    timerIsDone = true;
  }
  return time;
}

function makeBugs(num){
  for (let i = 0; i < num; i++){

    testBug = createSprite(random(100, width - 100), random(100, height - 100), 50, 50);
    testBug.scale = 2;
    testBug.isDead = false;
    testBug.rotation = random(dir);
    testBug.collider = 'none';
    //setting speed
    testBug.speed = 2;
    testBug.direction = testBug.rotation - 90;

    teleport()

    squished = testBug.addAnimation("squish", bugImages[3]);
    walking = testBug.addAnimation("walk", 
      bugImages[0], 
      bugImages[1], 
      bugImages[0], 
      bugImages[2]);
    walking.frameDelay = 8;
    
    //if (bugGroup.mouse.pressing()){
    //  if (testBug.isDead === false) {
    //    testBug.changeAnimation("squish");
    //    testBug.speed = 0;
    //    testBug.life = 100;
    //    testBug.rotat
    //    score++;
    //    bugGroup.remove(testBug);
    //    testBug.isDead = true;
    //  }
    //};
bugGroup.add(testBug);
  };
}

function mousePressed() {
  for (i = 0; i < bugGroup.length; i++)
  if (abs(mouse.x - bugGroup[i].x) < 25 && abs(mouse.y - bugGroup[i].y) < 25){
    bugGroup[i].changeAnimation("squish");
    bugGroup[i].speed = 0;
    bugGroup[i].life = 100;
    bugGroup[i].rotationSpeed = 0;
    score++;
    bugGroup.remove(bugGroup[i])
    bugGroup[i].isDead = true;
  };
}

