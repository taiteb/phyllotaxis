let n = 0;
let c = 2.5;
let rad = 5;
let ang = 137.5;

let stepp = 77;

let colorIndex = 0;
let targetColor;
let currentColor;
let colors = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];

function setup() {
  createCanvas(1000, 1000);
  angleMode(DEGREES);
  colorMode(HSB);
  pixelDensity(5);
  // background(5);

  for (let i = 0; i < colors.length; i++) {
    colors[i][0] = random(255);
    colors[i][1] = random(105);
    colors[i][2] = random(55, 200);
  }

  targetColor = color(colors[colorIndex][0],
    colors[colorIndex][1], colors[colorIndex][2]);
  currentColor = targetColor;

}

function draw() {
  let a = n * ang
  let r = c * sqrt(n);
  let x = r * cos(a) + width / 2;
  let y = r * sin(a) + height / 2;

  // let col = 255;
  currentColor = lerpColor(currentColor, targetColor, 0.05);

  fill(currentColor);
  strokeWeight(1);
  // stroke(255);
  // noStroke();
  ellipse(x, y, rad, rad);

  // if (n % stepp === 0) {
  //   c += 0.03;
  //   if (ang < 137.63) {
  //     ang += 0.012
  //   }
  //   if (rad > -10) {
  //     rad -= 0.3
  //     console.log(rad)
  //   }
  // }
  // Updating current and projected color values
  if (n % 25 === 0) {
    colorIndex = (colorIndex + 1) % colors.length;
    targetColor = color(colors[colorIndex][0],
      colors[colorIndex][1], colors[colorIndex][2]);
  }
  // Resetting color values every 150 frames 
  // if (n % 150 === 0) {
  //   for (let i = 0; i < colors.length; i++) {
  //     colors[i][0] = random(255);
  //     colors[i][1] = random(255);
  //     colors[i][2] = random(255);
  //   }
  // }
  if (n%2 === 0){
    // ang -= 0.002
    if (rad < 10){
      rad += 0.003
    }else if (rad < 20){
      rad += 0.004
    }else if (rad < 30){
      rad += 0.005
    }
    if (c < 25){
      c += 0.002
    }
    console.log(rad)
  }
  //   // if (ang < 139 && ang > 135){
  //   //   ang += 0.005
  //   // }else if (ang > 135){
  //   //   ang -= 0.005;
  //   // }
  // }
  n++
}

function mouseClicked() {
  saveCanvas(`photo ${n}`, 'png');
}