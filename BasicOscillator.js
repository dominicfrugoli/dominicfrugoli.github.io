

var osc, freq, amp, isPlaying;

var columnWidth = 50;
var lastColumn = 1;


function setup() 
{
  let canvas = createCanvas(640, 360);
  canvas.mouseIsPressed(playOsc);
  osc = new p5.Oscillator('sine');
  colorMode(HSB, height, height, height)
  noStroke();
  background(255);
}


function draw()
{                        
    let whichColumn = mouseX/columnWidth;
    if(whichColumn != lastColumn)
    {
      var columnX = whichColumn * columnWidth;
      fill(mouseY, height, height);
      rect(columnX, 0, columnWidth, height);
      lastColumn = whichColumn;
    }
    if(isPlaying)
    {
        osc.freq(freq, 0.1);
        osc.amp(amp, 0.1);
    }
  
}


function playOsc()
{
    osc.start();
    isPlaying = true;
}

function mouseReleased()
{
    osc.amp(0, 0.5);
    isPlaying = false;
}
