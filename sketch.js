let n = 0;
let c = 1;
let rad = 5;
let ang = 137.5;

let stepp = 159;
let sat = 55;
let hue = 130;

function setup() {
  createCanvas(1000, 1000);
  angleMode(DEGREES);
  colorMode(HSB);
  background(0);
}

function draw() {
  let a = n * ang
  let r = c * sqrt(n);
  let x = r * cos(a) + width / 2;
  let y = r * sin(a) + height / 2;

  let col = color((hue%256), sat, 255)
  // let col = 255;

  fill(col);
  strokeWeight(.5)
  ellipse(x, y, rad, rad);

  if (n%stepp === 0){
    c += 1;
    rad += 3;
    sat += 20;
    hue += 8;
    if (ang < 137.63){
      ang += 0.012
    }
    
    console.log("it happened", ang)
  }

  // if (n%10 === 0){
  //   // ang -= 0.002
  //   // rad += 0.02
  //   if (ang < 139 && ang > 135){
  //     ang += 0.005
  //   }else if (ang > 135){
  //     ang -= 0.005;
  //   }
  // }
  n++
}

function mouseClicked() {
    saveCanvas(`photo ${n}`, 'png');
}