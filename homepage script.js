let button1;
let canvas;

function preload() {
  img1 = loadImage("favicon.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  

  // start quizz button
  button1 = createButton('Start the Quiz!');
  button1.position(width / 5.9 - 100, height * 0.7);
  button1.class('buttons');
  button1.mousePressed(goToquizpage);
}
  
  function draw() {

  background(165, 245, 85);

  strokeWeight(2); 
  fill(206, 180, 254);
  rect(100, 0, width - 200, height - 75, 0, 0, 37, 37);
    
  fill(226, 46, 19);
  stroke(8, 28, 255);  
  strokeWeight(4);
  rect(0, 0, width, 82);
  
    //rectangle behind quizzyfizz
  fill(165, 245, 85)  
  strokeWeight(0); 
  rect(width / 2 + 20, height * 0.14, 276, 70) ;
    
  image(img1, width / 2 + 40, height * 0.27);

  textFont('impact');
  textAlign(CENTER);
    
  fill(8, 28, 255)
  textSize(64);
  strokeWeight(0);
  textStyle();
  text('WELCOME TO QUIZZYFIZZ', width / 4.2, height * 0.15, 800);
  
  fill(255);
  text('QUIZZYFIZZ',width / 2 + 155, height * 0.22);  
    
  textFont('roboto');
    
  textSize(30);
  fill(255)  
  strokeWeight(0);
  textStyle(BOLD);
  textSize(32);
  textAlign(LEFT);
  text('You have been sent here because you are failing in class *womp womp*',width * 0.1, height * 0.36, width * 0.4);
  
  textFont('helvetica');
  textStyle();  
  textSize(22);
  fill(8, 28, 255);
  text('BUT fret not, there is one last chance for revival. Complete this quiz to convince your facilitator that you are at least worthy of a C.', width * 0.1, height * 0.48, width * 0.3);
    
  }

  function goToquizpage(){
    window.location.href = "mainpage index.html";
  }

  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }