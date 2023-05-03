/**
 * Mouse 1D. 
 * 
 * Move the mouse left and right to shift the balance. 
 * The "mouseX" variable is used to control both the 
 * size and color of the rectangles. 
 */

let osc, freq1, freq2;


function setup() 
{
  let cnv = createCanvas(1080, 360);
  noStroke();
  colorMode(RGB, height, height, height);
  rectMode(CENTER);
}

function draw() 
{
  
  background(200);
  let r1 = map(mouseX, 0, width, 0, height);
  let r2 = height-r1;
  
  fill(0, r1, 150);
  rect(width/2 + r1/2, height/2, r1, r1);
  
  fill(0, 150, r2);
  rect(width/2 - r2/2, height/2, r2, r2);
  
}