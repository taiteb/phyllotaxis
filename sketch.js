let n = 0;
let c = 2;
let rad = 6;
let ang = 137.5;

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

  // let col = color((r * a) % 256, 175, 175)
  let col = 255;

  fill(col);
  // strokeWeight(3)
  noStroke();
  ellipse(x, y, rad, rad);

  if (n%150 === 0){
    c += 0.25;
    rad -= 0.25;
    console.log("it happened")
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