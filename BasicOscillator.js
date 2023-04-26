let polySynth;

function setup() 
{
  let cnv = createCanvas(100, 100);
  cnv.mousePressed(playSynth);
  background(220);
  text('click to play', 20, 20);
  polySynth = new p5.PolySynth();
}


function playSynth() 
{
  userStartAudio();

  // note duration (in seconds)
  let dur = 1.5;

  // time from now (in seconds)
  let time = 0;

  // velocity (volume, from 0 to 1)
  let vel = 0.1;

  // notes can overlap with each other
  polySynth.play('G2', vel, 0, dur);
  polySynth.play('C3', vel, time += 1/3, dur);
  polySynth.play('G3', vel, time += 1/3, dur);
  polySynth.play('E3', vel, 0, dur);
  polySynth.play('D5', vel, time += 1/3, dur);
  polySynth.play('B4', vel, time += 1/3, dur);
}