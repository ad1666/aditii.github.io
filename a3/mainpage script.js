 radioButtons = [];
let radio;

let img;
let buffer;
let imgX = 1000;
let imgY = 900;

let img2;
let buffer2;
let img2X = 1000;
let img2Y = 2400;

let audio;
let isPlaying = false;
let playButton;

let dropdown;
let colorIcons = {};

let isLightOn = false;
let lightButton;

let button5;
let back4;

let russia;
let germany;
let pakistan;
let france;


function preload() {
  img = loadImage('logo.png');
  img2 = loadImage('blank.jpg');
  audio = loadSound('naveen audio.mp3');
  russia = loadImage('russia.png');
  germany = loadImage('germany.png');
  pakistan = loadImage('pakistan.png');
  france = loadImage('france.png');
}

function setup() {
  createCanvas(1535,3750);
  background(165, 245, 85);

  // question 1 radio options
  let options = ["Russia", "Germany", "Pakistan", "France"];
  for (let i = 0; i < options.length; i++) {
    let radio = createRadio();
    radio.option(options[i]);
    radio.position(150, 250);
    radio.class('radio-button-' + options[i].toLowerCase());
    radioButtons.push(radio);
  }

  fill(206, 180, 254);
    stroke(8, 28, 255);
    strokeWeight(2);
    rect(91, 100, 1350, 320, 18);

  image(russia, 190, 290);
  image(germany, 340, 290);
  image(pakistan, 490, 290);
  image(france, 630, 290);
  
  // all 'next' buttons
  let button1 = createButton('Go to next question');
  button1.position(1220,600);
  button1.class('nextbutton');
  button1.mousePressed(scrollDown1);

  let button2 = createButton('Go to next question');
  button2.position(1220,1350)
  button2.class('nextbutton');
  button2.mousePressed(scrollDown2);

  let button3 = createButton('Go to next question');
  button3.position(1220,2100);
  button3.class('nextbutton');
  button3.mousePressed(scrollDown3);

  let button4 = createButton('Go to next question');
  button4.position(1220,2850);
  button4.class('nextbutton');
  button4.mousePressed(scrollDown4);

  button5 = createButton('Submit');
  button5.position(1220,3600);
  button5.class('nextbutton');
  button5.hide();
  button5.mousePressed(goToResultpage);

  //all back buttons

  let back1 = createButton('< back');
  back1.position(120,810);
  back1.class('backbutton');
  back1.mousePressed(scrollUp1);

  let back2 = createButton('< back');
  back2.position(120,1560);
  back2.class('backbutton');
  back2.mousePressed(scrollUp2);

  let back3 = createButton('< back');
  back3.position(120,2310);
  back3.class('backbutton');
  back3.mousePressed(scrollUp3);

  back4 = createButton('< back');
  back4.position(120,3060);
  back4.class('backbutton');
  back4.mousePressed(scrollUp4);
  back4.hide();
  

  // drawing on images for questions 2 and 4
  buffer = createGraphics(width, height);
  buffer.image(img, 0, 0); // Draw the image on the buffer at the desired position
  buffer.noFill();
  buffer.stroke(255,210,210);
  buffer.strokeWeight(20);

  buffer2 = createGraphics(width, height);
  buffer2.image(img2, 0, 0); // Draw the image on the buffer at the desired position
  buffer2.noFill();
  buffer2.stroke(100);
  buffer2.strokeWeight(10);


   //restart buttons for question 2 and 4
   let restartButton = createButton('Restart');
   restartButton.mousePressed(restartDrawing);
   restartButton.position(1335,1310);
   restartButton.class('restartbutton');

   let restartButton2 = createButton('Restart');
   restartButton2.mousePressed(restartDrawing);
   restartButton2.position(1335,2810);
   restartButton2.class('restartbutton');


  //question 3's input box
  t1=createInput(' ');
  t1.position(140, 1750);
  t1.size(600, 170);
  t1.class('inputbox');

  //question 5's input box
  t2=createInput(' ');
  t2.position(140, 3350);
  t2.size(600, 170);
  t2.hide();
  t2.class('inputbox');

  // audio play button
  playButton = createButton('Play audio');
  playButton.position(140, 3200);
  playButton.mousePressed(toggleAudio);
  playButton.class('audiobutton');
  playButton.hide();

  drawBlackArea();
  lightButton = createButton("Turn Lights On!");
  lightButton.position(1350, 3680);
  lightButton.mousePressed(toggleLight);
  lightButton.hide();
  
  //dropdown for question 2
  dropdown=createSelect();
  dropdown.position(140, 980);
  dropdown.option('pinky promise pink');
  dropdown.option('meaty pink');
  dropdown.option('barbie pink');
  dropdown.option('pinker pink');
  dropdown.option('pink panther pink')
  dropdown.id('dropdown');
  dropdown.changed(changeColour);
  changeColour();

  colorIcons['pinky promise pink'] = color(222, 0, 67);
  colorIcons['meaty pink'] = color(233, 143, 170);
  colorIcons['barbie pink'] = color(200, 30, 90);
  colorIcons['pinker pink'] = color(237, 34, 93);
  colorIcons['pink panther pink'] = color(255, 121, 162);
  createColorIcons();
  
}

function draw() {
   
  if (!isLightOn) {
    drawBlackArea();
  }
  
  if (isLightOn) {
    // If the light is on, draw with normal colors
    background(165, 245, 85);

    //question 5

    fill(206, 180, 254);
    stroke(8, 28, 255);
    strokeWeight(2);
    rect(91, 3100, 1350, 570, 18);
    
    textFont('roboto');
    textStyle(BOLD);
    textSize(32);
    stroke(0);
    strokeWeight(0);
    fill(8, 28, 255);
    text("5. Recognize the voice!", 120, 3150);

    //audio stuff
    let currentTime = audio.currentTime();
    let duration = audio.duration();

    // Draw a progress bar for the audio
    
    fill(100);
    rect(140, 3260, 500, 25,3);
    fill(226, 46, 19);
    rect(140, 3260, map(currentTime, 0, duration, 0, 500), 25,3);
   
    button5.show();
    t2.show();
    playButton.show();
    back4.show();
    

  } else {
    // If the light is off, draw the black area
    // Draw other elements within the black area
    fill(255);
    textSize(32);
    text("Oops, looks like the power went off! Look for a way to bring it back on.", 254, 3200);
  }

  
    stroke(0); 
    strokeWeight(0);

    //question 1
    textFont('roboto');
    textStyle(BOLD);
    textSize(32);
    stroke(0);
    strokeWeight(0);
    fill(8, 28, 255);
    text("1. Where was Upendra on the 3rd of March of the year 2019?", 120, 150);

    //question 2
    
    fill(206, 180, 254);
    stroke(8, 28, 255);
    strokeWeight(2);
    rect(91, 850, 1350, 490, 18);

    textFont('roboto');
    textStyle(BOLD);
    textSize(32);
    stroke(0);
    strokeWeight(0);
    fill(8, 28, 255);
    text("2. Fill p5.js logo with correct colour.", 120, 900);

    //question 3

    fill(206, 180, 254);
    stroke(8, 28, 255);
    strokeWeight(2);
    rect(91, 1600, 1350, 400, 18);

    textFont('roboto');
    textStyle(BOLD);
    textSize(32);
    stroke(0);
    strokeWeight(0);
    fill(8, 28, 255);
    text('3. What is the full form of JSON?', 120, 1650);
  
    //question 4

    fill(206, 180, 254);
    stroke(8, 28, 255);
    strokeWeight(2);
    rect(91, 2350, 1350, 490, 18);

    textFont('roboto');
    textStyle(BOLD);
    textSize(32);
    stroke(0);
    strokeWeight(0);
    fill(8, 28, 255);
    text("4. Draw logo of p5.js.", 120, 2400);
  
  
  // Draw the buffer onto the main canvas at the specified position (imgX, imgY)
  image(buffer, imgX, imgY);

  image(buffer2, img2X, img2Y);

  // Check if the mouse is inside the image boundaries
  if (
    mouseX >= imgX && mouseX <= imgX + img.width &&
    mouseY >= imgY && mouseY <= imgY + img.height
  ) {
    // Draw on the buffer only if the mouse is over the image
    if (mouseIsPressed) {
      buffer.line(mouseX - imgX, mouseY - imgY, pmouseX - imgX, pmouseY - imgY);
    }
  }

   // Check if the mouse is inside the image boundaries
   if (
    mouseX >= img2X && mouseX <= img2X + img2.width &&
    mouseY >= img2Y && mouseY <= img2Y + img2.height
  ) {
    // Draw on the buffer only if the mouse is over the image
    if (mouseIsPressed) {
      buffer2.line(img2.width - mouseX + img2X, img2.height - mouseY + img2Y, img2.width - pmouseX + img2X, img2.height - pmouseY + img2Y);
    }
  }

  //hovering over light button
  if (
    mouseX >= 1350 &&
    mouseX <= 1500 &&
    mouseY >= 3680 &&
    mouseY <= 3750
  ) {
    lightButton.show();
  } else {
    lightButton.hide();
  }

    //bulb drawing stroke(200, 200, 0); // Yellowish color for the filament  strokeWeight(4); fill(255, 255, 0); // Yellow color for the bulb ellipse(1450, 3700, 50, 65); line(1445, 3685, 1445, 3710); line(1455, 3685, 1455, 3710);
  
}

function drawBlackArea() {
  // Draw the black area
  fill(0);
  rect(0, 3000, 1535, 3750 - 3000);
  // Draw other elements within the black area
  // These will only be drawn when the light is off
  fill(255);
  textSize(32);
  text("Oops, looks like the power went off! Look for a way to bring it back on.", 254, 3200);
}

function toggleLight() {
  isLightOn = !isLightOn;
  if (isLightOn) {
    // Hide UI elements when the light is turned on
  } else {
    // Show UI elements when the light is turned off
    button5.hide();
    t2.hide();
    playButton.hide();
    back4.hide();
  }
}


// function for playing and pausing audio
function toggleAudio() {
  if (!isPlaying) {
    audio.play();
    playButton.html('Pause');
  } else {
    audio.pause();
    playButton.html('Play');
  }
  isPlaying = !isPlaying;
}

//function for restart buttons
function restartDrawing() {
    buffer.clear();
    buffer2.clear();

    imgX = 1000;
    imgY = 900;
    img2X = 1000;
    img2Y = 2400;
  
    buffer.image(img, 0, 0);
    buffer2.image(img2, 0 ,0);
}

//function for pink dropdowns
function changeColour() {
  let selectedOption = dropdown.value();
  
   if (selectedOption === 'pinky promise pink') {
    buffer.stroke(color(222, 0, 67 ));
  } else if (selectedOption === 'meaty pink') {
    buffer.stroke(color(233, 143, 170));
  } else if (selectedOption === 'barbie pink') {
    buffer.stroke(color(200, 30, 90));
  } else if (selectedOption === 'pinker pink') {  
    buffer.stroke(color(237, 34, 93));
  } else if (selectedOption === 'pink panther pink') { 
    buffer.stroke(color(255, 121, 162));
  } else {
    selectedOption = null; 
  }
} 

function createColorIcons() {
  // Get the select element's DOM element
  const selectElement = dropdown.elt;

  for (let option of selectElement.options) {
    const optionName = option.value;
    const colorIcon = colorIcons[optionName];

    if (colorIcon) {
      // Create a colored square using HTML and CSS
      const iconDiv = createDiv('');
      iconDiv.style('width', '20px');
      iconDiv.style('height', '20px');
      iconDiv.style('background-color', colorIcon.toString());
      iconDiv.style('display', 'inline-block');
      iconDiv.style('margin-right', '5px');
      option.appendChild(iconDiv.elt);
    }
  }
}

//function for all next question buttons
function scrollDown1() {
  // Scroll down by 750 pixels
  window.scrollTo(0, 750);
}

function scrollDown2() {
  // Scroll down by 750 pixels
  window.scrollTo(750, 1500);
}

function scrollDown3() {
  // Scroll down by 750 pixels
  window.scrollTo(1500, 2250);
}
function scrollDown4() {
  // Scroll down by 750 pixels
  window.scrollTo(2250, 3000);
}

//function for all back buttons
function scrollUp1() {
  window.scrollTo(750,0);
}
function scrollUp2() {
  window.scrollTo(1500,750);
}
function scrollUp3() {
  window.scrollTo(2250,1500);
}
function scrollUp4() {
  window.scrollTo(3000,2250);
}

function goToResultpage(){
  window.location.href = "resultpage index.html";
}