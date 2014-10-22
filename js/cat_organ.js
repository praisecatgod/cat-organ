var canvasWidth;
var canvasHeight;
var canvas;
var audioContext;
var meowLoader;

var gainNode;
var gainNodeDrums;
var filterToggle;
var looping;

function init() {

  var canvas = oCanvas.create({
    canvas: "#canvas",
    background: "#CCCCFF",
    fps: 60
  });

  var _01 = canvas.display.rectangle({
    x: 25,
    y: 90,
    width: 25,
    height: 250,
    fill: "#FF66CC",
    stroke: "outside 5px #660066"
  });

  var _02 = canvas.display.rectangle({
    x: 50,
    y: 90,
    width: 25,
    height: 250,
    fill: "#FF66CC",
    stroke: "outside 5px #660066"
  });

  var _03 = canvas.display.rectangle({
    x: 75,
    y: 90,
    width: 25,
    height: 250,
    fill: "#FF66CC",
    stroke: "outside 5px #660066"
  });

  var _04 = canvas.display.rectangle({
    x: 100,
    y: 90,
    width: 25,
    height: 250,
    fill: "#FF66CC",
    stroke: "outside 5px #660066"
  });

  var _05 = canvas.display.rectangle({
    x: 125,
    y: 90,
    width: 25,
    height: 250,
    fill: "#FF66CC",
    stroke: "outside 5px #660066"
  });

  var _06 = canvas.display.rectangle({
    x: 150,
    y: 90,
    width: 25,
    height: 250,
    fill: "#FF66CC",
    stroke: "outside 5px #660066"
  });

  var _07 = canvas.display.rectangle({
    x: 175,
    y: 90,
    width: 25,
    height: 250,
    fill: "#FF66CC",
    stroke: "outside 5px #660066"
  });

  var _08 = canvas.display.rectangle({
    x: 200,
    y: 90,
    width: 25,
    height: 250,
    fill: "#FF66CC",
    stroke: "outside 5px #660066"
  });

  var _09 = canvas.display.rectangle({
    x: 225,
    y: 90,
    width: 25,
    height: 250,
    fill: "#FF66CC",
    stroke: "outside 5px #660066"
  });

  var _10 = canvas.display.rectangle({
    x: 250,
    y: 90,
    width: 25,
    height: 250,
    fill: "#FF66CC",
    stroke: "outside 5px #660066"
  });

  var _11 = canvas.display.rectangle({
    x: 275,
    y: 90,
    width: 25,
    height: 250,
    fill: "#FF66CC",
    stroke: "outside 5px #660066"
  });

  var _12 = canvas.display.rectangle({
    x: 300,
    y: 90,
    width: 25,
    height: 250,
    fill: "#FF66CC",
    stroke: "outside 5px #660066"
  });

  var _13 = canvas.display.rectangle({
    x: 325,
    y: 90,
    width: 25,
    height: 250,
    fill: "#FF66CC",
    stroke: "outside 5px #660066"
  });

  var _14 = canvas.display.rectangle({
    x: 350,
    y: 90,
    width: 25,
    height: 250,
    fill: "#FF66CC",
    stroke: "outside 5px #660066"
  });

  var _15 = canvas.display.rectangle({
    x: 375,
    y: 90,
    width: 25,
    height: 250,
    fill: "#FF66CC",
    stroke: "outside 5px #660066"
  });

  var p_vol_text = canvas.display.text({
    x: 500,
    y: 50,
    origin: {
      x: "center",
      y: "top"
    },
    font: "bold 20px Comic Sans",
    text: "piano volume",
    fill: "#0aa"
  });
  var p_vol_plus = canvas.display.rectangle({
    x: 450,
    y: 90,
    width: 50,
    height: 50,
    fill: "#67d4ff",
    stroke: "outside 5px #660066"
  });
  var p_vol_plus_text = canvas.display.text({
    x: 475,
    y: 100,
    origin: {
      x: "center",
      y: "top"
    },
    font: "bold 30px Comic Sans",
    text: "+",
    fill: "#0aa"
  });
  var p_vol_minus = canvas.display.rectangle({
    x: 505,
    y: 90,
    width: 50,
    height: 50,
    fill: "#67d4ff",
    stroke: "outside 5px #660066"
  });
  var p_vol_minus_text = canvas.display.text({
    x: 525,
    y: 100,
    origin: {
      x: "center",
      y: "top"
    },
    font: "bold 30px Comic Sans",
    text: "-",
    fill: "#0aa"
  });


  var b_vol_text = canvas.display.text({
    x: 625,
    y: 50,
    origin: {
      x: "center",
      y: "top"
    },
    font: "bold 20px Comic Sans",
    text: "beat volume",
    fill: "#0aa"
  });
  var b_vol_plus = canvas.display.rectangle({
    x: 575,
    y: 90,
    width: 50,
    height: 50,
    fill: "#67ffb8",
    stroke: "outside 5px #660066"
  });
  var b_vol_plus_text = canvas.display.text({
    x: 600,
    y: 100,
    origin: {
      x: "center",
      y: "top"
    },
    font: "bold 30px Comic Sans",
    text: "+",
    fill: "#0aa"
  });
  var b_vol_minus = canvas.display.rectangle({
    x: 630,
    y: 90,
    width: 50,
    height: 50,
    fill: "#67ffb8",
    stroke: "outside 5px #660066"
  });
  var b_vol_minus_text = canvas.display.text({
    x: 650,
    y: 100,
    origin: {
      x: "center",
      y: "top"
    },
    font: "bold 30px Comic Sans",
    text: "-",
    fill: "#0aa"
  });

  var piano_text = canvas.display.text({
    x: 500,
    y: 150,
    origin: {
      x: "center",
      y: "top"
    },
    font: "bold 20px Comic Sans",
    text: "piano filters",
    fill: "#0aa"
  });

  var p_1 = canvas.display.rectangle({
    x: 450,
    y: 175,
    width: 50,
    height: 50,
    fill: "#676cff",
    stroke: "outside 5px #660066"
  });
  var p_2 = canvas.display.rectangle({
    x: 505,
    y: 175,
    width: 50,
    height: 50,
    fill: "#676cff",
    stroke: "outside 5px #660066"
  });
  var p_3 = canvas.display.rectangle({
    x: 450,
    y: 225,
    width: 50,
    height: 50,
    fill: "#676cff",
    stroke: "outside 5px #660066"
  });
  var p_4 = canvas.display.rectangle({
    x: 505,
    y: 225,
    width: 50,
    height: 50,
    fill: "#676cff",
    stroke: "outside 5px #660066"
  });

  var p_0 = canvas.display.rectangle({
    x: 450,
    y: 275,
    width: 105,
    height: 50,
    fill: "#676cff",
    stroke: "outside 5px #660066"
  });


  var beat_text = canvas.display.text({
    x: 600,
    y: 150,
    origin: {
      x: "center",
      y: "top"
    },
    font: "bold 20px Comic Sans",
    text: "sick beats",
    fill: "#0aa"
  });
  var b_1 = canvas.display.rectangle({
    x: 575,
    y: 175,
    width: 50,
    height: 50,
    fill: "#0fc734",
    stroke: "outside 5px #660066"
  });
  var b_2 = canvas.display.rectangle({
    x: 630,
    y: 175,
    width: 50,
    height: 50,
    fill: "#0fc734",
    stroke: "outside 5px #660066"
  });





  canvas.addChild(_01);
  canvas.addChild(_02);
  canvas.addChild(_03);
  canvas.addChild(_04);
  canvas.addChild(_05);
  canvas.addChild(_06);
  canvas.addChild(_07);
  canvas.addChild(_08);
  canvas.addChild(_09);
  canvas.addChild(_10);
  canvas.addChild(_11);
  canvas.addChild(_12);
  canvas.addChild(_13);
  canvas.addChild(_14);
  canvas.addChild(_15);

  canvas.addChild(p_vol_plus);
  canvas.addChild(p_vol_minus);
  canvas.addChild(p_vol_plus_text);
  canvas.addChild(p_vol_minus_text);
  canvas.addChild(p_vol_text);

  canvas.addChild(b_vol_text);
  canvas.addChild(b_vol_plus);
  canvas.addChild(b_vol_minus);

  canvas.addChild(b_vol_plus_text);
  canvas.addChild(b_vol_minus_text);


  canvas.addChild(piano_text);
  canvas.addChild(p_0);
  canvas.addChild(p_1);
  canvas.addChild(p_2);
  canvas.addChild(p_3);
  canvas.addChild(p_4);

  canvas.addChild(beat_text);

  canvas.addChild(b_1);
  canvas.addChild(b_2);


  window.addEventListener('load', init, false);
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  audioContext = new AudioContext();
  gainNode = audioContext.createGain();
  gainNodeDrums = audioContext.createGain();
  filterToggle = 0;
  looping = false


  _01.bind("click tap", function() {
    loadNote("01");
  });

  _02.bind("click tap", function() {
    loadNote("02");
  });

  _03.bind("click tap", function() {
    loadNote("03");
  });

  _04.bind("click tap", function() {
    loadNote("04");
  });
  _05.bind("click tap", function() {
    loadNote("05");
  });
  _06.bind("click tap", function() {
    loadNote("06");
  });

  _07.bind("click tap", function() {
    loadNote("07");
  });

  _08.bind("click tap", function() {
    loadNote("08");
  });

  _09.bind("click tap", function() {
    loadNote("09");
  });

  _10.bind("click tap", function() {
    loadNote("10");
  });

  _11.bind("click tap", function() {
    loadNote("11");
  });

  _12.bind("click tap", function() {
    loadNote("12");
  });
  _13.bind("click tap", function() {
    loadNote("13");
  });
  _14.bind("click tap", function() {
    loadNote("14");
  });
  _15.bind("click tap", function() {
    loadNote("15");
  });

  _01.bind("mousedown", function() {
    this.fill = "#5d17e9";
    canvas.redraw();
  });

  _01.bind("mouseup", function() {
    this.fill = "#FF66CC";
    canvas.redraw();
  });


  _02.bind("mousedown", function() {
    this.fill = "#5d17e9";
    canvas.redraw();
  });

  _02.bind("mouseup", function() {
    this.fill = "#FF66CC";
    canvas.redraw();
  });

  _03.bind("mousedown", function() {
    this.fill = "#5d17e9";
    canvas.redraw();
  });

  _03.bind("mouseup", function() {
    this.fill = "#FF66CC";
    canvas.redraw();
  });

  _04.bind("mousedown", function() {
    this.fill = "#5d17e9";
    canvas.redraw();
  });

  _04.bind("mouseup", function() {
    this.fill = "#FF66CC";
    canvas.redraw();
  });

  _05.bind("mousedown", function() {
    this.fill = "#5d17e9";
    canvas.redraw();
  });

  _05.bind("mouseup", function() {
    this.fill = "#FF66CC";
    canvas.redraw();
  });

  _06.bind("mousedown", function() {
    this.fill = "#5d17e9";
    canvas.redraw();
  });

  _06.bind("mouseup", function() {
    this.fill = "#FF66CC";
    canvas.redraw();
  });

  _07.bind("mousedown", function() {
    this.fill = "#5d17e9";
    canvas.redraw();
  });

  _07.bind("mouseup", function() {
    this.fill = "#FF66CC";
    canvas.redraw();
  });

  _08.bind("mousedown", function() {
    this.fill = "#5d17e9";
    canvas.redraw();
  });

  _08.bind("mouseup", function() {
    this.fill = "#FF66CC";
    canvas.redraw();
  });

  _09.bind("mousedown", function() {
    this.fill = "#5d17e9";
    canvas.redraw();
  });

  _09.bind("mouseup", function() {
    this.fill = "#FF66CC";
    canvas.redraw();
  });

  _10.bind("mousedown", function() {
    this.fill = "#5d17e9";
    canvas.redraw();
  });

  _10.bind("mouseup", function() {
    this.fill = "#FF66CC";
    canvas.redraw();
  });

  _11.bind("mousedown", function() {
    this.fill = "#5d17e9";
    canvas.redraw();
  });

  _11.bind("mouseup", function() {
    this.fill = "#FF66CC";
    canvas.redraw();
  });

  _12.bind("mousedown", function() {
    this.fill = "#5d17e9";
    canvas.redraw();
  });

  _12.bind("mouseup", function() {
    this.fill = "#FF66CC";
    canvas.redraw();
  });

  _13.bind("mousedown", function() {
    this.fill = "#5d17e9";
    canvas.redraw();
  });

  _13.bind("mouseup", function() {
    this.fill = "#FF66CC";
    canvas.redraw();
  });
  _14.bind("mousedown", function() {
    this.fill = "#5d17e9";
    canvas.redraw();
  });

  _14.bind("mouseup", function() {
    this.fill = "#FF66CC";
    canvas.redraw();
  });

  _15.bind("mousedown", function() {
    this.fill = "#5d17e9";
    canvas.redraw();
  });

  _15.bind("mouseup", function() {
    this.fill = "#FF66CC";
    canvas.redraw();
  });

  p_vol_plus.bind("click tap", function() {
    gainNode.gain.value += 0.1;
  });
  p_vol_minus.bind("click tap", function() {
    gainNode.gain.value -= 0.1;
  });



  p_0.bind("click tap", function() {
    filterToggle = 0;
  });
  p_1.bind("click tap", function() {
    filterToggle = 1;
  });
  p_2.bind("click tap", function() {
    filterToggle = 2;
  });
  p_3.bind("click tap", function() {
    filterToggle = 3;
  });
  p_4.bind("click tap", function() {
    filterToggle = 4;
  });

  b_vol_plus.bind("click tap", function() {
    gainNodeDrums.gain.value += 0.1;
  });
  b_vol_minus.bind("click tap", function() {
    gainNodeDrums.gain.value -= 0.1;
  });


  b_1.bind("click tap", function() {
    if (looping !== true) {
      loadDrum(1);
      looping = true;
    } else {
      looping = false;
    }
  });
  b_2.bind("click tap", function() {
    if (looping !== true) {
      loadDrum(2);
      looping = true;
    } else {
      looping = false;
    }
  });




}

function loadNote(note) {
  var request = new XMLHttpRequest();
  request.open("GET", "../audio/spot/" + note + ".wav", true);
  request.responseType = "arraybuffer";
  request.onload = function() {
    audioContext.decodeAudioData(request.response, function(buffer) {
      playSoundBuffer = buffer;
      playSound();
    }, function(error) {
      console.error("decodeAudioData error", error);
    });
  };
  request.send();
}

function playSound() {
  var source = audioContext.createBufferSource();
  source.buffer = playSoundBuffer;
  source.connect(gainNode);
  gainNode.connect(audioContext.destination);
  //source.connect(audioContext.destination);
console.log(filterToggle);
  switch (filterToggle) {
    case 0:
      source.start(0);
      break;
    case 1:
      filter = audioContext.createBiquadFilter();
      gainNode.connect(filter);
      filter.connect(audioContext.destination);
      filter.type = 0; // Low-pass filter. See BiquadFilterNode docs
      filter.Q.value = 10;
      filter.frequency.value = 200; // Set cutoff to 440 HZ
      source.start(0);

      break;
    case 2:
      filter = audioContext.createBiquadFilter();
      gainNode.connect(filter);
      filter.connect(audioContext.destination);
      filter.type = 4; // Low-pass filter. See BiquadFilterNode docs
      filter.Q.value = 20;

      filter.frequency.value = 1000; // Set cutoff to 440 HZ
      source.start(0);
      break;
    case 3:
      filter = audioContext.createBiquadFilter();
      gainNode.connect(filter);
      filter.connect(audioContext.destination);
      filter.type = 2; // Low-pass filter. See BiquadFilterNode docs
      filter.Q.value = 30;

      filter.frequency.value = 100; // Set cutoff to 440 HZ
      source.start(0);
      break;
    case 4:
      filter = audioContext.createBiquadFilter();
      gainNode.connect(filter);
      filter.connect(audioContext.destination);
      filter.type = 5; // Low-pass filter. See BiquadFilterNode docs
      filter.Q.value = 40;

      filter.frequency.value = 600; // Set cutoff to 440 HZ
      source.start(0);
      break;
  }
  //source.start(0);

}

function loadDrum(beat) {
  var request = new XMLHttpRequest();
  request.open("GET", "../audio/drum_" + beat + ".mp3", true);
  request.responseType = "arraybuffer";
  request.onload = function() {
    audioContext.decodeAudioData(request.response, function(buffer) {
      playSoundBuffer = buffer;
      playDrum();
    }, function(error) {
      console.error("decodeAudioData error", error);
    });
  };
  request.send();
}

function playDrum() {
  var source = audioContext.createBufferSource();
  source.buffer = playSoundBuffer;
  //source.connect(audioContext.destination);
  source.connect(gainNodeDrums);
  gainNodeDrums.connect(audioContext.destination);
  source.loop = true;
  source.start(0);
}
