let mySound;

function preload() {
  soundFormats('mp3', 'wav');
  mySound = loadSound('/Users/dominicfrugoli/Desktop/lib/empty-example/dvorak.mp3');
}

function setup() {
  let cnv = createCanvas(400, 300);
  background(220);
  cnv.mousePressed(canvasPressed); 
  
  text('tap here to play', 10, 20);
}

function draw()
{
    background(220);
    cnv.mousePressed(canvasPressed);
}

function canvasPressed() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  mySound.play();
}