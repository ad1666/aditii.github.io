let inpt1, inpt2;

let img1, img2, img3;
let selectedImage;

let slider1;

let rSlider;
let gSlider;
let bSlider;
let textColor;

let radio;
let font1, font2;
let selectedFont;

function preload() {
  img1 = loadImage("img1.jpg");
  img2 = loadImage("img2.png");
  img3 = loadImage("img3.jpg");

  font1 = loadFont("Comic Sans.ttf");
  font2 = loadFont("Helvetica Compressed.otf");
}

function setup() {
    let cnv = createCanvas(500,500);
    cnv.parent('column-two'); //sets <div id="column-two"></div> as parent container of the canvas

    //Example of an input element (button) --- Replace this with your own inputs/controls
    // Assign all your input elements the parent - 'column-one'

    let c3 = createP("Select an image for your meme:");
    c3.parent('column-one');
    c3.class('general');

    let dropdown = createSelect();
    dropdown.parent('column-one');
    dropdown.class('dropdowns');
    
    dropdown.option("Image 1");
    dropdown.option("Image 2");
    dropdown.option("Image 3");
    dropdown.changed(changeImage);

    let c1 = createP('Type title 1 here:');
    c1.parent('column-one');
    c1.class('general');

    inpt1 = createInput("");  //creates an input element called inpt1
    inpt1.parent('column-one');  //sets div id="column-one"></div> as the parent container of the element
    inpt1.class('inputs');  //assigns the class 'inputs' to the element

    let c2=createP('Type title 2 here:');
    c2.parent('column-one');
    c2.class('general');

    inpt2 = createInput("");
    inpt2.parent('column-one');
    inpt2.class('inputs');

    let c4 = createP("Change Font Size:");
    c4.parent('column-one');
    c4.class('general');

    slider1 = createSlider(8, 24, 12);
    slider1.parent('column-one');
    slider1.class('sliders');
    slider1.id('fontslider');

    let c5 = createP("Change font colour (r):");
    c5.parent('column-one');
    c5.class('general');

    rSlider = createSlider(0, 255, 50);
    rSlider.parent('column-one');
    rSlider.class('sliders');

    let c6 = createP("Change font colour (g):");
    c6.parent('column-one');
    c6.class('general');

    gSlider = createSlider(0, 255, 50);
    gSlider.parent('column-one');
    gSlider.class('sliders');

    let c7 = createP("Change font colour (b):");
    c7.parent('column-one');
    c7.class('general');

    bSlider = createSlider(0, 255, 50);
    bSlider.parent('column-one');
    bSlider.class('sliders');

    textColor = color(127, 127, 127);

    let c8 =  createP("Choose a Font:");
    c8.parent('column-one');
    c8.class('general');

    createRadioButtons();
    selectedFont = font1;

    radio = createRadio();
    radio.parent('column-one');
    radio.class('radio');

    let btn = createButton("Download Image");
    btn.parent('column-one');
    btn.class('button');
    btn.mousePressed(saveimg);

    function saveimg() {
      saveCanvas(cnv, "my meme", "jpeg");
    }
  }
  
  function draw() {
    background(255);


    if (selectedImage) {
      image(selectedImage, 0, 0);
    }

    let val1 = inpt1.value();
    let val2 = inpt2.value();

    text(val1, 275, 120);
    text(val2, 275, 370);
    textFont(selectedFont);

    let val3 = slider1.value();
    textSize(val3);

    let r = rSlider.value();
    let g = gSlider.value();
    let b = bSlider.value();
    textColor = color(r, g, b);
    fill(textColor);
}

  function changeImage() {
    let selectedOption = this.value();
    if (selectedOption === "Image 1") {
      selectedImage = img1;
    } else if (selectedOption === "Image 2") {
      selectedImage = img2;
    } else if (selectedOption === "Image 3") {
      selectedImage = img3;
    }
  }

  function createRadioButtons() {
    let radio = createRadio();
    radio.option("Comic Sans");
    radio.option("Helvetica Compressed");
    radio.parent('column-one');
    radio.class('radio');
  
    radio.selected("Comic Sans");
    radio.changed(changeFont);
  }
  
  function changeFont() {
    let val = this.value();
    if (val === "Comic Sans") {
      selectedFont = font1;
    } else if (val === "Helvetica Compressed") {
      selectedFont = font2;
    }
  }
