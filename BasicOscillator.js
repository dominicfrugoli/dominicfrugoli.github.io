const context = new AudioContext();

const osc = new OscillatorNode(context);
const amp = new GainNode(context);

osc.connect(amp);
amp.connect(context.destination);

amp.gain.value = 0.25;
osc.frequency(300);
osc.start(0.0);
osc.stop(2.0);