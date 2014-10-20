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

  var _01 = canvas.display.image({
    x: 100,
    y: 100,
    height: 150,
    width: 150,
    origin: {
      x: "center",
      y: "center"
    },
    image: "./img/cathead.gif"
  });

  var _02 = canvas.display.image({
    x: 250,
    y: 100,
    height: 150,
    width: 150,
    origin: {
      x: "center",
      y: "center"
    },
    image: "./img/cathead.gif"
  });

  var _03 = canvas.display.image({
    x: 400,
    y: 100,
    height: 150,
    width: 150,
    origin: {
      x: "center",
      y: "center"
    },
    image: "./img/cathead.gif"
  });


  var _04 = canvas.display.image({
    x: 550,
    y: 100,
    height: 150,
    width: 150,
    origin: {
      x: "center",
      y: "center"
    },
    image: "./img/cathead.gif"
  });

  var _05 = canvas.display.image({
    x: 700,
    y: 100,
    height: 150,
    width: 150,
    origin: {
      x: "center",
      y: "center"
    },
    image: "./img/cathead.gif"
  });


  var _06 = canvas.display.image({
    x: 850,
    y: 100,
    height: 150,
    width: 150,
    origin: {
      x: "center",
      y: "center"
    },
    image: "./img/cathead.gif"
  });


  var _07 = canvas.display.image({
    x: 1000,
    y: 100,
    height: 150,
    width: 150,
    origin: {
      x: "center",
      y: "center"
    },
    image: "./img/cathead.gif"
  });


  var _08 = canvas.display.image({
    x: 1150,
    y: 200,
    height: 150,
    width: 150,
    origin: {
      x: "center",
      y: "center"
    },
    image: "./img/cathead.gif"
  });

  var _09 = canvas.display.image({
    x: 100,
    y: 200,
    height: 150,
    width: 150,
    origin: {
      x: "center",
      y: "center"
    },
    image: "./img/cathead.gif"
  });

  var _10 = canvas.display.image({
    x: 250,
    y: 200,
    height: 150,
    width: 150,
    origin: {
      x: "center",
      y: "center"
    },
    image: "./img/cathead.gif"
  });

  var _11 = canvas.display.image({
    x: 400,
    y: 200,
    height: 150,
    width: 150,
    origin: {
      x: "center",
      y: "center"
    },
    image: "./img/cathead.gif"
  });


  var _12 = canvas.display.image({
    x: 550,
    y: 200,
    height: 150,
    width: 150,
    origin: {
      x: "center",
      y: "center"
    },
    image: "./img/cathead.gif"
  });

  var _13 = canvas.display.image({
    x: 700,
    y: 200,
    height: 150,
    width: 150,
    origin: {
      x: "center",
      y: "center"
    },
    image: "./img/cathead.gif"
  });


  var _14 = canvas.display.image({
    x: 850,
    y: 200,
    height: 150,
    width: 150,
    origin: {
      x: "center",
      y: "center"
    },
    image: "./img/cathead.gif"
  });


  var _15 = canvas.display.image({
    x: 1000,
    y: 200,
    height: 150,
    width: 150,
    origin: {
      x: "center",
      y: "center"
    },
    image: "./img/cathead.gif"
  });


  var _16 = canvas.display.image({
    x: 1150,
    y: 200,
    height: 150,
    width: 150,
    origin: {
      x: "center",
      y: "center"
    },
    image: "./img/cathead.gif"
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
  canvas.addChild(_16);


_01.bind("mousedown", function () {
	this.fadeOut();
	canvas.redraw();
});

_01.bind("mouseup", function () {
  this.fadeIn();
  canvas.redraw();
});

_02.bind("mousedown", function () {
  this.fadeOut();
  canvas.redraw();
});

_02.bind("mouseup", function () {
  this.fadeIn();
  canvas.redraw();
});

_03.bind("mousedown", function () {
  this.fadeOut();
  canvas.redraw();
});

_03.bind("mouseup", function () {
  this.fadeIn();
  canvas.redraw();
});

_04.bind("mousedown", function () {
  this.fadeOut();
  canvas.redraw();
});

_04.bind("mouseup", function () {
  this.fadeIn();
  canvas.redraw();
});

_05.bind("mousedown", function () {
  this.fadeOut();
  canvas.redraw();
});

_05.bind("mouseup", function () {
  this.fadeIn();
  canvas.redraw();
});

_06.bind("mousedown", function () {
  this.fadeOut();
  canvas.redraw();
});

_06.bind("mouseup", function () {
  this.fadeIn();
  canvas.redraw();
});

_07.bind("mousedown", function () {
  this.fadeOut();
  canvas.redraw();
});

_07.bind("mouseup", function () {
  this.fadeIn();
  canvas.redraw();
});

_08.bind("mousedown", function () {
  this.fadeOut();
  canvas.redraw();
});

_08.bind("mouseup", function () {
  this.fadeIn();
  canvas.redraw();
});


_09.bind("mousedown", function () {
  this.fadeOut();
  canvas.redraw();
});

_09.bind("mouseup", function () {
  this.fadeIn();
  canvas.redraw();
});

_10.bind("mousedown", function () {
  this.fadeOut();
  canvas.redraw();
});

_10.bind("mouseup", function () {
  this.fadeIn();
  canvas.redraw();
});

_11.bind("mousedown", function () {
  this.fadeOut();
  canvas.redraw();
});

_11.bind("mouseup", function () {
  this.fadeIn();
  canvas.redraw();
});

_12.bind("mousedown", function () {
  this.fadeOut();
  canvas.redraw();
});

_12.bind("mouseup", function () {
  this.fadeIn();
  canvas.redraw();
});


_13.bind("mousedown", function () {
  this.fadeOut();
  canvas.redraw();
});

_13.bind("mouseup", function () {
  this.fadeIn();
  canvas.redraw();
});

_14.bind("mousedown", function () {
  this.fadeOut();
  canvas.redraw();
});

_14.bind("mouseup", function () {
  this.fadeIn();
  canvas.redraw();
});


_15.bind("mousedown", function () {
  this.fadeOut();
  canvas.redraw();
});

_15.bind("mouseup", function () {
  this.fadeIn();
  canvas.redraw();
});


_16.bind("mousedown", function () {
  this.fadeOut();
  canvas.redraw();
});

_16.bind("mouseup", function () {
  this.fadeIn();
  canvas.redraw();
});

}
