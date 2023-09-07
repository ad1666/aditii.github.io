let button;
let img1;
let img2;

function preload() {
  img1 = loadImage("favicon.png");
  img2 = loadImage("meme.jpg");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  

  // Create a "Back to Homepage" button
  button = createButton("Back to Homepage");
  button.position(width * 0.78, height * 0.82);
  button.size(width * 0.13, height * 0.067);
  button.class("homepagebtn");
  button.mousePressed(goToHomepage);
}

function draw() {


  background(165, 245, 85);
  

  // red header bg
  fill(226, 46, 19);
  stroke(8, 28, 255);
  strokeWeight(3);
  rect(0, 0, width, 80); // Header background

  //logo
  img1.resize(110, 90);
  image(img1, 20, 0);

  // Result Card lavender
  fill(206, 180, 254);
  stroke(8, 28, 255);
  strokeWeight(2);
  rect(width * 0.06, height * 0.16, width * 0.88, height * 0.77, 18);

  //rectangle behind result in the title
  fill(165, 245, 85)  
  strokeWeight(0); 
  rect(width * 0.66, height * 0.265, width * 0.14, height * 0.09) ;



  textFont('impact');
  textAlign(CENTER);
  textSize(0.042 * width);
  fill(8, 28, 255);
  text("! QUIZZ RESULT !",width * 0.67, height * 0.35);
  
  textSize(0.042 * width);
  stroke(255);
  fill(255);
  text("RESULT !", width * 0.73, height * 0.34);


  textSize(0.024 * width);
  textAlign(LEFT);
  textFont('helvetica');
  textStyle(BOLD);
  textStyle(); 
  textSize(0.02 * width);
  strokeWeight(0);
  fill(226, 46, 19);
  text("Your Score: 2.369055634 ",width * 0.49, height * 0.44);
  
  textFont('roboto');
  textStyle(BOLD);
  textSize(0.021 * width);
  strokeWeight(0);
  fill(255);
  text("Congratulations! You suck. ",  width * 0.49, height * 0.51);
  
  textFont('helvetica');
  textStyle(BOLD);
  textStyle();  
  textSize(0.015 * width);
  strokeWeight(0);
  fill(8,28,255);
  textWrap(WORD);
  text("Result Summary: You creep. Why do you know so much about Upendra’s whereabouts. My 4 year old cousin can do a much better job at staying inside the lines. Took you so much time to figure out JSON, Kya coder banega re tu?", width * 0.49, height * 0.56, width * 0.32);

  //meme
  img2.resize(width * 0.36, height * 0.53);
  image(img2,  width * 0.09, height * 0.28);
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}



function goToHomepage () {
  window.location.href = "homepage index.html";
}
