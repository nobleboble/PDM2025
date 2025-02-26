let button1, button2, button3, button4, player1, player2, player3, player4;
let sound1 = "trailer_intro_sound.wav";
let sound2 = "wolf_cage_break.wav";
let sound3 = "videocam_os_sting.wav";
let sound4 = "VO_beatleshy.wav";

function preload() {
	player1 = new Tone.Player(sound1).toDestination();
	player2 = new Tone.Player(sound2).toDestination();
	player3 = new Tone.Player(sound3).toDestination();
	player4 = new Tone.Player(sound4).toDestination();
}

function setup() {
	new Canvas(500, 500);
	console.log(Tone);
	button1 = createSprite(150, 150, 50, 50);

	button2 = createSprite(350, 150, 50, 50);

	button3 = createSprite(150, 350, 50, 50);

	button4 = createSprite(350, 350, 50, 50);
}

function draw() {
	background(200);
	text("CLICK EACH SQUARE TO PLAY THEIR SOUND", width /4 - 5, height / 2);
	text("CREAK", width /4 +3, 200);
	text("SMASH", 3*width /4 -45, 200)
	text("BEEOOP", width /4, 400);
	text("VICTORY!", 3*width /4 -50, 400)
}

function mousePressed() {
	
	if (abs(mouse.x - button1.x) < 25 && abs(mouse.y - button1.y) < 25){
		player1.start();
	  };

	if (abs(mouse.x - button2.x) < 25 && abs(mouse.y - button2.y) < 25){
		player2.start();
	};

	if (abs(mouse.x - button3.x) < 25 && abs(mouse.y - button3.y) < 25){
		player3.start();
	  };

	if (abs(mouse.x - button4.x) < 25 && abs(mouse.y - button4.y) < 25){
		player4.start();
	};
}

