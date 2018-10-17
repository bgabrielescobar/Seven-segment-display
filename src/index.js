let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let segmentClass = function(x, y, width, height, binary) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.binary = binary;
};

let hexValues = [
  0x7e,
  0x30,
  0x6d,
  0x79,
  0x33,
  0x5b,
  0x5f,
  0x70,
  0x7f,
  0x7b,
  0x77,
  0x1f,
  0x4e,
  0x3d,
  0x4f,
  0x47,
  0x37,
  0xe
];

let counter = 0;

let segment = Array(7);

segment[0] = new segmentClass(20, 0, 200, 20, 6);
segment[1] = new segmentClass(220, 20, 20, 200, 5);
segment[2] = new segmentClass(220, 240, 20, 200, 4);
segment[3] = new segmentClass(20, 440, 200, 20, 3);
segment[4] = new segmentClass(0, 240, 20, 200, 2);
segment[5] = new segmentClass(0, 20, 20, 200, 1);
segment[6] = new segmentClass(20, 220, 200, 20, 0);

let changeNumber = function() {
  for (let i = 0; i < segment.length; i++) {
    if (((hexValues[counter] >> segment[i].binary) & 1) == 1) {
      ctx.fillStyle = "#FF0000";
    } else {
      ctx.fillStyle = "rgb(35, 18, 12)";
    }
    ctx.fillRect(
      segment[i].x,
      segment[i].y,
      segment[i].width,
      segment[i].height
    );
  }
  counter = counter < hexValues.length - 1 ? counter + 1 : 0;
};

setInterval(changeNumber, 500);
