var canvasWidth;
var canvasHeight;
var canvas;
var context;

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

  var p_vol_plus = canvas.display.rectangle({
    x: 450,
    y: 90,
    width: 50,
    height: 50,
    fill: "#67d4ff",
    stroke: "outside 5px #660066"
  });
  var p_vol_minus = canvas.display.rectangle({
    x: 505,
    y: 90,
    width: 50,
    height: 50,
    fill: "#67d4ff",
    stroke: "outside 5px #660066"
  });

  var b_vol_plus = canvas.display.rectangle({
    x: 575,
    y: 90,
    width: 50,
    height: 50,
    fill: "#67ffb8",
    stroke: "outside 5px #660066"
  });
  var b_vol_minus = canvas.display.rectangle({
    x: 630,
    y: 90,
    width: 50,
    height: 50,
    fill: "#67ffb8",
    stroke: "outside 5px #660066"
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
  canvas.addChild(b_vol_plus);
  canvas.addChild(b_vol_minus);

  canvas.addChild(p_1);
  canvas.addChild(p_2);
  canvas.addChild(p_3);
  canvas.addChild(p_4);

  canvas.addChild(b_1);
  canvas.addChild(b_2);


  var context;
  window.addEventListener('load', init, false);


  try {
    // Fix up for prefixing
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    context = new AudioContext();
  } catch (e) {
    alert('lmao, are you using ie???');
  }

}
