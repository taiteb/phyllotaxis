let n = 0;
let c = 3;
let rad = 2;
let ang = 137.5;

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  colorMode(HSB);
  background(0);
}

function draw() {
  let a = n * ang
  let r = c * sqrt(n);
  let x = r * cos(a) + width / 2;
  let y = r * sin(a) + height / 2;
  // fill(n % 256, 175, 175);
  // strokeWeight(3)
  noStroke();
  ellipse(x, y, rad, rad);

  if (n%10 === 0){
    // ang -= 0.002
    // rad += 0.02
    if (ang < 139){
      ang += 0.005
    }else if (ang > 135){
      ang -= 0.005;
    }
  }
  n++
}
